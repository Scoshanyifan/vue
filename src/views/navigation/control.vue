<template>
  <el-container class="j-container">
    <div></div>
    <el-aside class="j-layout-aside j-product">
      <el-menu>
        <div v-for="(item, index) in menus" :key="index">
          <el-submenu v-if="item.children" :index="item.name">
            <template slot="title">
              <!--<i class="el-icon-menu"></i>-->
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="(subitem,subindex) in item.children" :key="subindex" :index="subitem.uri" @click="handleRouterToggle(subitem)">
              {{ subitem.name }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="item.uri" @click="handleRouterToggle(item)">
            <!--<i class="el-icon-menu"></i>-->
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-aside>
    <el-main style="padding: 0;">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'LayoutControl',
  data () {
    return {
      menus: [
        {
          'name': '数据大屏',
          'uri': 'databoard'
        },
        {
          'name': '数据中心',
          'children': [
            {
              'name': '整体概览',
              'uri': 'overview'
            }, {
              'name': '设备分析',
              'uri': 'deviceAnalyse'
            }
          ]
        },
        {
          'name': '运营中心',
          'uri': 'business'
        }
      ]
    }
  },
  computed: {
  },
  watch: {
    productKey: {
      immediate: true,
      handler (val) {
        if (!val) return false;
        this.$store.dispatch('product/setCurrentProduct');

        setTimeout(() => {
          const p = this.product;
          if (val !== p.productKey) {
            this.$router.push({
              name: 'product-list'
            })
          }
        }, 1000)
      }
    }
  },
  methods: {
    handleRouterToggle (item) {
      console.log('route item:', item, this.$route)
      this.$router.push({ name: item.uri })
      return true
    }
  }
}
</script>
