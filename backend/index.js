const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connection } = require("./config/db");
const { userRouter } = require("./routes/users.routes");
const { productRouter } = require("./routes/products.routes");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.send({ msg: "Welcome to the Gadget Galaxy" });
});
app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(8080, async () => {
	await connection();
	console.log(`server is running ${process.env.port}`);
});
