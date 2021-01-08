<template>
  <div>
    <h1>Advance</h1>
    <div>
      <template v-if="fieldType === 'userName'">
        <label>UserName</label>
        <input placeholder="Enter your username">
      </template>
      <template v-else>
        <label>Password</label>
        <input placeholder="Enter your password">
      </template>
      <button @click="changeField()">切换账号密码</button>
    </div>
    <div>
      <template v-if="loginType === 'account'">
        <label>Account</label>
        <input placeholder="Enter your account" key="account">
      </template>
      <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email" key="email">
      </template>
      <button @click="changeLogin()">切换登录方式</button>
    </div>
    <div>
      <label v-show="show"></label>
    </div>
    <div>
      <button @click="axiosHttp()">调用接口</button>
    </div>
  </div>
</template>

<script>
import ax from '../../plugin/axios'

export default {
  name: 'advance',
  data: function () {
    return {
      fieldType: 'userName',
      fieldCount: 1,
      loginType: 'account',
      loginCount: 1,

      show: true
    }
  },
  methods: {
    // TODO 切换 loginType 不会清除用户已经输入的内容，因为两个模板使用了相同的元素<input>，如果想要独立可以设置不同的key
    changeField: function () {
      console.log('changeField count', this.fieldCount)
      if (this.fieldCount % 2 === 0) {
        this.fieldType = 'userName'
      } else {
        this.fieldType = 'password'
      }
      this.fieldCount++
    },
    changeLogin: function () {
      this.$message.info('changeLogin count' + this.loginCount)
      console.log('changeLogin count', this.loginCount)
      if (this.loginCount % 2 === 0) {
        this.loginType = 'account'
      } else {
        this.loginType = 'email'
      }
      this.loginCount++
    },
    axiosHttp: function () {
      ax.get('/img/qr')
        .then(res => {
          console.log('>>> img, res:', res)
        }).catch(err => {
          console.error('>>> err:', err)
        })
    }
  }
}
</script>
