#!/usr/bin/env node
import { program } from 'commander';
import { alternator } from './index.js'; // Explicit .js extension

program
  .version('1.0.0')
  .description('Text transformer')
  .argument('<string>')
  .action((str: string) => {
    console.log(alternator(str));
  });

program.parse();