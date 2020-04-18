import Vue from 'vue';
import Vuelazyload from './vue-lazyload';
import loading from './loading.jpg';
import App from './App'

//use 方法是一个全局的 api  会调用vue-lazyload的方法

Vue.use(Vuelazyload,{
    preLoad:1.3,//可见区域的1.3
    loading,
})//use 默认调用就会执行 Vuelazyload的install方法

let vm = new Vue({
    el:'#app',
    render:h=>h(App)
})
