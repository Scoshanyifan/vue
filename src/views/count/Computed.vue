<template>
    <div>
      <h1>Computed</h1>
      <p>original message: {{message}}</p>
      <p>reverseRaw: {{ message. split('').reverse().join('') }}</p>
      <p>reverseByComputed: {{reverseByComputed}}</p>
      <p>reverseByMethod: {{reverseByMethod()}}</p>
      <p>computedTime: {{computedTime}}</p>
      <p>methodTime: {{methodTime()}}</p>

      <input v-model="message">
      <!-- TODO 强制更新，触发渲染，模拟大数据环境下重新渲染页面 -->
      <button @click="() => $forceUpdate()">forceUpdate</button>
    </div>
</template>

<script>
export default {
  name: 'Computed',
  data () {
    return {
      message: 'hello'
    }
  },
  /**
   * 计算属性: 在模板中放入太多的逻辑会让模板过重且难以维护
   *
   * 比较method：效果一样
   *
   * 计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。
   * 这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数
   */
  computed: {
    reverseByComputed: function (val) {
      console.log('执行computed', val)
      return this.message.split('').reverse().join('-')
    },
    computedTime: function () {
      return Date.now()
    }
  },
  // 普通方法，每当触发重新渲染时，调用方法将总会再次执行函数
  methods: {
    reverseByMethod: function (val) {
      console.log('执行method', val)
      return this.message.split('').reverse().join('，')
    },
    methodTime: function () {
      return Date.now()
    }
  }
}
</script>
