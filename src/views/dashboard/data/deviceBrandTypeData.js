export default {
  color: ['#5067CE', '#33C7C5'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{b}<br/>{a0}:{c0}<br/>{a1}:{c1}'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '2%',
    containLabel: true,
    show: false
  },
  backgroundColor: 'rgba(255, 255, 255, 0)',
  title: {
    text: '地区分布\n',
    textStyle: {
      fontSize: 18,
      color: '#ffffff'
    }
  },
  legend: {
    icon: 'circle',
    // orient: 'vertical',
    data: ['设备数量', '激活数量'],
    textStyle: {
      fontSize: 14,
      color: '#8C909F'
    },
    right: 0,
    // top: 20,
    itemStyle: {
      barBorderRadius: [10, 10, 10, 10]
    }
  },
  // toolbox: {
  //   show: true,
  //   orient: 'vertical',
  //   left: 'right',
  //   top: 'center',
  //   feature: {
  //     mark: { show: true },
  //     dataView: { show: true, readOnly: false },
  //     magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
  //     restore: { show: true },
  //     saveAsImage: { show: true }
  //   }
  // },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['小乔', '卡帝亚', '帝源', '佳星', '科曼', '其他'],
      axisLabel: {
        interval: 0,
        textStyle: {
          fontSize: 12,
          color: '#8C909F'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        show: true,
        formatter: '{value}',
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
      },
      show: true
    }
  ],
  series: [
    {
      name: '设备数量',
      type: 'bar',
      barGap: 0,
      data: [40, 20, 15, 5, 12, 8],
      barWidth: 8,
      itemStyle: {
        barBorderRadius: [10, 10, 0, 0]
      }
    },
    {
      name: '激活数量',
      type: 'bar',
      data: [25, 13, 12, 5, 10, 6],
      barWidth: 8,
      itemStyle: {
        barBorderRadius: [10, 10, 0, 0]
      }
    }
  ]

}
