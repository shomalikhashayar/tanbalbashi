import { ref } from "vue"

const state = ref(false)

export default function useToolsDrawer() {
  const toggle = () => {
    state.value = !state.value
  }

  return {
    state,
    toggle,
  }
}
