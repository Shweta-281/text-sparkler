import React, { useEffect, useState } from 'react';
import { alternator, AlternatorOptions } from '../index';

interface Props extends AlternatorOptions {
  text: string;
}

const Alternator: React.FC<Props> = ({
  text,
  startWith = 'upper',
  skipSpaces = true,
  emoji,
  emojiFrequency = 1
}) => {
  const [output, setOutput] = useState('');

  useEffect(() => {
    setOutput(
      alternator(text, {
        startWith,
        skipSpaces,
        emoji,
        emojiFrequency
      })
    );
  }, [text, startWith, skipSpaces, emoji, emojiFrequency]);

  return <span>{output}</span>;
};

export default Alternator;