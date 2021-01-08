
export default {
  namespaced: true,
  // 响应式
  state: {
    count: 0
  },
  // 同步赋值
  mutations: {
    increment (state, n) {
      state.count += n
    }
  },
  // 异步
  actions: {
    url () {
      setTimeout(() => {
        console.log('actions')
      }, 1000)
    }
  },
  // 借助Vue的计算属性computed实现缓存作用
  getters: {
    multiplyCount (state) {
      return state.count * 2
    }
  }
}
