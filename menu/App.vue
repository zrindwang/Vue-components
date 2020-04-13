<template>
  <div>
    <el-menu>
      <el-menu-item>根1</el-menu-item>
      <el-submenu>
        <template slot="title">根2</template>
        <el-menu-item >根2-1</el-menu-item>
        <el-menu-item >根2-2</el-menu-item>
        <el-menu-item >根2-3</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>