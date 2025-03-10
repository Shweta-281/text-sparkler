import { program } from 'commander';
import { textSparkler } from './index';

program
  .version('1.0.0')
  .argument('<text>')
  .option('-e, --emoji <char>')
  .option('-f, --frequency <number>', '1')
  .action((text, options) => {
    console.log(
      textSparkler(text, {
        emoji: options.emoji,
        emojiFrequency: parseInt(options.frequency)
      })
    );
  })
  .parse();