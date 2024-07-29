
import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { createFindings, createObservation, getAllFindings, getAllObservations } from "./functions";




const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// route
app.post("/create-observation", createObservation);
app.get("/get-all-observations", getAllObservations)
app.post("/create-finding", createFindings)
app.get("/get-all-findings", getAllFindings)

exports.app = functions.https.onRequest(app);