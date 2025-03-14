import chalk from 'chalk';

export const warning = (message: string) => console.log('\n', chalk.red(message), '\n');

export const info = (message: string) => console.log(chalk.blue(message));
