import TestModel from "../models/test.model";

const TestController = {
  get: async (req, res): Promise<void> => {
    try {
      const tests = await TestModel.find();
      return res.status(200).send({ get: true, data: tests });
    } catch (e) {
      console.log(e);
    }
  },
  post: (req, res): void => {
    try {
      return res.status(200).send({ post: true });
    } catch (e) {
      console.log(e);
    }
  },
  patch: (req, res): void => {
    try {
      return res.status(200).send({ patch: true });
    } catch (e) {
      console.log(e);
    }
  },
  delete: (req, res): void => {
    try {
      return res.status(200).send({ delete: true });
    } catch (e) {
      console.log(e);
    }
  },
};

export default TestController;
