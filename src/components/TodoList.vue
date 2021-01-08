<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  // 自定义事件 @delete
  // TODO 插槽：用于传递复杂内容，使用slot标签指定需要挂载的组件item（作用域插槽用于返回组件的函数）
  // template: `
  //           <ul>
  //               <!--<todo-item @delete="handleDelete" v-for="item in list" :title="item.title" :del="item.del"></todo-item>-->
  //
  //               <slot></slot>
  //           </ul>
  //       `,
  data: function () {
    return {
    }
  },
  methods: {
  }
}

</script>
