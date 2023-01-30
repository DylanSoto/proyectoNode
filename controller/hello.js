function getHello(req, res) {
    res.send("Hola mundo desde controller");
}

module.exports = { getHello };