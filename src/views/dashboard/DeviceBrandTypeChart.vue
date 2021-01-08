<template>
  <div ref="device_brand" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'

import deviceBrandTypeData from './data/deviceBrandTypeData'
import { debounce } from '../../utils'
require('echarts/theme/macarons') // echarts theme
export default {
  name: 'DeviceBrandTypeChart',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
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
      if (this.autoResize) {
        this.__resizeHandler = debounce(() => {
          if (this.chart) {
            this.chart.resize()
          }
        }, 100)
        window.addEventListener('resize', this.__resizeHandler)
      }
    })
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    sidebarResizeHandler (e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler()
      }
    },
    initChart () {
      this.chart = echarts.init(this.$refs.device_brand, 'macarons')
      this.getData()
    },
    getData () {
      // this.$api.device.statistic.getAreaDistribute().then(res => {
      //   // const isActive = ['11', '3', '6', '34', '23', '1', '53', '9']
      //   // const total = [2, 7, 1, 11, 32, 22, 44, 12]
      //   // const xAxis = ['北京', '天津', '上海', '重庆', '河北', '其他']
      //
      //   const distActive = res.obj.distActive
      //   const distTotal = res.obj.distTotal
      //   const xAxis = res.obj.xAxis
      //
      //   deviceBrandTypeData.xAxis[0].data = []
      //   deviceBrandTypeData.series[0].data = []
      //   deviceBrandTypeData.series[1].data = []
      //   xAxis.forEach((item, index) => {
      //     deviceBrandTypeData.xAxis[0].data.push(item)
      //     deviceBrandTypeData.series[0].data.push(distTotal[index])
      //     deviceBrandTypeData.series[1].data.push(distActive[index])
      //   })
      //   this.chart.setOption(deviceBrandTypeData)
      // })


      const isActive = ['11', '3', '6', '34', '23', '1', '53', '9']
      const total = [2, 7, 1, 11, 32, 22, 44, 12]
      const xAxis = ['北京', '天津', '上海', '重庆', '河北', '其他']

      deviceBrandTypeData.xAxis[0].data = []
      deviceBrandTypeData.series[0].data = []
      deviceBrandTypeData.series[1].data = []
      xAxis.forEach((item, index) => {
        deviceBrandTypeData.xAxis[0].data.push(item)
        deviceBrandTypeData.series[0].data.push(total[index])
        deviceBrandTypeData.series[1].data.push(isActive[index])
      })
      this.chart.setOption(deviceBrandTypeData)

    }
  }

}
</script>

<style scoped>

</style>
