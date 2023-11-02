const { Router } = require("express");
const ProductsController = require("../controllers/ProductsController");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const verifyUserAuthorization =  require("../middlewares/verifyUserAuthorization");


const multer = require('multer');
const uploadConfig = require('../configs/upload');

const productsRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const productsController = new ProductsController();

productsRoutes.use(ensureAuthenticated);

productsRoutes.post("/", verifyUserAuthorization("admin"),upload.single("image"), productsController.create);
productsRoutes.put("/:id", verifyUserAuthorization("admin"),upload.single("image"), productsController.update);

productsRoutes.get("/", productsController.index);

productsRoutes.get("/:id", productsController.show);
productsRoutes.delete("/:id", productsController.delete);



module.exports = productsRoutes;