<template>
  <div style="position: center">
    <el-row gutter="20">
      <el-col span="12">
        dsadsadsadsadsada
      </el-col>
      <el-col span="12">
        <el-button @click="returnController()"></el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>

export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    returnController(key, keyPath) {
      console.log('close:', key, keyPath);
    }
  }
}
</script>
