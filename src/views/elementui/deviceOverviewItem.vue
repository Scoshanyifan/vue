<template>
  <div>
    <el-row>
      <el-col style="color: gray">
        {{ title }}
      </el-col>
    </el-row>
    <el-row style="font-size: 26px; margin-bottom: 10px; margin-top: 10px">
      {{ total }}
    </el-row>
    <el-row>
      <el-col :span="16">
        环比
        <i v-if="percentIconType == 1" class="el-icon-caret-top" style="color:red"></i>
        <i v-else-if="percentIconType == 2" class="el-icon-caret-bottom" style="color:greenyellow"></i>
      </el-col>
      <el-col :span="8">
        {{ loopPercent }}
      </el-col>
    </el-row>
    <el-row>
      <el-divider></el-divider>
      <el-col style="color: gray">
        dsadsdsadsasd
      </el-col>
      <el-col>
        {{ extra }}
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'deviceOverviewItem',
  props: {
    title: String,
    total: Number,
    currPlus: Number,
    loopPercent: String ,
    percentIconType: Number,
    extra: String,
  },
  data () {
    return {
    }
  },
  methods: {
    toThousands(num) {
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }
  }
}
</script>
<style>
</style>
