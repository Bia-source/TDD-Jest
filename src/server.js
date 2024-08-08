import express from "express";

const app = express();
const port = 2000;

app.use(express.json());

app.listen(port, ()=> {
    console.log("Server running🚀")
});
