<template>
  <el-card shadow="never">
    <el-row>
      <el-col :span="12">
        <div style="margin-bottom: 20px">
          <span style="font-weight: bold">设备激活总数排行</span>
          <i class="el-icon-warning-outline" style="margin-left: 20px"></i>
        </div>
        <el-table :data="list">
          <el-table-column
                  prop="num"
                  label="排行"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="name"
                  label="产品名称"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="keyword"
                  label="产品型号">
          </el-table-column>
          <el-table-column
                  prop="count"
                  label="数量">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12">
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'DeviceActive',
  props: {

  },
  data () {
    return {
      list: [
        {
          "num":1,
          "keyword":"ddw1fs",
          "name":"风扇",
          "count":12
        },
        {
          "num":1,
          "keyword":"ddw1fs",
          "name":"风扇",
          "count":12
        },
        {
          "num":1,
          "keyword":"ddw1fs",
          "name":"风扇",
          "count":12
        }
      ],
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
<style>
</style>
