/*
* @Author: Administrator
* @Date:   2017-12-09 14:13:43
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-09 15:07:51
*/
import Vue from 'vue';

// 引用axios

import axios from 'axios';

axios.defaults.baseURL='http://127.0.0.1:8899/api';

// 让所有的vue的实例都共享axios
Vue.prototype.$http=axios;

// 全局引用mint-ui
// 
import Mint from 'mint-ui';

Vue.use(Mint);

//引用样式
import 'mint-ui/lib/style.css';

// 引用mui的css
import '../../statics/css/mui.css';