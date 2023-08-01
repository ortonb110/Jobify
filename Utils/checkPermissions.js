import { Unauthorized } from "../Errors/index.js"


const checkPermissions = (requestUser, resourceUserId) => {
    if(requestUser.userId === resourceUserId.toString()) return
    throw new Unauthorized('Not authorized to access this route!')
}


export default checkPermissions