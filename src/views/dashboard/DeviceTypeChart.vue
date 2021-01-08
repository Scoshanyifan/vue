<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts' // echarts theme
import deviceTypeData from './data/deviceTypeData'
import { debounce } from '../../utils'
require('echarts/theme/macarons')

export default {
  name: 'DeviceTypeChart',
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
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHandler)
    }

    this.sidebarElm && this.sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)

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
      this.chart = echarts.init(this.$el, 'macarons')
      this.getData()
    },
    getData () {
      // this.$api.device.statistic.getProductCategory().then(res => {
      //   const isActive = res.obj.isActive
      //   const total = res.obj.total
      //   const xAxis = res.obj.xAxis
      //   deviceTypeData.xAxis.data = []
      //   deviceTypeData.series[0].data = []
      //   deviceTypeData.series[1].data = []
      //   xAxis.forEach((item, index) => {
      //     deviceTypeData.xAxis.data.push(item)
      //     deviceTypeData.series[0].data.push(total[index])
      //     deviceTypeData.series[1].data.push(isActive[index])
      //   })
      //   this.chart.setOption(deviceTypeData)
      // })

      const isActive = ['1', '23', '2', '5', '13', '2']
      const total = ['67', '158', '123', '1', '32', '44']
      const xAxis = ['生活', '健康', '安全监控', '智能穿戴', '娱乐', '网络接入']
      deviceTypeData.xAxis.data = []
      deviceTypeData.series[0].data = []
      deviceTypeData.series[1].data = []
      xAxis.forEach((item, index) => {
        deviceTypeData.xAxis.data.push(item)
        deviceTypeData.series[0].data.push(total[index])
        deviceTypeData.series[1].data.push(isActive[index])
      })
      this.chart.setOption(deviceTypeData)
    }
  }

}
</script>

<style scoped>

</style>
