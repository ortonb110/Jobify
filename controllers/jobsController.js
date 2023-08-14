import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../Errors/index.js";
import Job from "../models/Job.js";
import checkPermissions from "../Utils/checkPermissions.js";
import mongoose from "mongoose";
import moment from 'moment';

const createJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    throw new BadRequestError("Please provide all values!");
  }

  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  const {status, jobType, sort, search} = req.query;

  const queryObject = {
    createdBy: req.user.userId
  }

  if(status !== 'all') {
    queryObject.status = status;
  }
  
  if(jobType !== 'all') {
    queryObject.jobType = jobType;
  }

  if(search) {
    queryObject.position = {$regex: search, $options: 'i'}
  }

  let result = Job.find(queryObject);

  if(sort === 'latest') {
    result = result.sort('-createdAt');
  }
  if(sort === 'oldest') {
    result = result.sort('createdAt');
  }
  if(sort === 'a-z') {
    result = result.sort('position');
  }
  if(sort === 'z-a') {
    result = result.sort('-position');
  }


  const jobs = await result
  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};

const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { company, position } = req.body;
  if (!company || !position) {
    throw new BadRequestError("Please provide all values!");
  }

  const job = await Job.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`No Job with id: ${jobId}`);
  }

  //Check permissions
  checkPermissions(req.user, job.createdBy);

  const updateJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updateJob });
};

const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  let defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    {
      $sort: { "_id.year": -1, "_id.month": -1 },
    },
    { $limit: 6 },
  ]);


  monthlyApplications = monthlyApplications.map((item)=> {
    const {_id:{month, year}, count} = item;
    const date =moment().month(month-1).year(year).format('MMM Y');
    return {date, count};
  }).reverse()

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};

const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Job.findOne({ _id: jobId });

  checkPermissions(req.user, job.createdBy);

  await Job.findByIdAndRemove({ _id: jobId });

  res.status(StatusCodes.OK).json({ msg: "Success: Deleted Job" });
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
