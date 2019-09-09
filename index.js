require("dotenv");
let express = require("express");
let app = express();
//let db = require("./models");


// DB Models


// Middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json({ limit: '50mb ' }));

// Routes


// Catch-all
app.get("*", (req, res) => {
	res.status(404).send({ message: "Not found!" })
})


// Listener
app.listen(process.env.PORT || 8000, () => { console.log("Listening on port", process.env.PORT)});