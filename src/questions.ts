import { QuestionCollection } from "inquirer";

// Start of questions
const contractTypeQuestion: QuestionCollection = [
    {
      message: "Which contract do you want to create (ERC20,ERC721,ERC1155,GOVERNANCE)?",
      name: "contractType",
      type: "list",
      choices: ["ERC20", "ERC721", "ERC1155", "GOVERNANCE"],
      loop: true,
    },
  ];
// End of Choice

// For ERC20 Token
const erc20questions: QuestionCollection = [
  {
    message: "Save the contract to path (default: current path): /path/to/contract.sol",
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
  }
];

// For ERC721 Token
const erc721questions: QuestionCollection = [
    {
      message: "Save the contract to path (default: current path): /path/to/contract.sol",
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
      message: "uriStorage (Allows updating token URIs for individual token IDs.)? (y/n)",
      name: "uriStorage",
      type: "input",
    }
];

// For ERC1155 Token
const erc1155questions: QuestionCollection = [
    {
      message: "Save the contract to path (default: current path): /path/to/contract.sol",
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
      message: "updatableUri (Privileged accounts will be able to set a new URI for all token types.)? (y/n)",
      name: "updatableUri",
      type: "input",
    }
];

// For Governance Token
const governancequestions: QuestionCollection = [
  {
    message: "Save the contract to path (default: current path): /path/to/contract.sol",
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
    message: "Voting Period (postfix time format like 'day' 'week' 'month' 'year')",
    name: "period",
    type: "input",
  },
  {
    message: "Proposal Threshold (Minimum number of votes an account must have to create a proposal.)",
    name: "proposalThreshold",
    type: "input",
  },
  {
    message: "Quorum (Quorum required for a proposal to pass (percentage).)",
    name: "quorumPercent",
    type: "input",
  }
];

// Export the questions
export {contractTypeQuestion, erc20questions, erc721questions, erc1155questions, governancequestions};