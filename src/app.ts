import express from "express";
import router from "./routes/routes";
import bodyparser from "body-parser";

const app = express();

app.use(bodyparser.json());

app.use(router);

app.listen(3000, () => {
    console.log("server started!");
});