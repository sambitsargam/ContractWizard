//@ts-ignore
import chalk from "chalk";
import inquirer from "inquirer";
import {
  contractTypeQuestion,
  erc1155questions,
  erc20questions,
  erc721questions,
  governancequestions,
} from "./questions";
import { erc20, erc721, erc1155, governor } from "@openzeppelin/wizard";
import fs from "fs/promises";

function saveFile(path: string, contractName: string, contract: string) {
  const filepath = path + contractName;
  try {
    fs.writeFile(filepath, contract);
    console.log(chalk.green("The file was saved to " + filepath));
  } catch (err) {
    console.log(chalk.red("Error saving file: " + err));
  }
}

function saveFilewithGivenPath(contractPath: string, contract: string) {
  //@ts-ignore
  try {
    fs.writeFile(contractPath, contract);
    console.log(chalk.green("The file was saved to " + contractPath));
  } catch (err) {
    console.log(chalk.red("Error saving file: " + err));
  }
}

export default async function () {
  console.log(
    chalk.magentaBright("Using OpenZeppelin Wizard to create smart contract")
  );
  let contract;
  await inquirer.prompt(contractTypeQuestion).then(async (answers) => {
    switch (answers.contractType) {
      case "ERC20":
        const answerERC20 = await inquirer.prompt(erc20questions);
        contract = erc20.print({
          name: answerERC20.tokenName,
          symbol: answerERC20.tokenSymbol,
          premint: answerERC20.premint,
          burnable: answerERC20.burnable === "y" ? true : false,
          mintable: answerERC20.mintable === "y" ? true : false,
        });
        if (answerERC20.savePath != "") {
          saveFilewithGivenPath(answerERC20.savePath, contract);
          break;
        }
        saveFile(process.cwd(), `/${answerERC20.tokenName}.sol`, contract);
        break;
      case "ERC721":
        const answerERC721 = await inquirer.prompt(erc721questions);
        contract = erc721.print({
          name: answerERC721.tokenName,
          symbol: answerERC721.tokenSymbol,
          burnable: answerERC721.burnable === "y" ? true : false,
          mintable: answerERC721.mintable === "y" ? true : false,
          incremental: answerERC721.incremental === "y" ? true : false,
          baseUri: "ipfs://example.com/api/item/{id}",
          uriStorage: answerERC721.uriStorage === "y" ? true : false,
        });
        if (answerERC721.savePath != "") {
          saveFilewithGivenPath(answerERC721.savePath, contract);
          break;
        }
        saveFile(process.cwd(), `/${answerERC721.tokenName}.sol`, contract);
        break;
      case "ERC1155":
        const answerERC1155 = await inquirer.prompt(erc1155questions);
        contract = erc1155.print({
          name: answerERC1155.tokenName,
          uri: "ipfs://example.com/api/item/{id}",
          burnable: answerERC1155.burnable === "y" ? true : false,
          mintable: answerERC1155.mintable === "y" ? true : false,
          supply: answerERC1155.supply === "y" ? true : false,
          updatableUri: answerERC1155.updatableUri === "y" ? true : false,
        });
        if (answerERC1155.savePath != "") {
          saveFilewithGivenPath(answerERC1155.savePath, contract);
          break;
        }
        saveFile(process.cwd(), `/${answerERC1155.tokenName}.sol`, contract);
        break;
      case "GOVERNANCE":
        const answerGoverance = await inquirer.prompt(governancequestions);
        contract = governor.print({
          name: answerGoverance.tokenName,
          delay: answerGoverance.delay,
          period: answerGoverance.period,
          proposalThreshold: answerGoverance.proposalThreshold,
          quorumPercent: answerGoverance.quorumPercent,
        });
        if (answerGoverance.savePath != "") {
          saveFilewithGivenPath(answerGoverance.savePath, contract);
          break;
        }
        saveFile(process.cwd(), `/${answerGoverance.tokenName}.sol`, contract);
        break;
    }
  });
}
