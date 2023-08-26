import Joi from "joi";

const RouterHelper = {
  validateParams: (schema, name) => {
    return (req, res, next) => {
      const result = schema.validate({ param: req.params[name] });
      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        if (!req.value) req.value = {};
        if (!req.value["params"]) req.value["params"] = {};
        req.value["params"][name] = result.value.param;
        next();
      }
    };
  },
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.body);
      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        if (!req.value) req.value = {};
        if (!req.value["body"]) req.value["body"] = {};
        req.value["body"] = result.value;
        next();
      }
    };
  },
  schemas: {
    test: Joi.object().keys({
      name: Joi.string(),
    }),
  },
};

export default RouterHelper;
