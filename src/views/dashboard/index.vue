<template>
  <div class="charts-container">
    <el-row :gutter="12" style="width: 100%;height: 100%">
      <el-col :span="6" class="content-col">
        <el-row style="height: 50%">
          <el-col style="width: 100%;height: 100%">
            <el-card class="box-card" :body-style="elCardBodyStyle">
              <device-type-chart />
            </el-card>
          </el-col>
        </el-row>
        <el-row style="height: 50%">
          <el-col style="width: 100%;height: 100%">
            <el-card class="box-card" :body-style="elCardBodyStyle">
              <device-brand-type-chart />
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" class="content-col">
        <el-row style="height: 33%">
          <el-col style="width: 100%;height: 100%">
            <el-card class="box-card" :body-style="elCardBodyStyle" style="background-color: transparent">
              <middle-device-num />
            </el-card>
          </el-col>
        </el-row>
        <el-row style="height: 75%">
          <el-col style="width: 100%;height: 100%">
            <el-card class="box-card" :body-style="elCardBodyStyle" style="background-color: transparent">
              <map-chart />
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6" class="content-col">
        <el-row style="height: 50%">
          <el-col style="width: 100%;height: 100%">
            <el-card class="box-card" :body-style="elCardBodyStyle">
              <device-and-module-chart />
            </el-card>
          </el-col>
        </el-row>
        <el-row style="height: 50%">
          <el-col style="width: 100%;height: 100%">
            <el-card class="box-card" :body-style="elCardBodyStyle">
              <browse-chart />
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import DeviceAndModuleChart from './DeviceAndModuleChart'
import DeviceTypeChart from './DeviceTypeChart'
import BrowseChart from './BrowseChart'
import DeviceBrandTypeChart from './DeviceBrandTypeChart'
import MiddleDeviceNum from './MiddleDeviceNum'
import MapChart from './MapChart'
export default {
  name: 'Statistics',
  components: {
    DeviceAndModuleChart,
    DeviceTypeChart,
    BrowseChart,
    DeviceBrandTypeChart,
    MiddleDeviceNum,
    MapChart
  },
  data () {
    return {
      elCardBodyStyle: {
        height: '100%'
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 18px 22px 22px 22px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
/deep/ .el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
/deep/ .el-col {
  border-radius: 6px;
}
  .charts-container{
    background-color: #12172C;
    margin: 0;
    padding: 50px;
    width: 100%;
    height: 100%;
    /*height: 800px;*/
    overflow: hidden;
  }
.box-card {
  background: #1D233A;
  height:100%;
  border: 0;
}
.content-col{
  height: 100%;
}
</style>
