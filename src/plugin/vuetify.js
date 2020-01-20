import Vue from 'vue';
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css';
// 引入font-awesome 4.7.0
import 'font-awesome/css/font-awesome.min.css';

Vue.use(Vuetify);
export default new Vuetify({
    theme: {
        // 我要在这个地方设置两个颜色主题，一个白一个黑，用一个椭圆按钮切换就好了
        dark: true,
        light: false,
    },
    icons: {
        iconfont: 'fa4',
    },
})
