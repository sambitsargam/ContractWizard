"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const site = `https://chainide.com/s/createTempProject/{Name}`;
function faucet({ name }) {
    console.log(chalk_1.default.magentaBright(`You wanted to Start the project with  ${name} chain...`));
    const newURL = site.replace('{Name}', name);
    console.log(chalk_1.default.greenBright(`Please visit \n ${newURL} \n to start the project.`));
}
exports.default = faucet;
