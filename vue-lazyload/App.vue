<template>
    <div class="box">
        <li v-for="(img,index) in imgs" :key='index'>
            <img v-lazy='img'>
        </li>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    data(){
        return {imgs:[]}
    },
    created(){
        setTimeout(() => {
            this.imgs = [
            'http://img4.imgtn.bdimg.com/it/u=1713396441,1487163637&fm=26&gp=0.jpg',
            'http://img1.imgtn.bdimg.com/it/u=4012470373,3540768040&fm=26&gp=0.jpg',
            'http://img5.imgtn.bdimg.com/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
            'http://img1.imgtn.bdimg.com/it/u=4018557288,1217151095&fm=26&gp=0.jpg',
            'http://img4.imgtn.bdimg.com/it/u=1694681277,1453280371&fm=26&gp=0.jpg',
            'http://img5.imgtn.bdimg.com/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
            'http://img5.imgtn.bdimg.com/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
            'http://img4.imgtn.bdimg.com/it/u=1713396441,1487163637&fm=26&gp=0.jpg',
            'http://img1.imgtn.bdimg.com/it/u=4012470373,3540768040&fm=26&gp=0.jpg',
            'http://img5.imgtn.bdimg.com/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
            'http://img1.imgtn.bdimg.com/it/u=4018557288,1217151095&fm=26&gp=0.jpg',
            'http://img4.imgtn.bdimg.com/it/u=1694681277,1453280371&fm=26&gp=0.jpg',
             'http://img5.imgtn.bdimg.com/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
            'http://img5.imgtn.bdimg.com/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
            'http://img4.imgtn.bdimg.com/it/u=1713396441,1487163637&fm=26&gp=0.jpg',
            'http://img1.imgtn.bdimg.com/it/u=4012470373,3540768040&fm=26&gp=0.jpg',
            'http://img5.imgtn.bdimg.com/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
            'http://img1.imgtn.bdimg.com/it/u=4018557288,1217151095&fm=26&gp=0.jpg',
            'http://img4.imgtn.bdimg.com/it/u=1694681277,1453280371&fm=26&gp=0.jpg',
            'http://img5.imgtn.bdimg.com/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
            'http://img5.imgtn.bdimg.com/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
            'http://img4.imgtn.bdimg.com/it/u=1713396441,1487163637&fm=26&gp=0.jpg',
            'http://img1.imgtn.bdimg.com/it/u=4012470373,3540768040&fm=26&gp=0.jpg',
            'http://img5.imgtn.bdimg.com/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
            'http://img1.imgtn.bdimg.com/it/u=4018557288,1217151095&fm=26&gp=0.jpg',
            'http://img4.imgtn.bdimg.com/it/u=1694681277,1453280371&fm=26&gp=0.jpg',
             'http://img5.imgtn.bdimg.com/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
            'http://img5.imgtn.bdimg.com/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
        ]
        }, 0);
    }
}
// setInterval(() => {
//     this.imgs.push('http://img5.imgtn.bdimg.com/it/u=3437217665,1564280326&fm=26&gp=0.jpg')
// }, 1000);
</script>

<style>
.box{
    height: 300px;
    overflow: scroll;
    width: 200px;
}
img{
    width: 100px;
    height: 100px;
}
</style>
