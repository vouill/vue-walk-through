<template>
  <div id="app">
    <router-link to="/">Say hello!</router-link>
    <router-link to="/whatwewantatsqreen">What do we want !</router-link>
    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter has-text-centered">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.full-height{
  height: 100vh;
}
</style>
