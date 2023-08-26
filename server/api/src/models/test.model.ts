import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  name: String,
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "account",
  },
  modifiedBy: {
    type: Schema.Types.ObjectId,
    ref: "account",
  },
  createdAt: Number,
  modifiedAt: Number,
});

const modelName = "tests";
const collectionName = "tests";

const TestModel = mongoose.model(modelName, TestSchema, collectionName);

export default TestModel;
