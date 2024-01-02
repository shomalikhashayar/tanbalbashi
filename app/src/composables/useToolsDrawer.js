import { ref } from "vue"

const state = ref(true)

export default function useToolsDrawer() {
  const toggle = () => {
    state.value = !state.value
  }

  return {
    state,
    toggle,
  }
}
