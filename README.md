# Text Sparkler ✨🚀

[![npm version](https://img.shields.io/npm/v/text-sparkler)](https://www.npmjs.com/package/text-sparkler)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/text-sparkler)](https://npm-stat.com/charts.html?package=text-sparkler)

Transform ordinary text into eye-catching content with alternating cases and emojis! Perfect for social media bios, memes, and attention-grabbing headlines.

## Features 🌟
- 🔠 Alternate between uppercase/lowercase characters
- 🎉 Insert emojis at custom intervals
- ⚛️ Ready-to-use React/Vue components
- 💻 CLI support for terminal usage
- 🛠️ Fully typed with TypeScript

## Installation 💻
```bash
# Install as dependency
npm install text-sparkler

# Install globally for CLI usage
npm install -g text-sparkler
Basic Usage 📖
JavaScript/TypeScript
typescript
Copy
import { textSparkler } from 'text-sparkler';

// Simple alternation
console.log(textSparkler('viral content'));
// Output: "ViRaL cOnTeNt"

// With emoji every 3rd character
console.log(textSparkler('trending now', { 
  emoji: '🔥', 
  emojiFrequency: 3 
}));
// Output: "Tr🔥eNd🔥iNg🔥 No🔥w"
Command Line (CLI)
bash
Copy
# Basic transformation
text-sparkler "make it awesome"
# Output: MaKe iT aWeSoMe

# With custom emoji and frequency
text-sparkler "attention needed" --emoji "⚠️" --frequency 2
# Output: At⚠️TeNt⚠️iOn⚠️ Ne⚠️EdEd⚠️
Framework Components 🖥️
React
tsx
Copy
import { TextSparkler } from 'text-sparkler/react';

export default function Bio() {
  return (
    <TextSparkler 
      text="Frontend Developer"
      emoji="💻"
      emojiFrequency={4}
      startWith="lower"
    />
  );
}
// Renders: "fRoNt💻DeVeLoPeR"
Vue
vue
Copy
<script setup>
import { TextSparkler } from 'text-sparkler/vue';
</script>

<template>
  <TextSparkler 
    text="Open Source Contributor"
    :emoji-frequency="3"
    emoji="❤️"
  />
</template>
<!-- Renders: "OpEn ❤️SoUrCe ❤️OnTrIbUtOr" -->
Advanced Options ⚙️
Option	Type	Default	Description
startWith	string	'upper'	Starting case ('upper' or 'lower')
skipSpaces	boolean	true	Ignore spaces in transformation
emoji	string	-	Emoji character to insert
emojiFrequency	number	1	Insert emoji every N characters
Why Text Sparkler? 🤔
✅ Zero Dependencies
✅ Type-Safe API
✅ Framework Agnostic Core
✅ MIT Licensed
✅ Test Coverage