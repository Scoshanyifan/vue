<template>
  <div>
    <div v-for="{key, name} in list" :key="key" style="padding: 10px 0">
      <!--路由跳转-->
      <router-link v-bind:to="`/${key}`">{{ name }}</router-link>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Home',
  data () {
    return {
      list: [
        {
          key: 'basic',
          name: '基础'
        },
        {
          key: 'count',
          name: '计算'
        },
        {
          key: 'store',
          name: '全局'
        },
        {
          key: 'other',
          name: '其他'
        },
        {
          key: 'dashboard',
          name: '报表'
        },
        {
          key: 'elementui',
          name: 'elementui'
        },
        {
          key: 'navigation',
          name: '菜单导航'
        }
      ]
    }
  },
  computed: {
    // 打印路由信息
    routerInfo () {
      const {fullPath, path, name, params, query, meta} = this.$route
      console.log(fullPath, path, name, params, query, meta)
      return {
        fullPath, path, name, params, query, meta
      }
    }
  }
}
</script>
