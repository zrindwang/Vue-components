export let _Vue;
import Lazy from './lazy'
export default {
    //install 方法有两个参数 Vue的构造函数
    // 希望我们写 vue插件的时候 不去依赖vue
    install(Vue,options){
        // _Vue = Vue;// 为了保证和当前用户使用的Vue构造函数是同一个
        // vue-lazyload 主要就是提供给一个指令
        // 1)可能注册一些全局组件  2)给vue的原型扩展属性 3)可以赋予一些全局指令和过滤器
        const LazyClass = Lazy(Vue);
        const lazy = new LazyClass(options);
        Vue.directive('lazy',{
            //保证当前add方法执行的时候,this永远指向lazy实例
            bind:lazy.add.bind(lazy),

        })
    }
}