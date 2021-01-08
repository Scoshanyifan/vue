<template>
  <div>
    <h1>Basic</h1>
    <h2>1-声明式渲染（JavaScript 表达式支持）</h2>
    <div>{{message + message + 1}}</div>

    <h2>2-绑定指令（v-bind:xxx == :xxx）</h2>
    <!--将span元素节点的 title 属性attribute 和 Vue 实例的 message property 保持一致-->
    <span v-bind:title="message" >鼠标停留</span>

    <!-- 简写(实质还是单向数据流,直是帮我们简化代码),此处是value和input的结合,还有checkbox,radio,select等等

      text 和 textarea 元素使用 value property 和 input 事件；
      checkbox 和 radio 使用 checked property 和 change 事件；
      select 字段将 value 作为 prop 并将 change 作为事件。

      如果是自定义module,需要告诉vue底层是哪两个动作的简写形式
    -->
    <h2>3-双向绑定</h2>
    <input v-model="message">

    <h2>4-绑定指令 + 输入框事件指令（v-on:xxx == @xxx）</h2>
    <input v-bind:value="message" v-on:input="handleChange">

    <h2>5-循环指令</h2>
    <ul>
      <li v-for="item in array" v-bind:key="item.title">
        <h3>6-条件指令</h3>
        <div v-if="!item.del">v-if: {{item.title}}</div>
        <div v-else style="text-decoration: line-through">v-else: {{item.title}}</div>

        <div v-show="!item.del">7-显示指令</div>

        <!-- 点击事件指令，控制item.del-->
        <button @click="rawClick(item)">删除</button>
      </li>
    </ul>

    <h2>8-自定义组件</h2>
    <ul>
      <todo-item v-for="item in list" :title="item.title" :del="item.del" :key="item.title" ></todo-item>
    </ul>

    <h2>9-组件list套用组件item</h2>
    <todo-list>
      <!--Property or method "handleDelete" is not defined 方法需要定义在app中 -->
      <todo-item @delete="handleDelete" v-for="item in list" :title="item.title" :del="item.del" :key="item.title" >
        <!-- TODO 插槽-->
        <!--<span slot="pre-icon">前置图标</span>-->
        <!--<span slot="after-icon">后面图标</span>-->

        <!-- 父组件中拿到子组件中的值-->
        <template v-slot:pre-icon="{value}">
          <span>前置图标 {{value}}</span>
        </template>

      </todo-item>
    </todo-list>
  </div>
</template>

<script>

// 引入组件
// import TodoList from './components/TodoList'
// import TodoItem from './components/TodoItem'
export default {
  name: 'Basic',
  // 定义局部组件,只能在app中使用，全局组件放需在main.js中
  // components: {
  //   TodoList, TodoItem
  // },
  data () {
    return {
      message: 'kunbu',
      list: [
        // vm.list[0].del=true
        {
          title: '物理',
          del: false
        },
        {
          title: '化学',
          del: false
        },
        {
          title: '生物',
          del: true
        }
      ],
      array: [
        {
          title: '原生',
          del: false
        },
        {
          title: '元素',
          del: false
        }
      ]
    }
  },
  methods: {
    // TODO function缩写
    rawClick (item) {
      item.del = !item.del
      console.log('原生click事件', item)
    },
    // 这里的title是组件item中emit传递的title
    handleDelete: function (title) {
      console.log('handleDelete', title)
    },
    handleChange (event) {
      // 从InputEvent下的<input>中取出value
      this.message = event.target.value
      console.log('handleChange >>> ', event)
      console.log('handleChange >>> ', event.target)
      console.log('handleChange >>> ', event.target.value)
    }
  }
}
</script>
