import Vue from 'vue';
import App from './App';
//绑定事件和触发事件在同一个实例上
Vue.prototype.$bus = new Vue();//每一个vue实例都具备$on $emit $off
new Vue({
    el:'#app',
    render:h=>h(App)
});


//ref 操作dom元素  也可以给组件添加ref 可以获取组件的实例


// 如果是兄弟组件间获取数据  找到兄弟的共同父级
//eventBus 事件车  发布订阅模式  在任何组件中订阅,在其他组件中触发事件

//子组件如何监听父组件mounted组件
//组件挂载 是先挂载父组件 -> 渲染子组件 ->子mounted->父mounted

//eventBus 可以任意组件间通信 只适合小规模 通信 (大规模事件不好维护 一呼百应)

//vuex