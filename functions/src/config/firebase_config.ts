import * as admin from "firebase-admin";

const serviceAccount = require("../../firebaseKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });
