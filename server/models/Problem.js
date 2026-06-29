const mongoose = require("mongoose");

// This defines the "shape" of every problem entry stored in our database
const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    enum: ["LeetCode", "Codeforces", "GeeksforGeeks", "HackerRank", "Other"],
    required: true,
  },
  topic: {
    type: String,
    enum: [
      "Array",
      "String",
      "Linked List",
      "Stack",
      "Queue",
      "Tree",
      "Graph",
      "Dynamic Programming",
      "Greedy",
      "Backtracking",
      "Binary Search",
      "Sorting",
      "Hashing",
      "Recursion",
      "Math",
      "Other",
    ],
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Solved", "Attempted", "Revisit"],
    default: "Solved",
  },
  timeTakenMinutes: {
    type: Number,
  },
  dateSolved: {
    type: Date,
    default: Date.now,
  },
  notes: {
    type: String,
  },
  link: {
    type: String,
  },
});

// "Problem" is the name of this model - mongoose will create
// a "problems" collection in MongoDB automatically
module.exports = mongoose.model("Problem", problemSchema);