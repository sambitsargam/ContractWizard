import chalk from 'chalk';
import { execSync } from 'child_process';
import open from 'open';

const runCommand = (command: string) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error('Failed to run command: ', error);
    return false;
  }
  return true;
};

export default async function () {
  const faucetUrl = 'https://www.alchemy.com/best/crypto-faucets'; // faucet URL

  console.log(chalk.magentaBright('Running faucet command...'));

  // Perform the faucet operation here...

  // Open URL in the browser
  console.log(chalk.magentaBright('Opening faucet URL in browser...'));
  open(faucetUrl);

  console.log(chalk.magentaBright('Faucet command completed successfully.'));
}
