<script setup>
import { storeToRefs } from 'pinia'
import { useFetchStore } from '../../stores/useFetch'

const fetchStore = useFetchStore()
const { fetchInit } = fetchStore
const { data } = storeToRefs(fetchStore)
</script>

<template>
    <h4>home</h4>
    <p>test deploy</p>
    <button type="button" class="btn btn-secondary" @click="fetchInit()">fetch</button>
    <div v-if="data">
      <p>data:</p>
      <p>{{ data }}</p>
      </div>
</template>
