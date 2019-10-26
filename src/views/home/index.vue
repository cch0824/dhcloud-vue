<template>
  <div class="home-container">
    <!-- 公共部分 -->
    <div class="latout">
      <el-container class="el-container-big">
      <!-- 侧边栏 -->
      <el-aside width="220px" class="aside">
        <!-- logo -->
        <img class="logo" src="@/assets/images/logo.png" alt />
        <!-- 导航菜单 -->
        <el-menu
          default-active="1-4-1"
          unique-opened="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          text-color="#fff"
          background-color="#006e4f"
          active-text-color="#fff"
          menu-trigger="click"
        >
          <!-- 首页 -->
          <el-menu-item index="1">
            <i class="iconfont iconshouye"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 客户档案 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont iconkehudangan"></i>
              <span slot="title">客户档案</span>
            </template>
            <el-menu-item index="2-1">新建档案</el-menu-item>
            <el-menu-item index="2-2">档案管理</el-menu-item>
          </el-submenu>
          <!-- 服务管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="iconfont iconqiantaijiedai"></i>
              <span slot="title">服务管理</span>
            </template>
            <el-menu-item index="3-1">来电服务</el-menu-item>
            <el-menu-item index="3-2">上传报告</el-menu-item>
            <el-menu-item index="3-3">问卷推送</el-menu-item>
            <el-menu-item index="3-4">离店回访</el-menu-item>
          </el-submenu>
          <!-- 财务管理 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="iconfont iconcaiwuguanli"></i>
              <span slot="title">财务管理</span>
            </template>
            <el-menu-item index="4-1">收费</el-menu-item>
            <el-menu-item index="4-2">退费</el-menu-item>
            <el-menu-item index="4-3">账务</el-menu-item>
            <el-menu-item index="4-4">订单</el-menu-item>
          </el-submenu>
          <!-- 药房管理 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="iconfont iconyaopinguanli"></i>
              <span slot="title">药房管理</span>
            </template>
            <el-menu-item index="5-1">药房发药</el-menu-item>
            <el-menu-item index="5-2">药房退药</el-menu-item>
            <el-menu-item index="5-3">药品入房</el-menu-item>
            <el-menu-item index="5-4">药品出房</el-menu-item>
            <el-menu-item index="5-5">药品盘点</el-menu-item>
          </el-submenu>
          <!-- 库房管理 -->
          <el-submenu index="6">
            <template slot="title">
              <i class="iconfont iconkucunguanli"></i>
              <span slot="title">库房管理</span>
            </template>
            <el-menu-item index="6-1">物品发放</el-menu-item>
            <el-menu-item index="6-2">库房退货</el-menu-item>
            <el-menu-item index="6-3">物品入库</el-menu-item>
            <el-menu-item index="6-4">物品出库</el-menu-item>
            <el-menu-item index="6-5">库存盘点</el-menu-item>
          </el-submenu>
          <!-- 设备管理 -->
          <el-submenu index="7">
            <template slot="title">
              <i class="iconfont iconshebeiguanli"></i>
              <span slot="title">设备管理</span>
            </template>
            <el-menu-item index="7-1">设备管理</el-menu-item>
            <el-menu-item index="7-2">报修管理</el-menu-item>
            <el-menu-item index="7-3">报废管理</el-menu-item>
          </el-submenu>
          <!-- 系统设置 -->
          <el-submenu index="8">
            <template slot="title">
              <i class="iconfont iconxitongshezhi"></i>
              <span slot="title">系统设置</span>
            </template>
            <el-menu-item index="8-1">用户信息维护</el-menu-item>
            <el-menu-item index="8-2">角色权限维护</el-menu-item>
            <el-menu-item index="8-3">项目信息维护</el-menu-item>
            <el-menu-item index="8-4">物品信息维护</el-menu-item>
            <el-menu-item index="8-5">药品信息维护</el-menu-item>
            <el-menu-item index="8-6">设备信息维护</el-menu-item>
            <el-menu-item index="8-7">组合模板维护</el-menu-item>
            <el-menu-item index="8-8">病历模板维护</el-menu-item>
            <el-menu-item index="8-9">订单套餐维护</el-menu-item>
            <el-menu-item index="8-10">问卷标题维护</el-menu-item>
            <el-menu-item index="8-11">问卷规则维护</el-menu-item>
            <el-menu-item index="8-12">优惠券设置</el-menu-item>
            <el-menu-item index="8-13">回访模板维护</el-menu-item>
            <el-menu-item index="8-14">考勤组管理</el-menu-item>
            <el-menu-item index="8-15">班次管理</el-menu-item>
            <el-menu-item index="8-16">用户登录日志</el-menu-item>
            <el-menu-item index="8-17">用户系统维护</el-menu-item>
            <el-menu-item index="8-18">兑换比例</el-menu-item>
            <el-menu-item index="8-19">排班管理</el-menu-item>
            <el-menu-item index="8-20">诊断维护</el-menu-item>
          </el-submenu>
          <!-- 数据分析 -->
          <el-submenu index="9">
            <template slot="title">
              <i class="iconfont iconshujuchaxun"></i>
              <span slot="title">数据分析</span>
            </template>
            <el-menu-item index="9-1">预约到店查询</el-menu-item>
            <el-submenu index="9-2">
              <template slot="title">资料收集</template>
              <el-menu-item index="9-2-1">问卷推送查询</el-menu-item>
              <el-menu-item index="9-2-1">报告上传查询</el-menu-item>
            </el-submenu>
            <el-menu-item index="9-3">回访执行查询</el-menu-item>
            <el-menu-item index="9-4">财务查询</el-menu-item>
            <el-menu-item index="9-5">药房查询</el-menu-item>
            <el-menu-item index="9-6">库房查询</el-menu-item>
            <el-menu-item index="9-7">日志查询</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 头部 -->
      <div class="header">
      </div>
      <!-- 面包屑 -->
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </el-container>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  methods: {
  }
}
</script>
<style lang="scss" scope>

</style>
