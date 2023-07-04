#! /usr/bin/env node

import chalk from 'chalk';

// @ts-ignore
// const figlet = require('figlet');
import figlet from 'figlet';

// import method to create projects
import create from './create';
import wizard from './wizard';
import faucet from './faucet';
import ide from './ide';

const availableOptions: string[] = ['create', 'wizard', 'faucet', 'ide'];

// second argument should be the selected option
const option: string = process.argv[2];

if (!availableOptions.includes(option)) {
  console.log(
    `Invalid operation. Available operations are: ${availableOptions}`
  );
  process.exit(-1);
}
// Starts CLI

console.log(
  chalk.magentaBright(
    figlet.textSync(`cotract-wizard ${option}`, { horizontalLayout: 'full' })
  )
);

switch (option) {
  case 'create':
    // arg 3 is the project name
    const projectName = process.argv[3] || '.';
    create(projectName);
    break;
  case 'wizard':
    wizard();
    break;
  case 'faucet':
    faucet();
    break;
  case 'ide':
    const name = process.argv[3] || 'polygon';
    ide({name});
    break;
}
