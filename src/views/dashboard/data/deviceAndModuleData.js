export default {
  color: ['#1F74F1', '#38BDF8', '#50CE88', '#F4C147', '#7950CE'],
  // title: {
  //   text: '设备激活状态和模组占比\n',
  //   textStyle: {
  //     fontSize: 18,
  //     color: '#ffffff'
  //   }
  // },
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
    data: ['已激活', '未激活'],
    textStyle: {
      fontSize: 12,
      color: '#ADB0BCFF'
    },
    bottom: '5%'
  },
  series: [
    {
      symbol: 'circle',
      name: '数量',
      type: 'pie',
      radius: ['50%', '80%'],
      roseType: 'angle',
      avoidLabelOverlap: false,
      center: ['50%', '30%'],
      label: {
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
        { value: 566, name: '已激活' },
        { value: 310, name: '未激活' }
      ],
      tooltip: {
        position: 'bottom'
      }
    }
  ]
}
