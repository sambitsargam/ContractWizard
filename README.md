## CLI Tool for  Contract Creation and Deployment

This is a command-line interface (CLI) tool that allows developers to create and deploy smart contracts on the EVM Based blockchain using the OpenZeppelin library. The tool supports the creation of ERC20, ERC721, and ERC1155 contracts, as well as governance contracts. It also provides a boilerplate project structure for deploying contracts on the EVM Based blockchain.It habv also faucet option.


## Requirements

- Node/NPM
- Yarn

## Usage

You can install this program globally with `npm i -g contract-wizard` or run the commands direcly with npx with `npx contract-wizard@latest {COMMAND}`.

### Commands

- `contract-wizard create {PROJECT_NAME}`: creates a new Hardhat project in the given project name. If not provided, creates the project in the current folder, although this requires the folder to be empty.

- `contract-wizard wizard`: starts the wizard to create a new contract. The wizard will ask for the contract name, symbol, and type (ERC20, ERC721, ERC1155, or Governance). It will contract that saved as your contract name (.sol).
All different type of contract have different option to choose from like mintable, burnable, pausable, etc.

- `contract-wizard faucet {ADDRESS}`: Able to produce a link(to be post on twitter) to get testnet token for testing purpose.

## Developing new features

### Install and build

Install all dendencies with `npm i`.
This project was build with Typescript. Run `npm run build` to compile code in `/src` into `/bin`.

To create a version run:

```sh
git tag v0.1.3    // with the correspondent tag
git push --tags  
```

### Testing

Proper tests will be included soon. For now, you can test new changes locally by installing this package globably with `npm i -g`.
