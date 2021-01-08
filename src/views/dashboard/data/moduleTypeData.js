export default {
  color: ['#5067CE', '#33C7C5'],
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
    show: false
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: '10%',
    data: ['Wifi模块', '蓝牙模块', '蓝牙mesh'],
    textStyle: {
      fontSize: 12,
      color: '#ADB0BCFF'
    },
    bottom: '4%'
  },
  series: [
    {
      name: '数量',
      type: 'pie',
      radius: ['50%', '80%'],
      roseType: 'angle',
      avoidLabelOverlap: false,
      center: ['53%', '30%'],
      label: {
        show: true,
        position: 'inner',
        formatter: '{d}%'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '12',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 335, name: '蓝牙模块' },
        { value: 310, name: 'Wifi模块' },
        { value: 234, name: '蓝牙mesh' },
      ],
      tooltip: {
        position: 'bottom'
      }
    }
  ]
}
