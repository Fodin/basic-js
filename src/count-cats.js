const CustomError = require("../extensions/custom-error");

module.exports = matrix => matrix.flat().filter((t) => t === "^^").length;

