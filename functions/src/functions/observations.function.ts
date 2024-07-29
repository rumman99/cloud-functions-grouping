import { Request, Response } from "firebase-functions";
import { StatusCodes } from "http-status-codes";
import { Observation } from "../models";
import { response } from "../utils/response";
import { db } from "../config/firebase_config";

export const createObservation = async (req: Request, res: Response) => {
  try {
    const observation: Observation = req.body;
    const data = await db.collection("observations").add(observation);

    return response(
      data,
      res,
      "New Observation Created",
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

export const getAllObservations = async (req: Request, res: Response) => {
  try {
    const data = await db.collection("observations").get();

    let allObservation: any = [];
    data.forEach((obs) => allObservation.push({ id: obs.id, ...obs.data() }));

    if(allObservation.length <=0){
        return res.status(500).send("No user Found");
    }

    return response(
      allObservation,
      res,
      "Fetched all Observation",
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
