const { Router } = require('express');

const OrdersController = require("../controllers/OrdersController")

const ordersController = new OrdersController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const verifyUserAuthorization =  require("../middlewares/verifyUserAuthorization");

const ordersRoutes = Router();

ordersRoutes.use(ensureAuthenticated);

ordersRoutes.post("/", ordersController.create);
ordersRoutes.put("/", verifyUserAuthorization("admin"), ordersController.update);

ordersRoutes.get("/", ordersController.index);

module.exports = ordersRoutes;