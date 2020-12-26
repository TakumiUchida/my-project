<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>vue課題</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-link to="/inputform">vue課題②へ</router-link>
    <pre>{{ $store.state }}</pre>
    <hr>
    <transition name="component-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
.component-fade-enter-active,
.component-fade-leave-active {
    transition: opacity .3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
    opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
