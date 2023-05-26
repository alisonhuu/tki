import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFetchStore = defineStore('fetch', () => {
  const data = ref(null)
  function fetchInit () {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        data.value = res
      })
  }

  return { data, fetchInit }
})
