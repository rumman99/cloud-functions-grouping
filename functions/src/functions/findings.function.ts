import { Request, Response } from "firebase-functions";
import { StatusCodes } from "http-status-codes";
import { response } from "../utils/response";
import { Finding } from "../models";
import { db } from "../config/firebase_config";


export const createFindings= async(req: Request, res: Response)=>{
    try {
        const finding: Finding= req.body;
        const data= await db.collection("findings").add(finding);

        return response(
            data,
            res,
            "New Findings Created",
            true,
            StatusCodes.CREATED
          );

    } catch (error) {
        console.log("error: ", error);
        return response(
            null,
            res,
            "Internal server error",
            false,
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

export const getAllFindings = async (req: Request, res: Response) => {
    try {
      const data = await db.collection("findings").get();
  
      let allFinding: any = [];
      data.forEach((finding) => allFinding.push({ id: finding.id, ...finding.data()}));
  
      if(allFinding.length <=0){
          return res.status(500).send("No user Found");
      }
  
      return response(
        allFinding,
        res,
        "Fetched all Findings",
        true,
        StatusCodes.CREATED
      );
    } 
    catch (error) {
      console.log("error: ", error);
      return response(
        null,
        res,
        "Internal server error",
        false,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  };