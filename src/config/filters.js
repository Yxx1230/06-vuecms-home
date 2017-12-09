/*
* @Author: Administrator
* @Date:   2017-12-09 14:13:20
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-09 15:24:03
*/
import moment from 'moment';
import Vue from 'vue';



// 过滤器：格式化时间
Vue.filter('fmtdate',(date,fmrStr) =>{
	return moment(date).format(fmrStr);
});