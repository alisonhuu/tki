<script setup>
import { useRoute } from 'vue-router'
const router = useRoute()
</script>

<template>
  id
  <div class="text-primary">
    {{ router.params.id }}
  </div>
</template>
