// utils/astUtils.js

// Improved parseRule function to handle more complex rules
exports.parseRule = (ruleString) => {
  // Tokenize the rule string by spaces
  const tokens = ruleString.trim().split(" ");

  if (tokens.length < 3) {
    throw new Error(
      "Invalid rule format. Please provide a rule in the format: 'operand operator operand'"
    );
  }

  const leftOperand = tokens[0];
  const operator = tokens[1];
  const rightOperand = tokens[2];

  // Check if we have valid operator and operands
  if (!operator || !leftOperand || !rightOperand) {
    throw new Error(
      "Failed to parse rule. Ensure you have an operand, an operator, and another operand."
    );
  }

  return {
    type: "operator",
    operator: operator,
    left: { type: "operand", value: leftOperand },
    right: { type: "operand", value: rightOperand },
  };
};

// Function to evaluate a node with enhanced error handling
exports.evaluateNode = (node, userData) => {
  if (!node || !node.type) {
    throw new Error("Invalid AST node encountered during evaluation.");
  }

  if (node.type === "operator") {
    const leftValue = exports.evaluateNode(node.left, userData);
    const rightValue = exports.evaluateNode(node.right, userData);

    switch (node.operator) {
      case ">":
        return leftValue > rightValue;
      case "<":
        return leftValue < rightValue;
      case "==":
        return leftValue == rightValue;
      case "AND":
        return leftValue && rightValue;
      case "OR":
        return leftValue || rightValue;
      default:
        throw new Error(`Unsupported operator: ${node.operator}`);
    }
  }

  if (node.type === "operand") {
    return isNaN(node.value) ? userData[node.value] : parseFloat(node.value);
  }

  throw new Error("Unsupported node type");
};
