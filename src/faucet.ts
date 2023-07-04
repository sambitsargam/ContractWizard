import chalk from "chalk";


const urls = `https://www.alchemy.com/best/crypto-faucets or https://moralis.io/faucets/`;

export default function faucet() {
    console.log(chalk.magentaBright(`To get faucet claim by this urls through address ...`));
    console.log(chalk.greenBright(`Please visit \n ${urls} \n to fund your wallet.`));
}