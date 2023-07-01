"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erc1155questions =
  exports.erc721questions =
  exports.erc20questions =
  exports.contractTypeQuestion =
    void 0;
const contractTypeQuestion = [
  {
    message:
      "Which contract do you want to create (ERC20, ERC721, ERC1155, GOVERNANCE)?",
    name: "contractType",
    type: "list",
    choices: ["ERC20", "ERC721", "ERC1155", "GOVERNANCE"],
    loop: true,
  },
];
exports.contractTypeQuestion = contractTypeQuestion;
const erc20questions = [
  {
    message:
      "Save the contract to path (default: current path): /path/to/contract.sol",
    name: "savePath",
    type: "input",
  },
  {
    message: "Token name:",
    name: "tokenName",
    type: "input",
  },
  {
    message: "Token symbol:",
    name: "tokenSymbol",
    type: "input",
  },
  {
    message: "Premint (Enter an initial amount of tokens for the deployer.) ",
    name: "premint",
    type: "input",
  },
  {
    message: "Burnable? (y/n)",
    name: "burnable",
    type: "input",
  },
  {
    message: "Mintable? (y/n)",
    name: "mintable",
    type: "input",
  },
];
exports.erc20questions = erc20questions;
const erc721questions = [
  {
    message:
      "Save the contract to path (default: current path): /path/to/contract.sol",
    name: "savePath",
    type: "input",
  },
  {
    message: "Token name:",
    name: "tokenName",
    type: "input",
  },
  {
    message: "Token symbol:",
    name: "tokenSymbol",
    type: "input",
  },
  {
    message: "Burnable? (y/n)",
    name: "burnable",
    type: "input",
  },
  {
    message: "Mintable? (y/n)",
    name: "mintable",
    type: "input",
  },
  {
    message: "Incremental (Automatically assigned an incremental id) ? (y/n)",
    name: "incremental",
    type: "input",
  },
  {
    message:
      "uriStorage (Allows updating token URIs for individual token IDs.)? (y/n)",
    name: "uriStorage",
    type: "input",
  },
];
exports.erc721questions = erc721questions;
const erc1155questions = [
  {
    message:
      "Save the contract to path (default: current path): /path/to/contract.sol",
    name: "savePath",
    type: "input",
  },
  {
    message: "Token name:",
    name: "tokenName",
    type: "input",
  },
  {
    message: "Token symbol:",
    name: "tokenSymbol",
    type: "input",
  },
  {
    message: "Burnable? (y/n)",
    name: "burnable",
    type: "input",
  },
  {
    message: "Mintable? (y/n)",
    name: "mintable",
    type: "input",
  },
  {
    message: "Supply Tracking (Keeps track of total supply of tokens.) ? (y/n)",
    name: "supply",
    type: "input",
  },
  {
    message:
      "updatableUri (Privileged accounts will be able to set a new URI for all token types.)? (y/n)",
    name: "updatableUri",
    type: "input",
  },
];
exports.erc1155questions = erc1155questions;

const governancequestions = [
  {
    message:
      "Save the contract to path (default: current path): /path/to/contract.sol",
    name: "savePath",
    type: "input",
  },
  {
    message: "Token name:",
    name: "tokenName",
    type: "input",
  },
  {
    message: "Voting Delay (postfix 'block' )",
    name: "delay",
    type: "input",
  },
  {
    message:
      "Voting Period (postfix time format like 'day' 'week' 'month' 'year')",
    name: "period",
    type: "input",
  },
  {
    message:
      "Proposal Threshold (Minimum number of votes an account must have to create a proposal.)",
    name: "proposalThreshold",
    type: "input",
  },
  {
    message: "Quorum (Quorum required for a proposal to pass (percentage).)",
    name: "quorumPercent",
    type: "input",
  },
];
exports.governancequestions = governancequestions;
