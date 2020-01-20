import VueRouter from "vue-router";
import Vue from 'vue';

// 使用VueRouter实例，在每个component下都能拿到这个router实例，使用$router拿到
Vue.use(VueRouter);

// 解决点击一次，响应式导航两次提示的错误，navigation duplicate
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
};

const routes = [];

const router= new VueRouter({
    routes,
    //hash模式可以解决看来,这个地方我相信会有好的做法，保证url好看和读第三方js文件，有空再试一下
    mode: 'history',
});

export default router
