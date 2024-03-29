require("dotenv");
require('cors');
let express = require("express");
let app = express();
//let db = require("./models");


// DB Models


// Middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json({ limit: '50mb ' }));
app.use(cors());

// Controllers
app.use("/v1/bounties", require("./controllers/v1/bounties"));


// 404 Catch-all route
app.get("*", (req, res) => {
	res.status(404).send({ message: "Not found!" })
})


// Listener
app.listen(process.env.PORT || 8000, () => { console.log("Listening on port", process.env.PORT)});