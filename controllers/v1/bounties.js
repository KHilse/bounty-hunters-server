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


// GET /v1/bounties/:id
router.get("/:id", (req, res) => {
	res.send("STUB for GET /bounties/id");
})

// POST /v1/bounties
router.post("/", (req, res) => {
	db.Bounty.create(req.body)
	.then(bounty => {
		res.status(201).send(bounty);
	})
	.catch(err => {
		console.log(err);
		res.status(500).send("ERROR creating new bounty");
	})
})

// PUT /v1/bounties/:id
router.put("/:id", (req, res) => {
	res.send("STUB for PUT /bounties/id");
})

// DELETE /v1/bounties (delete all)
router.delete("/", (req, res) => {
	res.send("STUB for DELETE /bounties (all)");
})

// DELETE /v1/bounties/:id (delete one)
router.delete("/:id", (req, res) => {
	res.send("STUB for DELETE /bounties/id");
})

module.exports = router;