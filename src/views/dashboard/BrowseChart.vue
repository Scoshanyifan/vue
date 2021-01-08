<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts' // echarts theme
import browseData from './data/browseData'
import { debounce } from '../../utils'
require('echarts/theme/macarons')

export default {
  name: 'BrowseChart',
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
    this.initChart()
    if (this.autoResize) {
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHandler)
    }
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
      // this.$api.device.statistic.getActiveDeviceByTime().then(res => {
      //   const xAxis = res.obj.xAxis
      //   const total = res.obj.yActive
      //
      //   browseData.xAxis.data = []
      //   browseData.series[0].data = []
      //   xAxis.forEach((item, index) => {
      //     browseData.xAxis.data.push(item)
      //     browseData.series[0].data.push(total[index])
      //   })
      //   this.chart.setOption(browseData)
      // })

      browseData.series[0].data = [5, 1, 0, 1, 2, 4, 1]
      browseData.series[1].data = [1, 1, 2, 0, 1, 3, 1]
      let weekDays = ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu']
      browseData.xAxis.data = weekDays.map(week => weekDict[week])
      this.chart.setOption(browseData)
    }
  }
}
const weekDict = {
  'Mon': '星期一',
  'Tue': '星期二',
  'Wed': '星期三',
  'Thu': '星期四',
  'Fri': '星期五',
  'Sat': '星期六',
  'Sun': '星期日'
}

</script>

<style scoped>

</style>
