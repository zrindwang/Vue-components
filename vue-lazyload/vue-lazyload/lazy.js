//存放懒加载功能的文件
import {throttle} from 'lodash'
export default (Vue) => {
    class ReactiveListener{
        constructor({el,src,elRenderer,options}){
            this.el = el;
            this.src = src;
            this.elRenderer = elRenderer;
            this.options = options;
            this.state = {loading:false}
        }
        checkInView(){//判断是否渲染
            let {top} = this.el.getBoundingClientRect();
            return top < window.innerHeight * this.options.preLoad
            
        }
        load(){//加载当前的listener
            //开始渲染 徐冉冉前 需要默认渲染loading状态
            this.elRenderer(this,'loading');
            loadImgAsync(this.src,()=>{
                this.state.loading = true;
                this.elRenderer(this,'loaded')
            },
            ()=>{
                this.elRenderer(this,'error')
            })//异步加载图片
        }
    }
    function loadImgAsync(src,resolve,reject) {
        let image = new Image();
        image.src = src;
        image.onload = resolve;
        image.onerror = reject;
    }
    return class LazyClass{
        constructor(options){
            this.options = options; //将用户传入的数据保存到当前实例上
            this.listenerQueue = [];
            this.bindHandler = false;
            //在一段时间内 不停的触发方法
            //防抖 (最终触发一次)节流 (每隔一段时间执行一次)
            this.lazyLoadHandler = throttle(()=>{
                console.log('loading')
                let CatIn = false;
                this.listenerQueue.forEach((listener)=>{
                    if(listener.state.loading) return ;
                    CatIn = listener.checkInView();//判断是否应该渲染
                    console.log(CatIn)
                    CatIn && listener.load();
                })
            },200)
        }
        add(el,bindings,vnode){
            //需要监控父亲的滚动事件,当滚动时候,来检测当前图片是否出现在了 可视区域内
            //addEventListener('scroll') 监控当前图片是否在显示区域的范围
            // 这里获取不到真实的dom  
            Vue.nextTick(()=>{
                function scrollParent() {
                    let parent = el.parentNode;
                    while(parent){
                        if(/scroll/.test(getComputedStyle(parent)['overflow'])){
                            return parent
                        }
                        parent = parent.parentNode;//递归向上查询 直到查找到overflow:scroll属性
                    }
                    return parent
                }
                let parent = scrollParent();
                //判断当前这个图片是否要加载
                let src = bindings.value; //对应v-lazy的值
                let listener = new ReactiveListener({
                    el,//真实dom
                    src,
                    elRenderer:this.elRenderer.bind(this),
                    options:this.options, //默认渲染loading图
                });
                this.listenerQueue.push(listener);
                if(!this.bindHandler){
                    this.bindHandler = true;//绑定一次
                    parent.addEventListener('scroll',this.lazyLoadHandler);
                }
               
                //默认执行一次方法
                this.lazyLoadHandler();
                
            })
        }
        elRenderer(listener,state){
            let {el} = listener;
            let src = ''
            switch (state){
                case 'loading':
                    src = listener.options.loading || ''
                    break;
                case 'error':
                    src = listener.options.error || ''
                    break;
                default:
                    src = listener.src
                    break;
            }
            el.setAttribute('src',src)
        }
    }
}