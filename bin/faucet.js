"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const urls = `https://www.alchemy.com/best/crypto-faucets or https://moralis.io/faucets/`;
function faucet() {
    console.log(chalk_1.default.magentaBright(`To get faucet claim by this urls through address...`));
    console.log(chalk_1.default.greenBright(`Please visit \n ${urls} \n to fund your wallet.`));
}
exports.default = faucet;