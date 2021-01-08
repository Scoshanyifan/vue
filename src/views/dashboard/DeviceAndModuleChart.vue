<template>
  <div style="width: 100%;height:100%">
    <el-row style="width: 100%;height: 10%">
      <p class="pName">设备模块激活状况和模组占比</p>
    </el-row>
    <el-row style="width: 100%;height: 90%">
      <el-col :span="12" class="content-col">
        <div ref="charts_simple" :style="{height:height,width:width}" />
      </el-col>
      <el-col :span="12" class="content-col">
        <div ref="charts_detail" :style="{height:height,width:width}" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import echarts from 'echarts' // echarts theme
import { debounce } from '../../utils'
import deviceAndModuleData from './data/deviceAndModuleData'
import moduleTypeData from './data/moduleTypeData'
require('echarts/theme/macarons')
// import { deviceAndModuleStatistics } from '@/api/business/device'
export default {
  name: 'DeviceAndModuleChart',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
      this.__resizeHandler = debounce(() => {
        if (this.chartsSimple) {
          this.chartsSimple.resize()
        }
        if (this.chartsDetail) {
          this.chartsDetail.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHandler)
    })
  },
  beforeDestroy () {
    if (!this.chartsSimple) {
      return
    }
    if (!this.chartsDetail) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chartsSimple.dispose()
    this.chartsSimple = null
    this.chartsDetail.dispose()
    this.chartsDetail = null
  },
  methods: {
    sidebarResizeHandler (e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler()
      }
    },
    initChart () {
      this.chartsSimple = echarts.init(this.$refs.charts_simple, 'macarons')
      this.chartsDetail = echarts.init(this.$refs.charts_detail, 'macarons')
      this.getData()
    },
    getData () {
      // this.$api.device.statistic.deviceAndModuleStatistics().then(data => {
      //   const simpleData = data.obj.simple
      //   const detailData = data.obj.detail
      //   deviceAndModuleData.legend.data = []
      //   deviceAndModuleData.series[0].data = []
      //   simpleData.forEach((item, index) => {
      //     deviceAndModuleData.legend.data.push(item.type === '1' ? '未激活' : '已激活')
      //     deviceAndModuleData.series[0].data.push({ value: item.sum, name: item.type === '1' ? '未激活' : '已激活' })
      //   })
      //   moduleTypeData.legend.data = []
      //   moduleTypeData.series[0].data = []
      //   detailData.forEach((item, index) => {
      //     moduleTypeData.legend.data.push(item.brandName)
      //     moduleTypeData.series[0].data.push({ value: item.sum, name: item.brandName })
      //   })
      //   this.chartsSimple.setOption(deviceAndModuleData)
      //   this.chartsDetail.setOption(moduleTypeData)
      // })

      const simpleData = [{'sum': 22016, 'type': '1'}, {'sum': 1775, 'type': '2'}]
      deviceAndModuleData.legend.data = []
      deviceAndModuleData.series[0].data = []
      simpleData.forEach((item) => {
        deviceAndModuleData.legend.data.push(item.type === '1' ? '未激活' : '已激活')
        deviceAndModuleData.series[0].data.push({ value: item.sum, name: item.type === '1' ? '未激活' : '已激活' })
      })

      const detailData = [{'brandName': 'TUF', 'sum': 2543}, {'brandName': 'AIR', 'sum': 35}, {'brandName': 'CSR', 'sum': 4}]
      moduleTypeData.legend.data = []
      moduleTypeData.series[0].data = []
      detailData.forEach((item) => {
        moduleTypeData.legend.data.push(item.brandName)
        moduleTypeData.series[0].data.push({ value: item.sum, name: item.brandName })
      })
      this.chartsSimple.setOption(deviceAndModuleData)
      this.chartsDetail.setOption(moduleTypeData)
    }

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.pName{
  color: #ffffff;
  font-size: 18px;
}
.content-col{
  height: 100%;
}
</style>
