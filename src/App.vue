<template>
  <div class="container">
    <nav class="nav">
      <p class="nav-link"><router-link to="/">home</router-link></p>
      <p class="nav-link"><router-link to="/pinia">pinia</router-link></p>
      <p class="nav-link"><router-link to="/about">about</router-link></p>
      <p class="nav-link"><router-link to="/user">user</router-link></p>
      <p class="nav-link"><router-link to="/products">products</router-link></p>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/all.scss"
</style>
