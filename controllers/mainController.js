const mainController = {
    index(req, res){
        res.send("hola mundo")
    },
    saludo (req, res) {
        return "hola saludo"

    }

}



module.exports = mainController;