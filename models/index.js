require("dotenv");
let mongoose = require("mongoose");

// MongoDB connection string
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hunters2", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

module.exports.Bounty = require("./bounty");