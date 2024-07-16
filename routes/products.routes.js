const express = require ("express");
const router = express.Router();

router.get("/", (req, res)=> {
    res.send("ruta de productos");
})


router.get("/:id", (req, res)=> {
    res.send("ruta de produtos " + req.params.id);
})



module.exports = router