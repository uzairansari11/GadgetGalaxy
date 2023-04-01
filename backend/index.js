const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connection } = require("./config/db");
const { userRouter } = require("./routes/users.routes");
const { productRouter } = require("./routes/products.routes");
const { auth } = require("./middleware/authe.middleware");
const { cartRoute } = require("./routes/carts.routes");
const { adminRouter } = require("./routes/admin.routes");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.send({ msg: "Welcome to the Gadget Galaxy" });
});
app.use(express.json());
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/products", productRouter);
app.use(auth);
app.use("/cart", cartRoute);

app.listen(8080, async () => {
	await connection();
	console.log(`server is running ${process.env.port}`);
});
