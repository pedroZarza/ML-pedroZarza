const express = require ("express");
const router = express.Router();
const mainRouter = require("./main.routes");
const productsRouter = require("./products.routes");


router.use("/" , mainRouter);

router.use("/productos", productsRouter);




module.exports = router;