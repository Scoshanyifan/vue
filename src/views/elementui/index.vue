<template>
  <div>
    <div>
      <el-transfer  style="text-align: left; display: inline-block"
              v-model="value"
              :data="data"
              :filterable="search"
              :titles="titles"
              :left-default-checked=left
              :right-default-checked=right
              @change="handleChange"
      >
        <!-- 自定义元素项 1-备选项-1 -->
        <!--<span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>-->
        <!-- 操作 -->
        <!--<el-button class="transfer-footer" slot="left-footer" size="small">左边按钮</el-button>-->
        <!--<el-button class="transfer-footer" slot="right-footer" size="small">右边按钮</el-button>-->
      </el-transfer>
    </div>
    <el-button type="primary" @click="handleSave">保存</el-button>

  </div>
</template>
<script>

export default {
  components: {
  },
  created() {
    this.data = this.getAttrData()
    this.value = [1, 3, 4]
  },
  data () {
    return {
      // 所有数据：array[{ key, label, disabled }]
      data: [],
      // 绑定值（右边）：array
      value: [],
      // 搜索
      search: true,
      // 标题
      titles: ['基础属性', '产品属性'],
      // 选中值：array
      left: [],
      right: [],
    }
  },
  methods: {
    showDialog (oldAttrIds) {
      console.log('oldAttrIds:', oldAttrIds)

    },
    getAttrData() {
      let data = []
      for (let i = 1; i <= 7; i++) {
        data.push({
          key: i,
          label: `属性-${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    },
    // 右边当前值，数据移动的方向（left/right），发生移动的数据 key 数组
    handleChange(value, direction, movedKeys) {
      console.log('>>> item change：', value, direction, movedKeys);
    },
    handleSave() {

    }
  }
}
</script>
