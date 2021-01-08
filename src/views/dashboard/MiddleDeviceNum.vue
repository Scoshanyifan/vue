<template>
  <div style="width: 100%;height: 100%;">
    <div class="title" style="height: 25%">小匠物联数据平台 </div>
    <div class="content" style="height: 18%; margin-top: 5px">
      <div class="left-content">当前激活设备：</div>
      <!--<div class="right-content">-->
        <!--<div class="item">-->
          <!--<div class="title" style="color:#33C7C5">在线总数</div>-->
          <!--<div>{{ onlineNumStr }}</div>-->
        <!--</div>-->
        <!--<div class="split-line" />-->
        <!--<div class="item">-->
          <!--<div class="title" style="color:#5068D4">设备总数</div>-->
          <!--<div style="color:#5068D4">{{ totalNumStr }}</div>-->
        <!--</div>-->
      <!--</div>-->

      <div class="left-content" style="display: flex; margin-top: 2.5%;">
        <div style="font-size: 16px;color:whitesmoke">设备总数：</div>
        <div style="font-size: 16px;color:#5067CE">{{ totalNumStr }}</div>
      </div>
    </div>
    <div style="height: 5%; margin-top: 5px">
      <div class="line"></div>
    </div>
    <div class="number-group" style="height: 60%">
      <ul>
        <li v-for="(item,index) in activeNumArray" :key="index">
          <span class="number-content">{{ item }}</span>
          <span v-if="index===1 || index===4" class="split-content">，</span>
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
export default {
  name: 'MiddleDeviceNum',
  props: {

  },
  data () {
    return {
      onlineNum: 0,
      totalNum: 0,
      activeNum: 0,
      activeNumArray: []
    }
  },
  computed: {
    onlineNumStr: function () {
      return this.formatNum(this.onlineNum)
    },
    totalNumStr: function () {
      return this.formatNum(this.totalNum)
    }
  },
  watch: {
    activeNum (val) {
      let arr = [...val.toString()]
      let len = arr.length
      while (len < 8) {
        len = arr.unshift('0')
      }
      if (len > 8) {
        arr = arr.slice(0, 8)
      }
      this.activeNumArray = arr
    }
  },
  created () {
    this.getData()
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  mounted () {
    this.timer = setInterval(this.getActiveNum, 10000)
  },
  methods: {
    getData () {
      // this.onlineNum = 3243223
      // this.totalNum = 26534654
      // this.activeNum = 1328923

      this.$api.device.statistic.getDeviceIsActive().then(res => {
        this.activeNum = res.obj.isActive
      })
      this.$api.device.statistic.getDeviceSumAndOnline().then(res => {
        this.onlineNum = res.obj.onlineNum
        this.totalNum = res.obj.allNum
      })
    },
    formatNum (num) {
      return num.toString().replace(/\d{1,3}(?=(\d{3})+$)/g,
        function (s) {
          return s + ','
        })
    },
    getActiveNum () {
      // getDeviceIsActive().then(res => {
      //   this.activeNum = res.isActive
      // })
      // const addNum = Math.floor(Math.random() * 10)
      // this.activeNum = this.activeNum + addNum
    }
  }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .title{
    color: whitesmoke;
    font-size: 38px;
  }
  .number-group{
    width: 100%;
    color: #5067CE;
  }
  .number-group ul{
    display: flex;
    width: 100%;
    padding-left: 0;
    margin: 0;
    list-style: none;
    justify-content: space-between;
  }
  .number-group ul li{
    font-size: 40px;
    color: #5067CE !important;
    background-color: transparent;
    margin: 0;
    float: left;
    display: table-cell;
    width: 10%;
    padding-bottom: 10%;
    position: relative;
    box-sizing: border-box;
  }
  .number-group .number-content{
    padding: 12px 0;
    background-color: #0e324a !important;
    text-align: center;
    border-radius: 4px;
    margin: 0;
    display: inline-block;
    width: calc(100% - 12px);
    /*height: 120%;*/
    float: left;
  }
  .number-group .split-content{
    line-height: 60px;
    display: inline-block;
    width: 12px;
    padding: 0;
    margin-top: 10px;
  }
  .line {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 1px;
    background-color: #282F4A;
  }
  .content{
    color: #33C7C5;
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: 10px;
    .left-content{
      margin-top: 2%;
      color: whitesmoke;
      font-size: 17px;
    }
    .right-content{
      display: flex;
      .title{
        color: whitesmoke;
        font-size: 12px;
      }
      .item{
        width: 80px;
        height: 60px;
        margin: 0 10px;
      }
      .split-line{
        float:left;
        width: 1px;
        height: 50px;
        background: #282F4A;
      }
    }
  }
</style>
