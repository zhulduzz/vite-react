import { onMounted, onUnmounted } from 'vue'

export function useLogger(name: string) {
  onMounted(() => console.log(`${name} mounted`))
  onUnmounted(() => console.log(`${name} unmounted`))
}
