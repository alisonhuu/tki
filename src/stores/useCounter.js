import { defineStore, storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { useNameStore } from '../stores/useName'

export const useCounterStore = defineStore('counter', () => {
  const nameStore = useNameStore()
  const { oname } = storeToRefs(nameStore)

  const count = ref(0)
  const doubleCount = computed(() => count.value * 2 + ' ' + oname.value)
  function increment () {
    return count.value++
  }

  return { count, doubleCount, increment }
})
