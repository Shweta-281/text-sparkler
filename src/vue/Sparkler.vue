<script setup lang="ts">
import { alternator } from '../index';
import { ref, watchEffect } from 'vue';

const props = defineProps<{
  text: string;
  startWith?: 'upper' | 'lower';
  skipSpaces?: boolean;
  emoji?: string;
  emojiFrequency?: number;
}>();

const output = ref('');

watchEffect(() => {
  output.value = alternator(props.text, {
    startWith: props.startWith || 'upper',
    skipSpaces: props.skipSpaces ?? true,
    emoji: props.emoji,
    emojiFrequency: props.emojiFrequency || 1
  });
});
</script>

<template>
  <span>{{ output }}</span>
</template>