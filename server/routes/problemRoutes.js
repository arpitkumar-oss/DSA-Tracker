const express = require("express");
const router = express.Router();
const Problem = require("../models/Problem");

// CREATE - Add a new problem entry
router.post("/", async (req, res) => {
  try {
    const newProblem = new Problem(req.body);
    const savedProblem = await newProblem.save();
    res.status(201).json(savedProblem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ - Get all problem entries
router.get("/", async (req, res) => {
  try {
    const problems = await Problem.find().sort({ dateSolved: -1 });
    res.json(problems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ - Get a single problem entry by ID
router.get("/:id", async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem) return res.status(404).json({ error: "Problem not found" });
    res.json(problem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE - Edit an existing problem entry
router.put("/:id", async (req, res) => {
  try {
    const updatedProblem = await Problem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProblem)
      return res.status(404).json({ error: "Problem not found" });
    res.json(updatedProblem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE - Remove a problem entry
router.delete("/:id", async (req, res) => {
  try {
    const deletedProblem = await Problem.findByIdAndDelete(req.params.id);
    if (!deletedProblem)
      return res.status(404).json({ error: "Problem not found" });
    res.json({ message: "Problem deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;