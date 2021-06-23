<template>
  <div style="width: 200px">
    <h1>菜单</h1>
    <el-button v-model="isCollapse" @click="changeCollapse()">展开</el-button>
    <el-menu
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            router
            :default-active="$route.path"
    >
      <div v-for="(item,index) in menu" :key="index">
        <el-submenu v-if="item.children" :index="item.name">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item v-for="(subitem,subindex) in item.children" :key="subindex" :index="subitem.uri">
            {{ subitem.name }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.uri">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </div>
    </el-menu>
    <h1>菜单</h1>
    <el-menu>
      <el-menu-item index="1" @click="handleRouter()">
        <i class="el-icon-location"></i>
        <span>数据大屏</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>数据中心</span>
        </template>
        <el-menu-item index="2-1">
          整体概览
        </el-menu-item>
        <el-menu-item index="2-2">
          设备分析
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span>运营中心</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>

export default {
  components: {
  },
  created() {
    console.log(this.$route)
    console.log(this.$route.params)
  },
  data () {
    return {
      isCollapse: false,
      menu:[
        {
          "name": "数据大屏",
          "uri": "/navigation/databoard"
        },
        {
          "name": "数据中心",
          "children": [
            {
              "name": "整体概览",
              "uri": "/navigation/datacenter/overview"
            }, {
              "name": "设备分析",
              "uri": "/navigation/datacenter/device"
            }
          ],
        },
        {
          "name": "运营中心",
          "uri": "/navigation/business"
        },
      ]

    }
  },
  methods: {
    changeCollapse () {
      this.isCollapse = !this.isCollapse;
    },
    handleRouter (index) {
      console.log('index:', index)
      const routeName = this.$route.name;
      if (name && name !== routeName) {
        this.$router.push({ name: name })
      }
      return true
    },
    handleOpen(key, keyPath) {
      console.log('open:', key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log('close:', key, keyPath);
    }
  }
}
</script>
