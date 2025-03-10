export type AlternatorOptions = {
  startWith?: 'upper' | 'lower';
  skipSpaces?: boolean;
  emoji?: string;
  emojiFrequency?: number;
};

export function alternator(str: string, options: AlternatorOptions = {}): string {
  // Merge with defaults
  const {
    startWith = 'upper',
    skipSpaces = true,
    emoji,
    emojiFrequency = 1
  } = options;

  let toggle = startWith === 'upper';
  let effectiveIndex = 0;

  return str
    .split('')
    .map((char) => {
      if (skipSpaces && char === ' ') return char;

      // Only toggle for non-space characters
      let transformed = char;
      if (char !== ' ') {
        transformed = toggle ? char.toUpperCase() : char.toLowerCase();
        toggle = !toggle;
      }

      effectiveIndex++;

      let result = transformed;
      if (emoji && char !== ' ' && effectiveIndex % emojiFrequency === 0) {
        result += emoji;
      }

      return result;
    })
    .join('');
}