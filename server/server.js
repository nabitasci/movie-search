const express = require("express");

const app = express();

const movieRouter = require("./src/routers/moveRouter");
app.use("/", movieRouter);

app.listen(8000, () => console.log('Movie Search  RESTful API server started on: ' + 8000));
