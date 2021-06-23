<template>
  <el-card shadow="never">
    <el-row>
      <el-col :span="20">
        <el-tabs v-model="statType" @tab-click="handleTabClick">
          <el-tab-pane :label="statTypeList[0].value" name="first"></el-tab-pane>
          <el-tab-pane :label="statTypeList[1].value" name="second" v-if="statTypeList.length == 2" ></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="4">
        <el-radio-group v-model="cycleType" size="medium" @change="handleCycleClick">
          <el-radio-button label="WEEK">7日</el-radio-button>
          <el-radio-button label="MONTH">30日</el-radio-button>
        </el-radio-group>
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20">
        <div id="echartsLine" style="width: 100%;height: 350px"></div>
      </el-col>
      <el-col :span="4">
        <device-overview-item
                :title="title"
                :total="total"
                :loopPercent="loopPercent"
                :percentIconType="percentIconType"
                :extra="extra">
        </device-overview-item>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import echartsLine from './echartsLine'
import deviceOverviewItem from './deviceOverviewItem'
export default {
  name: 'deviceAnalyseItem',
  components: {deviceOverviewItem},
  data () {
    return {
      title: "近7天新增",
      total: 1213,
      loopPercent: "7.86%",
      percentIconType: 2,
      extra: "57.32%",
      statTypeList: [
        {
          "key":"DEVICE_ACTIVE",
          "value": "设备激活总数",
        },{
          "key":"DEVICE_ACTIVE_PLUS",
          "value": "设备激活新增数",
        }
      ],
      cycleType: "WEEK",
      statType: "first"
      // userType: [
      //   {
      //     "key":"USER",
      //     "value": "用户总数",
      //   },{
      //     "key":"USER_PLUS",
      //     "value": "用户新增数",
      //   }
      // ],
      // liveType: [
      //   {
      //     "key":"DEVICE_LIVE",
      //     "value": "设备活跃数",
      //   }
      // ],
      // faultType: [
      //   {
      //     "key":"FAULT",
      //     "value": "故障总数",
      //   },{
      //     "key":"FAULT_PLUS",
      //     "value": "故障新增数",
      //   }
      // ],
    }
  },
  watch: {
    statType: {
      immediate: true,
      handler (val) {
        console.log('val:', val)
        let arr = [
          ['10-23', 1],
          ['10-24', 4],
          ['10-29', 4],
          ['10-29', 7],
          ['10-29', 4],
          ['10-29', 4]
        ]
        this.echartsLine(arr)
      }
    }
  },
  mounted () {
    let arr = [
      ['10-23', 1],
      ['10-24', 4],
      ['10-29', 4],
      ['10-29', 7],
      ['10-28', 5],
      ['10-29', 4]
    ]
    this.echartsLine(arr)
  },
  created() {
    this.statType = "first"
  },
  methods: {
    handleTabClick(item) {
      console.log('tab item:', item)
      if (item.name == "first") {
        console.log('item.name:', item.name)
        let arr = [
          ['10-23', 1],
        ]
        this.echartsLine(arr)
      } else {
        console.log('item.name:', item.name)
        let arr = [
          ['10-23', 1],
          ['10-29', 4]
        ]
        this.echartsLine(arr)
      }
    },
    handleCycleClick(item) {
      if (item == "WEEK") {
        let arr = [
          ['10-23', 1],
          ['10-24', 4],
          ['10-29', 4]
        ]
        this.echartsLine(arr)
      } else {
        let arr = [
          ['10-23', 1],
          ['10-24', 4],
          ['10-29', 4],
          ['10-30', 8]
        ]
        this.echartsLine(arr)
      }
    },
    echartsLine (arr) {
      console.log('arr:', arr)
      let myChart3 = this.$echarts.init(document.getElementById('echartsLine'));
      if (arr) {
        echartsLine.series[0].data = arr
      }
      myChart3.setOption(echartsLine);
    },
  }
}
</script>
<style>
  .el-divider{
    margin: 6.4px 0;
    background: 0 0;
    border-top: 2px solid #E6EBF5;
  }
</style>
