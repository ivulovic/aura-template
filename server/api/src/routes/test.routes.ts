import router from "express-promise-router";

import TestController from "../controllers/test.controller";
import RouterHelper from "../helpers/route.helper";
import CommonSchema from "../schemas/common.schema";
import TestSchema from "../schemas/test.schema";

const r = router();

r.route("/").get([], TestController.get);
r.route("/").post([RouterHelper.validateBody(TestSchema.urlIdentificator)], TestController.post);
r.route("/:id").patch([RouterHelper.validateParams(CommonSchema.objectId, "id")], TestController.patch);
r.route("/:id").delete([RouterHelper.validateParams(CommonSchema.objectId, "id")], TestController.delete);

export default r;
