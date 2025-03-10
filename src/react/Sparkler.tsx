import React from 'react';
import { textSparkler, SparklerOptions } from '../index';

interface Props extends SparklerOptions {
  text: string;
}

export const TextSparkler: React.FC<Props> = ({ text, ...options }) => {
  const [output, setOutput] = React.useState('');

  React.useEffect(() => {
    setOutput(textSparkler(text, options));
  }, [text, options]);

  return <span>{output}</span>;
};