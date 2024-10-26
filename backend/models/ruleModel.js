// models/ruleModel.js
const mongoose = require("mongoose");

// Define a schema for AST nodes
const NodeSchema = new mongoose.Schema({
  type: { type: String, required: true }, // "operator" or "operand"
  left: { type: mongoose.Schema.Types.Mixed }, // Could be another node or null
  right: { type: mongoose.Schema.Types.Mixed }, // Could be another node or null
  value: { type: mongoose.Schema.Types.Mixed }, // Used only for operand nodes
});

// Define the schema for Rule
const RuleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ast: { type: NodeSchema, required: true },
});

module.exports = mongoose.model("Rule", RuleSchema);
