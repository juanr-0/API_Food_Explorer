const { Router } = require("express");

const usersRouter = require("./users.routes");
const sessionsRouter = require("./sessions.routes");
const ordersRouter = require("./orders.routes");
const productsRouter = require("./products.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/products", productsRouter);

routes.use("/orders", ordersRouter);
routes.use("/sessions", sessionsRouter);

module.exports = routes;