import { alternator } from '../src';

test('Basic alternation', () => {
  expect(alternator('hello')).toBe('HeLlO');
});

test('Emoji every 2 characters', () => {
  expect(alternator('hello', { emoji: '🎉', emojiFrequency: 2 }))
    .toBe('He🎉Ll🎉O');
});

test('With spaces included', () => {
  expect(alternator('hi there', { skipSpaces: false, emoji: '🔥', emojiFrequency: 1 }))
    .toBe('H🔥i🔥 T🔥h🔥E🔥r🔥E🔥');
});