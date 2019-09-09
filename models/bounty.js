let mongoose = require("mongoose");

// Schema
let bountySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 100
	},
	wantedFor: {
		type: String,
		required: true
	},
	client: {
		type: String,
		required: true
	},
	ship: String,
	reward: {
		type: Number,
		default: 100000
	},
	hunters: Array,
	captured: {
		type: Boolean,
		default: false
	},
	lastSeen: String
})

module.exports = mongoose.model("Bounty", bountySchema);