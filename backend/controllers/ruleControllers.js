// backend/controllers/ruleControllers.js

const Rule = require("../models/ruleModel");
const { parseRule, evaluateNode } = require("../utils/astUtils");

// Controller function to create a rule
exports.createRule = async (req, res) => {
  try {
    const { ruleString, name } = req.body;
    const ast = parseRule(ruleString);
    const rule = new Rule({ name, ast });
    await rule.save();
    res.status(201).json({ message: "Rule created successfully", rule });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to evaluate a rule
exports.evaluateRule = async (req, res) => {
  try {
    const { ruleId, userData } = req.body;
    const rule = await Rule.findById(ruleId);
    if (!rule) {
      return res.status(404).json({ message: "Rule not found" });
    }
    const result = evaluateNode(rule.ast, userData);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all rules
exports.getAllRules = async (req, res) => {
  try {
    const rules = await Rule.find({});
    res.status(200).json(rules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
