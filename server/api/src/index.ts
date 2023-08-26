import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";

import Config from "./config";
import testRoutes from "./routes/test.routes";

const app = express();

const port = process.env.PORT || 5001;

mongoose.Promise = global.Promise;
mongoose
  .connect(Config.DB_STRING)
  .then(function () {
    console.log("API app, connected successfully.");
  })
  .catch(function (e) {
    console.log("API app, connecting failed.", e);
  });

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/test", testRoutes);
// app.use("/api/ai", openAIRoutes);
// app.use("/api/stream", streamRoutes);

if (import.meta.env.PROD) {
  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
}

export const EquilibriusAPI = app;
