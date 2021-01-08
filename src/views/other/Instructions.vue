<template>
  <div>
    <h2>v-text 替换</h2>
    <div v-text="'vText'">
      this is v-text
    </div>

    <h2>v-html 替换</h2>
    <div v-html="'<span style=&quot;color: red&quot;>v-html</span>'">
      this is v-html
    </div>

    <h2>v-show 控制显示隐藏</h2>
    <div v-show="show">
      this is v-show
    </div>
    <button v-on:click="show = !show">
      v-show >>> 隐藏元素 display none
    </button>

    <h2>v-if v-else-if v-else</h2>
    <div v-if="number === 1">
      v-if >>> num = 1
    </div>
    <div v-else-if="number === 2">
      v-else-if >>> num = 2
    </div>
    <div v-else>
      v-else >>> {{number}}
    </div>

    <h2>v-for v-bind 简写 :</h2>
    <div v-for="num in [1,2,3]" v-bind:key="num">
      v-for + v-bind >>> {{num}}
    </div>

    <h2>v-on 事件 简写@</h2>
    <button v-on:click="number = number + 1">
      v-on >>> number++
    </button>

    <h2>v-model 双向绑定</h2>
    <input v-model="message"/>
    {{message}}

    <h2>v-pre 绕过编译直接输出</h2>
    <div v-pre>{{this-will-not-be-compiled}}</div>

    <h2>v-once 只会执行一次</h2>
    <div v-once>
      v-once >>> {{number}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Instructions',
  data: function () {
    return {
      number: 1,
      show: true,
      message: 'message'
    }
  }
}
</script>
