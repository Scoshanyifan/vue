<template>
  <div>
    dsadsadsad
  </div>
</template>
<script>

export default {
  components: {
  },
  data () {
    return {


    }
  },
  methods: {
    // 右边当前值，数据移动的方向（left/right），发生移动的数据 key 数组
    handleChange(value, direction, movedKeys) {
      console.log('>>> item change：', value, direction, movedKeys);
    },
    handleSave() {

    }
  }
}
</script>
