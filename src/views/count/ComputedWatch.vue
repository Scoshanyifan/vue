<template>
  <div>
    <h1>ComputedWatch</h1>
    {{fullName}}
    <br>
    {{fullName2}}
    <div>
      firstName:<input v-model="firstName">
    </div>
    <div>
      lastName:<input v-model="lastName">
    </div>
    <div>
      firstName2:<input v-model="firstName2">
    </div>
    <div>
      lastName2:<input v-model="lastName2">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComputedWatch',
  data: function () {
    return {
      firstName: 'Hanks',
      lastName: 'Tom',
      firstName2: 'Stone',
      lastName2: 'Jack',

      fullName2: ''
    }
  },
  // TODO 命令式且重复的用计算属性（尽可能用computed）
  computed: {
    // 这里的fullName相当于初始化了
    // computed: {
    //   fullName: function () {
    //     return this.firstName + ' ' + this.lastName
    //   }
    // }
    fullName: {
      // 计算属性默认只有 getter（这里的get: 是完整写法，简写如上）
      get: function () {
        return this.firstName + '-' + this.lastName
      },
      set: function (newValue) {
        var names = newValue.split('-')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }

    }
  },
  // TODO 涉及多个原色就需要分开监听，不像computed灵活（但是功能更强大，computed能做的watch都能做）
  watch: {
    firstName2 (newVal, oldVal) {
      this.fullName2 = newVal + '-' + this.lastName2
      console.log('firstName2 >>> new: %s, old: %s', newVal, oldVal)
    },
    lastName2 (newVal, oldVal) {
      this.fullName2 = this.firstName2 + '-' + newVal
      console.log('lastName2 >>> new: %s, old: %s', newVal, oldVal)
    },
    // 即使在这里声明了也不算初始化，会报错
    fullName2 (newVal, oldVal) {
      console.log('fullName2 >>> new: %s, old: %s', newVal, oldVal)
    }
  }

}
</script>
