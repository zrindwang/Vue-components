<template>
  <el-menu>
    <!-- 默认循环第一层 -->
    <template v-for="d in data">
      <resub :data="d" :key="d.id"></resub>
    </template>
    <!-- <el-menu-item>根1</el-menu-item>
      <el-submenu>
        <template slot="title">根2</template>
        <el-menu-item >根2-1</el-menu-item>
        <el-menu-item >根2-2</el-menu-item>
        <el-menu-item >根2-3</el-menu-item>
      </el-submenu>
      <el-menu-item >根3</el-menu-item>
    <el-menu-item >根4</el-menu-item>-->
  </el-menu>
</template>


<script>
// import elMenuItem from "./components/el-menu-item";
// import elSubmenu from "./components/el-submenu";
import elMenu from "./components/el-menu";
import resub from "./components/resub";
export default {
  components: {
    // elMenuItem,
    // elSubmenu,
    elMenu,
    resub
  },
  props: {
    data: {
      type: Array,
      default: () => {}
    }
  }
};
</script>

<style>
</style>