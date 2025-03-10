#!/usr/bin/env node
import { program } from 'commander';
import { alternator } from './index';

program
  .version('2.1.0')
  .description('Transform text with alternating cases and emojis!')
  .argument('<string>', 'Input string to transform')
  .option('-s, --start-with <type>', 'Start with "upper" or "lower"', 'upper')
  .option('-n, --no-skip-spaces', 'Include spaces in transformation')
  .option('-e, --emoji <char>', 'Add an emoji after characters')
  .option('-f, --emoji-frequency <number>', 'Emoji frequency', '1')
  .action((str: string, options: any) => {
    console.log(
      alternator(str, {
        startWith: options.startWith,
        skipSpaces: options.skipSpaces,
        emoji: options.emoji,
        emojiFrequency: parseInt(options.emojiFrequency, 10) || 1
      })
    );
  });

program.parse();