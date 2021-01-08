<template>
  <li>
    <!--插槽-->
    <slot name="pre-icon" :value="value"></slot>
    <span class="red" v-if="!del">{{title}}</span>
    <span v-else style="text-decoration: line-through">{{title}}</span>
    <!--插槽-->
    <slot name="after-icon">😄</slot>
    <button v-show="!del" @click="handleClick">删除</button>
  </li>
</template>
<script>
export default {
  name: 'TodoList',
  // props
  props: {
    title: String,
    del: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      value: Math.random()
    }
  },
  methods: {
    handleClick (mouse) {
      // 事件修饰符
      // mouse.stop
      console.log('组件item事件', mouse)
      // 手动抛出delete事件，并传递参数title
      this.$emit('delete', this.title)
    }
  }
}
</script>

<!--给当前的组件写样式，不会污染其他组件-->
<style scoped>
.red {
  color: red;
}
</style>
