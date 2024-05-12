import { ref, onMounted, onUnmounted } from 'vue'

export function useCanvasConfig(canvas: any, root: any) {
  const innerWidth = ref(null)
  const innerHeight = ref(null)

  onMounted(() => window.addEventListener('resize', update))
  onUnmounted(() => window.removeEventListener('resize', update))

  function update() {
    console.log('.....', window.innerHeight, window.innerWidth)
    // console.log('.....', innerWidth, innerHeight)

    // canvas.style.width = `${innerWidth.value * 0.8}px`
    // canvas.style.height = `${innerHeight.value * 0.8}px`
    // root.style.width = `${innerWidth.value * 0.8}px`
    // root.style.height = `${innerHeight.value * 0.8}px`
  }
  return {window.innerHeight, window.innerWidth}
}
