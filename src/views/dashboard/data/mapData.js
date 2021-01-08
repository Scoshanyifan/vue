// eslint-disable-next-line no-unused-vars
function randomData() {
  return Math.round(Math.random() * 250)
}
const colorArr = ['#fde427', '#64ba5f', '#7febed', '#cec042', '#b073c6']
const data = [
  { name: '北京', value: randomData() },
  { name: '天津', value: randomData() },
  { name: '上海', value: randomData() },
  { name: '重庆', value: randomData() },
  { name: '河北', value: randomData() },
  { name: '河南', value: randomData() },
  { name: '云南', value: randomData() },
  { name: '辽宁', value: randomData() },
  { name: '黑龙江', value: randomData() },
  { name: '湖南', value: randomData() },
  { name: '安徽', value: randomData() },
  { name: '山东', value: randomData() },
  { name: '新疆', value: randomData() },
  { name: '江苏', value: randomData() },
  { name: '浙江', value: randomData() },
  { name: '江西', value: randomData() },
  { name: '湖北', value: randomData() },
  { name: '广西', value: randomData() },
  { name: '甘肃', value: randomData() },
  { name: '山西', value: randomData() },
  { name: '内蒙古', value: randomData() },
  { name: '陕西', value: randomData() },
  { name: '吉林', value: randomData() },
  { name: '福建', value: randomData() },
  { name: '贵州', value: randomData() },
  { name: '广东', value: randomData() },
  { name: '青海', value: randomData() },
  { name: '西藏', value: randomData() },
  { name: '四川', value: randomData() },
  { name: '宁夏', value: randomData() },
  { name: '海南', value: randomData() },
  { name: '台湾', value: randomData() },
  { name: '香港', value: randomData() },
  { name: '澳门', value: randomData() }
]
const geoCoordMap = {
  '北京': [116.3979471, 39.9081726],
  '上海': [121.4692688, 31.2381763],
  '天津': [117.2523808, 39.1038561],
  '重庆': [106.548425, 29.5549144],
  '河北': [114.4897766, 38.0451279],
  '山西': [112.5223053, 37.8357424],
  '辽宁': [123.4116821, 41.7966156],
  '吉林': [125.3154297, 43.8925629],
  '黑龙江': [126.6433411, 45.7414932],
  '湖南': [112.9812698, 28.2008247],
  '广东': [113.2614288, 23.1189117],
  '海南': [110.3465118, 20.0317936],
  '四川': [104.0817566, 30.6610565],
  '贵州': [106.7113724, 26.5768738],
  '云南': [102.704567, 25.0438442],
  '江西': [115.8999176, 28.6759911],
  '陕西': [108.949028, 34.26168441],
  '青海': [101.7874527, 36.6094475],
  '甘肃': [103.7500534, 36.0680389],
  '广西': [108.3117676, 22.8065434],
  '新疆': [87.6061172, 43.7909393],
  '内蒙古': [111.6632996, 40.8209419],
  '西藏': [91.1320496, 29.657589],
  '宁夏': [106.2719421, 38.4680099],
  '台湾': [120.9581316, 23.8516062],
  '香港': [114.139452, 22.391577],
  '澳门': [113.5678411, 22.167654],
  '安徽': [117.2757034, 31.8632545],
  '江苏': [118.7727814, 32.0476151]
}
const convertData = function(data, color) {
  const res = []
  for (let i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
        itemStyle: {
          color: randomColor(color)
        }
      })
    }
  }
  console.log('res:', res)
  return res
}
function randomColor(colorArr) {
  if (colorArr instanceof Array) {
    const min = 0
    const max = colorArr.length - 1
    const index = Math.floor(Math.random() * (max - min + 1)) + min
    return colorArr[index]
  } else {
    return colorArr
  }
}
export default {
  tooltip: {
    trigger: 'item'
  },
  geo: {
    top: 'center',
    map: 'china',
    zoom: 1.1, // 默认显示级别
    scaleLimit: { min: 0, max: 3 }, // 缩放级别
    label: {
      emphasis: { // 对应鼠标悬浮效果
        show: true
      }
    },
    roam: false, // 是否允许拖拽。
    itemStyle: {
      normal: {
        areaColor: '#101845',
        borderColor: '#344290'
      },
      emphasis: {
        areaColor: '#333'
      }
    }
  },
  series: [
    {
      name: '设备数量',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(data, colorArr),
      symbolSize: function(val) {
        return val[2] / 1
      },
      encode: {
        value: 2
      },
      label: {
        formatter: '{b}',
        position: 'right',
        show: true,
        fontSize: 8
      },
      emphasis: {
        label: {
          show: true
        }
      }
    },
    // {
    //   name: 'Top 5',
    //   type: 'effectScatter',
    //   coordinateSystem: 'geo',
    //   data: convertData(data.sort(function(a, b) {
    //     return b.value - a.value
    //   }).slice(0, 5), '#36a1f4'),
    //   symbolSize: function(val) {
    //     return val[2] / 10
    //   },
    //   encode: {
    //     value: 2
    //   },
    //   showEffectOn: 'render',
    //   rippleEffect: {
    //     brushType: 'stroke'
    //   },
    //   hoverAnimation: true,
    //   label: {
    //     formatter: '{b}',
    //     position: 'right',
    //     show: true,
    //     fontSize: 12
    //   },
    //   itemStyle: {
    //     shadowBlur: 10,
    //     shadowColor: '#333'
    //   },
    //   zlevel: 1
    // }
  ]
  // series: [
  //   {
  //     name: '激活设备',
  //     type: 'map',
  //     // mapType: 'china',
  //     coordinateSystem: 'geo',
  //     data: convertData(data),
  //     effectType: 'ripple',
  //     symbolSize: function(val) {
  //       return val[2] / 10
  //     },
  //     encode: {
  //       value: 2
  //     },
  //     label: {
  //       formatter: '{b}',
  //       position: 'right',
  //       show: false
  //     },
  //     itemStyle: {
  //       color: 'purple'
  //     },
  //     emphasis: {
  //       label: {
  //         show: true
  //       }
  //     }
  //   }
  // ]
}
