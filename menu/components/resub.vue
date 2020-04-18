<template >
  <el-submenu :key="data.id" v-if="data.children">
    <template slot="title">{{data.title}}</template>
    <template v-for="d in data.children">
        <resub :data='d' :key='d.id'></resub>
    </template>
  </el-submenu>
  <el-menu-item :key="data.id" v-else>{{data.title}}</el-menu-item>
</template>

<script>
import elMenuItem from './el-menu-item';
import elSubmenu from './el-submenu';
// import elMenu from './components/el-menu';
export default {
    name:'resub', //根据自己当前的组件名 循环自己
    components:{
        elSubmenu,
        elMenuItem,
        // elMenu
    },
    props:{
        data:{

        }
    }
}
</script>