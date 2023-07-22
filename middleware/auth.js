import { UnAuthenticated } from "../Errors/index.js";
import jwt from 'jsonwebtoken'
const auth = async (req, res, next) => {
const authHeaders = req.headers.authorization;

if(!authHeaders || !authHeaders.startsWith('Bearer')) {
    throw new UnAuthenticated('Authentication invalid!')
}
  const token = authHeaders.split(' ')[1]
  
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = {userId: payload.userID};
    
    next();
  } catch (error) {
    throw new UnAuthenticated('Authentication error!');
  }
  
};
export default auth;
