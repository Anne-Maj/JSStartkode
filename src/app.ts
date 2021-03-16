import express from "express";
import dotenv from "dotenv";
import path from "path"
dotenv.config()


const app = express()

// Something has to go in here
// app.use('/static', express.static('public'))
app.use(express.static(path.join(process.cwd(), "public"))) //betyder, at alt hvad der liggger i public mappe kan tilgåes udefra.


app.get("/demo", (req, res) => {
  let a = 134;
  console.log(a); 
    
  res.send("Server is up");
})




export default app;
