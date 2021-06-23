<template>
  <el-card shadow="never">
    <el-row>
      <el-col :span="20" style="color: gray">
        {{ title }}
      </el-col>
      <el-col :span="4">
        <el-popover placement="top-start"
                    trigger="click"
                    style="right: auto"
                    :content="content"
                    width="250"
        >
          <i class="el-icon-warning-outline" slot="reference"></i>
        </el-popover>
      </el-col>
    </el-row>
    <el-row style="font-size: 26px; margin-bottom: 10px; margin-top: 10px">
      {{ totalData }}
    </el-row>
    <el-row>
      <el-col :span="12" v-if="showPlus">
        今日新增 {{ currPlus }}
      </el-col>
      <el-col :span="4">
        环比
        <i v-if="percentIconType == 1" class="el-icon-caret-top" style="color:red"></i>
        <i v-else-if="percentIconType == 2" class="el-icon-caret-bottom" style="color:greenyellow"></i>
      </el-col>
      <el-col :span="8">
        {{ loopPercent }}
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'OverviewItem',
  props: {
    title: String,
    total: Number,
    currPlus: Number,
    loopPercent: String ,
    percentIconType: Number,
    content: String,
  },
  data () {
    return {
      showPlus: false,
      totalData: null,
    }
  },
  created() {
    if (this.total == null) {
      this.totalData = this.toThousands(this.currPlus)
    } else {
      this.showPlus = true
      this.totalData = this.toThousands(this.total)
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
