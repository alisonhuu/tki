<script setup>
import { ref, onMounted } from 'vue'
const card = ref(null)
onMounted(() => {
  card.value.textContent = 'change'
})

</script>

<template>
  <h2>user</h2>
  <p ref="card">card</p>
</template>
