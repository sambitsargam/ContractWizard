#! /usr/bin/env node
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
// @ts-ignore
// const figlet = require('figlet');
const figlet_1 = __importDefault(require("figlet"));
// import method to create projects
const create_1 = __importDefault(require("./create"));
const wizard_1 = __importDefault(require("./wizard"));
const faucet_1 = __importDefault(require("./faucet"));
const availableOptions = ["create", "wizard","faucet"];
// second argument should be the selected option
const option = process.argv[2];
if (!availableOptions.includes(option)) {
  console.log(
    `Invalid operation. Available operations are: ${availableOptions}`
  );
  process.exit(-1);
}
// Starts CLI
console.log(
  chalk_1.default.magentaBright(
    figlet_1.default.textSync(`contract-wizard ${option}`, {
      horizontalLayout: "full",
    })
  )
);
switch (option) {
  case "create":
    // arg 3 is the project name
    const projectName = process.argv[3] || ".";
    (0, create_1.default)(projectName);
    break;
  case "wizard":
    (0, wizard_1.default)();
    break;
  case "faucet":
    (0, faucet_1.default)();
    break;
}
