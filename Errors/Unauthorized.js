import CustomErrorApi from "./Custom-Api.js";
import { StatusCodes } from "http-status-codes";


export default class Unauthorized extends CustomErrorApi {
    constructor(message) {
      super(message);
      this.statusCode = StatusCodes.UNAUTHORIZED;
    }
  }