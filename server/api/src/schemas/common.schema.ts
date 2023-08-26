import Joi from "joi";

const CommonSchema = {
  objectId: Joi.object().keys({
    param: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
  }),
  username: Joi.object().keys({
    param: Joi.string().required(),
  }),
  email: Joi.object().keys({
    param: Joi.string().email().required(),
  }),
};

export default CommonSchema;
