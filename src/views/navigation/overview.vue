<template>
  <div>
    <el-row :gutter="10">
      <template v-for="(item, key, index) in overviewList">
        <el-col :key="index" :span="6">
          <overview-item
                  :title="item.title"
                  :total="item.total"
                  :currPlus="item.currPlus"
                  :loopPercent="item.loopPercent"
                  :percentIconType="item.percentIconType"
                  :content="item.content">
          </overview-item>
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="10">
      <device-active></device-active>
    </el-row>
    <el-row :gutter="10">
    </el-row>
  </div>
</template>
<script>

export default {
  components: {
    OverviewItem: () => import('./components/overviewItem.vue'),
    DeviceActive: () => import('./components/deviceActive.vue')
  },
  created() {
    this.data = this.getAttrData()
    this.value = [1, 3, 4]
  },
  data () {
    return {
      overviewList: [
        {
          "title":"设备激活总数",
          "total":41221,
          "currPlus":32,
          "loopPercent":"12.34%",
          "percentIconType":1,
          "content":"所有设备激活联网的总数量。若ip或产品型号发生变化，某一产品型号的总量可能会减少。"
        },
        {
          "title":"用户总数",
          "total":126562,
          "currPlus":897,
          "loopPercent":"12.87%",
          "percentIconType":2,
          "content":"所有设备对应所使用的总用户数。"
        },
        {
          "title":"设备激活总数",
          "total":null,
          "currPlus":7258,
          "loopPercent":"17.26%",
          "percentIconType":1,
          "content":"每日使用并在线的设备数量。"
        },
        {
          "title":"故障总数",
          "total":0,
          "currPlus":0,
          "loopPercent":"-",
          "percentIconType":3,
          "content":"该账号下的设备通过故障功能点上报的数量。"
        }
      ]
    }
  },
  methods: {
    showDialog (oldAttrIds) {
      console.log('oldAttrIds:', oldAttrIds)

    },
    getAttrData() {
      let data = []
      for (let i = 1; i <= 7; i++) {
        data.push({
          key: i,
          label: `属性-${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    },
    // 右边当前值，数据移动的方向（left/right），发生移动的数据 key 数组
    handleChange(value, direction, movedKeys) {
      console.log('>>> item change：', value, direction, movedKeys);
    },
    handleSave() {

    }
  }
}
</script>
