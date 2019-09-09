let router = require("express").Router();
let db = require('../../models');


// GET /v1/bounties
router.get("/", (req, res) => {
	db.Bounty.find()
	.then(bounties => {
		res.send(bounties);
	})
	.catch(err => {
		console.log(err);
		res.status(503).send({ message: "Error!" })
	})
})




module.exports = router;