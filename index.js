const express = require("express");
const app = express();

const userRoute = require("../MRN/src/routes/user.route");
const port = 3000;

const connectDataBase = require("./src/database/db");
connectDataBase();

app.use(express.json());
app.use("/user", userRoute);

app.listen(3000, () => console.log(`servidor rodando na porta ${port}`));
