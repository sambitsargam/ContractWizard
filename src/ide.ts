import chalk from "chalk";

interface IFundWalletOptions {
    name: string;
}

const site = `https://chainide.com/s/createTempProject/{Name}`;

export default function faucet({ name }: IFundWalletOptions) {
    console.log(chalk.magentaBright(`You wanted to Start the project with  ${name} chain...`));
    const newURL = site.replace('{Name}', name);
    console.log(chalk.greenBright(`Please visit \n ${newURL} \n to start the project.`));
}