import app from "../app"
//import d from 'debug'
const debug = require("debug")("www")


const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server started, listening on PORT: ${PORT}`))