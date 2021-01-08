<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--路由-->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  created () {
    console.log('>>> app created()')
    // TODO 初始化数据
  }
}
</script>

<!--<style>-->
<!--#app {-->
  <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
  <!-- -webkit-font-smoothing: antialiased;-->
  <!-- -moz-osx-font-smoothing: grayscale;-->
  <!--text-align: center;-->
  <!--color: #2c3e50;-->
  <!--margin-top: 60px;-->
<!--}-->
<!--</style>-->
