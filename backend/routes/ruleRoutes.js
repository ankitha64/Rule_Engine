// backend/routes/ruleRoutes.js

const express = require("express");
const router = express.Router();
const ruleController = require("../controllers/ruleControllers"); // Correct path to controller

// Route to create a rule
router.post("/create-rule", ruleController.createRule);

// Route to evaluate a rule
router.post("/evaluate-rule", ruleController.evaluateRule);

// Route to fetch all rules
router.get("/", ruleController.getAllRules);

module.exports = router;
