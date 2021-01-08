import echarts from 'echarts'
export default {
  color: ['#5067CE', '#33C7C5'],
  title: {
    text: '设备类型统计\n',
    textStyle: {
      fontSize: 18,
      color: '#ffffff'
    }
  },
  // backgroundColor: 'rgba(255, 255, 255, 0)',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    // orient: 'vertical',
    data: ['总数', '激活数'],
    textStyle: {
      fontSize: 14,
      color: '#8C909F'
    },
    right: 0,
    // top: 30
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '1%',
    containLabel: true,
    show: false
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    data: ['取暖器', '净水器', '净化器', '跑步机', '灯泡', '插座', '其他'],
    axisLabel: {
      interval: 0,
      rotate: "45",
      textStyle: {
        fontSize: 12,
        color: '#8C909F'
      }
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      interval: 0,
      textStyle: {
        fontSize: 12,
        color: '#8C909F'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255, 255, 255, 0)'
      }
    }
  },
  series: [{
    name: '总数',
    symbol: 'circle',
    data: [1000, 932, 901, 934, 1290, 1330, 1320],
    type: 'line',
    areaStyle: {
      color: new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
          { offset: 0, color: '#313D75' },
          { offset: 0.7, color: '#242C4E' },
          { offset: 1, color: '#1D263C' }
        ]
      )
    },
    itemStyle: {
      lineStyle: {
        color: '#5067CE'
      }
    }
  },
  {
    name: '激活数',
    symbol: 'circle',
    data: [500, 233, 445, 666, 666, 777, 888],
    type: 'line',
    areaStyle: {
      color: new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
          { offset: 0, color: '#296177' },
          { offset: 0.7, color: '#254F64' },
          { offset: 1, color: '#1D263C' }
        ]
      )
    },
    itemStyle: {
      lineStyle: {
        color: '#33C7C5'
      }
    }
  }
  ]
}
