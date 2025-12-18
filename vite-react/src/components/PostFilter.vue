<template>
  <input
    :value="modelValue"
    @input="onInput"
    placeholder="Search posts..."
  />
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement | null
  if (!target) return
  emit('update:modelValue', target.value)
}
</script>
