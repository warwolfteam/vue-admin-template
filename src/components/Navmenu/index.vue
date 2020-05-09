<template>
<div>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-navmenu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/ControlCenter/index">管理中心</router-link></el-menu-item>
    <el-menu-item index="3">数据中心</el-menu-item>
    <el-menu-item index="4">用户工单</el-menu-item>
    <el-menu-item index="5">帮助中心</el-menu-item>
    <el-menu-item index="6">系统设置</el-menu-item>
  </el-menu>
  </div>
</template>

<script>
import pathToRegexp from "path-to-regexp";

export default {
  data() {
    return {
      activeIndex: "1"
    };
  }
}
</script>

<style lang="scss" scoped>
.el-menu-navmenu{
    .el-menu-item{
        height: 100%;
    }
}
</style>
