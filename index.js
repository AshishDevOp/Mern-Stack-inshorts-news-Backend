
import  express  from "express";

//components
import Connection  from "./connection/db.js";
import Defaultdata from "./default.js";


const app = express();

const PORT = 8000;

Connection();

app.listen(PORT, () => {
    console.log("SERVER IS RUNNING ON PORT 8000")
})

Defaultdata();