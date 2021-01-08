<template>
  <div>
    <h1>store count</h1>
    <p>count: {{count}}</p>
    <p>getter: {{$store.getters.multiplyCount}}</p>
    <button v-on:click="$store.commit('demo/increment', 2)">mutations</button>
    <button @click="$store.dispatch('demo/url')">actions</button>
  </div>
</template>

<script>
export default {
  name: 'Store',
  computed: {
    count () {
      // vuex全局状态管理
      return this.$store.state.demo.count
    }
  }
}
</script>
