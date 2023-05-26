import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const filterProducts = computed(() => {
    return products.value.sort((a, b) => a.price - b.price)
  })
  const getProducts = () => {
    fetch(`${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/products/all`)
      .then(res => res.json())
      .then(data => {
        // console.log(data.products)
        products.value = data.products
      })
  }

  return { products, getProducts, filterProducts }
})
