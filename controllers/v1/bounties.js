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
	db.Bounty.findById(req.params.id)
	.then(bounty => {
		if (bounty) {
		res.send(bounty);			
		} else {
			res.status(404).send({ message: 'Resource not located'});
		}
	})
	.catch(err => {
		console.log(err);
		res.status(503).send({ message: 'ERROR finding bounty by id' });
	})
})

// POST /v1/bounties
router.post("/", (req, res) => {
	db.Bounty.create(req.body)
	.then(bounty => {
		res.status(201).send(bounty);
	})
	.catch(err => {
		console.log(err.name);
		if (err.name === 'ValidationError') {
			res.status(406).send({ message: 'Validation Error'});
		} else {
			res.status(503).send({ message: 'Database or server error' });
		}
	})
})

// PUT /v1/bounties/:id
router.put("/:id", (req, res) => {
	db.Bounty.findOneAndUpdate({
		_id: req.params.id
		}, req.body,
		{new: true}
	)
	.then(editedBounty => {
		res.send(editedBounty);
	})
	.catch(err => {
		console.log(err);
		res.status(503).send("ERROR editing bounty");
	})

})

// DELETE /v1/bounties (delete all)
router.delete("/", (req, res) => {
	db.Bounty.deleteMany()
	.then(() => {
		res.send({ message: 'Deleted all records'});
	})
	.catch(err => {
		console.log(err);
		res.status(503).send({ message: 'Server error while deleting'});
	})
})

// DELETE /v1/bounties/:id (delete one)
router.delete("/:id", (req, res) => {
	db.Bounty.findByIdAndDelete(req.params.id)
	.then(() => {
		res.status(204).send();
	})
	.catch(err => {
		console.log(err);
		res.status(503).send({ message: 'Server error while attempting delete'});
	})
})

module.exports = router;