import { program } from 'commander';

program
    .option('--logger <logger>', '', 'DEVELEPOMENT')

program.parse();

export const option = program.opts();