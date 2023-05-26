<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../../stores/useCounter'
import { useNameStore } from '../../stores/useName'
// import { watch } from 'vue'

const counterStore = useCounterStore()
const nameStore = useNameStore()
const { increment } = counterStore
const { count, doubleCount } = storeToRefs(counterStore)
const { setName } = nameStore
const tosetName = (name) => setName(name)
// watch(doubleCount, (newVal, oldVal) => {
//   console.log(newVal, oldVal)
// })
counterStore.$subscribe((mutation, state) => {
  console.log('mutation:', mutation)
  console.log('state:', state)
})
</script>

<template>
    <h4>跨元件傳遞</h4>
    <p>count: {{ count }}</p>
    <p>count(computed): {{ doubleCount }}</p>
    <div class="btn-group">
      <button type="button" class="btn btn-outline-secondary" @click="increment()">click</button>
      <button type="button" class="btn btn-outline-secondary" @click="tosetName('Billy')">changeName</button>
    </div>
</template>
