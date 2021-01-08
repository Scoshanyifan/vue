<template>
  <div>
    <h1>Watch</h1>
    <div>data.num: {{$data.num}}</div>
    <div>data.map: {{map}}</div>
    <div>data: {{$data}}</div>
    <!--lambda表达式和方法效果一样-->
    <button @click="() => (this.num += 1)">num+1</button>
    <button @click="handleClick">num+2</button>
    <button @click="lambdaClick">num+3 失效</button>
  </div>
</template>

<script>
export default {
  name: 'Watch',
  data: function () {
    return {
      num: 0,
      map: {k1: 10, k2: 10},
      family: {
        parent: {
          age: 50
        },
        son: {
          age: 50
        }
      },
      list: [
        {l: 100},
        {l: 200}
      ]
    }
  },
  methods: {
    handleClick: function () {
      this.num += 2
    },
    lambdaClick: () => { this.num += 3 }
  },
  /**
   * 有时需要一个自定义的侦听器，而 watch 选项提供了一个更通用的方法，来响应数据的变化
   *
   * 使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。
   */
  watch: {
    // 1-常规用法：监听普通对象发生变化时，执行函数，以响应数据变化 TODO 两种方式：直接跟参数，或用function，其实都是在handler中
    num (newVal, oldVal) {
      // map.k1的变化不会触发map的普通监听
      this.map.k1 += 1
      console.log('num >>> new: %s, old: %s', newVal, oldVal)
    },

    // 2-复杂对象无法被普通监听，如果内部值改变，需要用到深度监听
    map: function (newVal, oldVal) {
      this.map.k2 += 5
      console.log('map >>> new: %s, old: %s', newVal, oldVal)
    },

    // 3-复杂对象的监听除了用到深度，可以使用字符串的形式监听对象属性 TODO 并且当对象属性较多时，每个属性值的变化都会执行handler，这时可以用字符串来精确定位
    'map.k1' (newVal, oldVal) {
      // family.parent.age的变化能够被family深度监听到
      this.family.parent.age += 10
      console.log('\'map.k1\' >>> new: %s, old: %s', newVal, oldVal)
    },

    // 4-深度监听，需设置deep属性，immediate表示在watch中首次绑定的时候也会触发，而不是仅仅在变化的时候
    family: {
      // TODO 上面的写的函数其实是在handler中
      handler (newVal, oldVal) {
        this.list.push('☺')
        this.list[0].l += 100
        // oldVal不能设置.parent.age，因为会和immediate冲突
        console.log('family(immediate) >>> new: %s, old: %s', newVal.parent.age, oldVal)
      },
      deep: true,
      immediate: true
    },

    list: function (newVal, oldVal) {
      console.log('list >>> new: %s, old: ', newVal, oldVal)
    }
  }
}
</script>
