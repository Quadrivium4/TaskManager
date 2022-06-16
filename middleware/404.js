const notFound = (req, res) =>{
    res.status(404).send("rout does not exists");
}
module.exports = notFound;