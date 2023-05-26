<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/useProduct'
const productsStore = useProductStore()
const { getProducts } = productsStore
const { filterProducts } = storeToRefs(productsStore)

onMounted(() => {
  getProducts()
})
</script>

<template>
  <h2>products</h2>
  <div class="w-50">
    <table class="table">
      <thead>
        <tr>
          <th>title</th>
          <th>price</th>
          <th>category</th>
          <th>content</th>
        </tr>
      </thead>
      <tbody v-for="product in filterProducts" :key="product.id">
        <tr>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.content }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
