import { Response } from "firebase-functions";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export const response = async (
  data: any,
  res: Response,
  message: string,
  status: boolean,
  code: StatusCodes
) => {
  return res.status(code).json({
    data: data,
    status: status,
    message: message || getReasonPhrase(code),
  });
};

export const gatewayResponse = async (
  res: Response,
  message: string,
  code: StatusCodes
) => {
  return res.status(code).json({
    code: code,
    message: message || getReasonPhrase(code),
  });
};
