import { textSparkler } from '../src';

test('Basic alternation', () => {
  expect(textSparkler('hello')).toBe('HeLlO');
});

test('Emoji every 2 characters', () => {
  expect(textSparkler('hello', { emoji: '🎉', emojiFrequency: 2 }))
    .toBe('He🎉Ll🎉O');
});

test('With spaces included', () => {
  expect(textSparkler('hi there', { skipSpaces: false, emoji: '🔥', emojiFrequency: 1 }))
    .toBe('H🔥i🔥 T🔥h🔥E🔥r🔥E🔥');
});