import Joi from "joi";

const TestSchema = {
  urlIdentificator: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

export default TestSchema;
