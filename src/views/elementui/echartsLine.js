export default {
  tooltip: {
    show: 'true',
    trigger: 'axis'
  },
  grid: {
    height: '80%',
    width: '80%',
    top: '8%'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '##606266'
      }
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '30%'],
    axisTick: {
      show: false // 不显示坐标轴刻度
    },
    axisLine: {
      show: false // 不显示坐标轴线
    },

    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed'
      }
    }
  },
  series: [
    {
      type: 'line',
      smooth: 0.6,
      itemStyle: {
        normal: {
          color: '#5DDEC9'
        }
      },
      areaStyle: {
        color: '#93E9DB'
      },
      data: [],
    }
  ]
}
