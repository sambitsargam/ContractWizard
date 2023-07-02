#!/usr/bin/env node

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faucet_1 = __importDefault(require("../faucet"));

const run = async () => {
  try {
    await faucet_1.default();
  } catch (error) {
    console.error('An error occurred while running the faucet command:', error);
    process.exit(1);
  }
};

run();
