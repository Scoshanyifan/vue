export default {
  color: ['#5067CE', '#33C7C5'],
  title: {
    // text: '设备激活/活跃趋势统计\n',
    text: '设备激活趋势统计\n',
    textStyle: {
      fontSize: 18,
      color: '#ffffff'
    }
  },
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
    orient: 'vertical',
    // data: ['激活数量', '活跃数量'],
    data: ['激活数量'],
    textStyle: {
      fontSize: 14,
      color: '#8C909F'
    },
    right: 10
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
    boundaryGap: false,
    data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    axisLabel: {
      textStyle: {
        fontSize: 12,
        color: '#8C909F'
      }
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      textStyle: {
        fontSize: 12,
        color: '#8C909F'
      }
    },
    splitLine: {
      show: false
    }
  },
  series: [
    {
    symbol: 'circle',
    name: '激活数量',
    data: [1230, 732, 1001, 934, 890, 2030, 1320, 1120, 1920, 720, 820, 420],
    type: 'line'
  },
  // {
  //   symbol: 'circle',
  //   name: '活跃数量',
  //   data: [1000, 353, 445, 666, 666, 877, 988, 1320, 220, 3320, 1120, 320],
  //   type: 'line'
  // }
  ]
}
