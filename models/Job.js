import mongoose from "mongoose";



const JobsSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "please provide a company"],
    maxlength: 50,
    
  },
  position: {
    type: String,
    required: [true, "please provide a position"],
    maxlength: 100,
    
  },
  status: {
    type: String,
    enum: ['interview', 'declined', 'pending'],
    default: 'pending'
  },
  jobType: {
    type: String,
    enum: ['full-time', 'part-time', 'remote', 'internship'],
    default: 'full-time'
    
  },
  jobLocation: {
    type: String,
    required: true,
    default: 'my city'
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    required: [true, 'Please provide user'],
    ref: 'User',
  },
  
}, {timestamps: true});


export default mongoose.model('Job', JobsSchema);
