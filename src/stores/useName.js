import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNameStore = defineStore('name', () => {
  const oname = ref('alton')
  const setName = (name) => { oname.value = name }

  return {
    oname, setName
  }
})
