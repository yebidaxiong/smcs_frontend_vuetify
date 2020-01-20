import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store/auth";

// 引入axios
import axios from 'axios';
Vue.prototype.$axios = axios;

// 引入vuetify代替elementUI
import Vuetify from "vuetify";
import vuetify from "./plugin/vuetify";
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App),
}).$mount('#app');
