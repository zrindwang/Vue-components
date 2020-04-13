
<template>
  <div>
      <my-dialog ref='dialog'>
          <!-- v-slot 只能写在template里面 -->
          <!-- 插槽默认使用父组件的数据 -->
          <!-- 作用域插槽  我们希望用当前组件的数据 只能采用作用域插槽将数据传出来-->
        <template v-slot:footer="{a,b,isShow}">{{a}} {{b}} {{isShow}} </template>


        <!-- <div slot="header">{{msg}}</div> -->
        <!-- <div slot="footer slot-scope="{a}"">footer</div> -->
      </my-dialog>
      <button @click="change">点击</button>
  </div>
</template>


<script>
import myDialog from './components/my-dialog'
export default {
    components:{
        myDialog
    },
    mounted(){
        this.$bus.$emit('监听事件','hello')
    },
    data(){
        return {msg:'hello'}
    },
    methods:{
        change(){
            //可以获取当前dialog组件中的任何属性
            //不要通过这种方式改变数据的属性
            //ref的用法 在普通元素可以获取dom元素
            //v-for 里面  获取的是一组dom /组件实例 
            //组件上了 当前组件的实例
            console.log(this.$refs)
        },

    }
}
</script>

<style>

</style>