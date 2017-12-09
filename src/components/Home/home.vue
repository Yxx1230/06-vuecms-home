<template>

    <div class="mui-content">
		<!-- 轮播图 -->	
		<swipe :imgUrl="img_url"></swipe>

		<!-- 9宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		   <li  v-for="item in menus" :key="item.url"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		   	  <router-link :to="item.url">
		         <span class="mui-icon" :class="item.className"></span>
		         <div class="mui-media-body">{{item.title}}</div>
		      </router-link >
		   </li>
		   <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		       <span class="mui-icon icon-share"></span>
		       <div class="mui-media-body">图片分享</div></a></li>
		   <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		       <span class="mui-icon icon-buy"></span>
		       <div class="mui-media-body">商品购买</div></a></li>
		   <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		       <span class="mui-icon icon-feedback"></span>
		       <div class="mui-media-body">留言反馈</div></a></li>
		   <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		       <span class="mui-icon icon-video"></span>
		       <div class="mui-media-body">视频专区</div></a></li>
		   <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		       <span class="mui-icon icon-contact"></span>
		       <div class="mui-media-body">联系我们</div></a></li> -->
		          
		</ul> 
    </div>
</template>
    


<script>
  // 因为mint-ui已经全局引用，所以按需引用 不需要
  	// import Vue from 'vue';
// 引入mint-ui中的组件   按需引用
  	// import { Swipe, SwipeItem } from 'mint-ui';
// 引用mint-ui的样式
  	// import 'mint-ui/lib/style.css';

  	// Vue.component(Swipe.name,Swipe);
  	// Vue.component(SwipeItem.name,SwipeItem);
  
  	// 导入轮播图的组件
  	import swipe from '../Common/swipe.vue';

  export default {
    data() {
      return {
      	menus:[],
      	img_url:'getlunbo'
      };
    },
    created(){   	
    	this.getmenus();
    },
    methods:{
    	
    	// 获取9宫格数据
    	getmenus(){
    		this.$http
    		.get('getmenus')
    		.then((response) =>{
    			if(response.status ===200 && response.data.status ===0){
    			this.menus=response.data.message;	

				}else{
					console.log('服务器内部错误');
				}
    		})
    		.catch((err) =>{
    			console.error(err);
    		})
    	}

    },
    components:{
    	swipe:swipe
    }

  };
</script>

<style scoped>
	

	/* 9宫格的样式 */
   	.icon-news{
   		width: 50px;
   		height: 50px;
   		background-image: url(../../../statics/images/menu1.png);
   		background-repeat: round;
   	}
	.icon-share{
		width: 50px;
   		height: 50px;
   		background-image: url(../../../statics/images/menu2.png);
   		background-repeat: round;
	}
	.icon-buy{
		width: 50px;
   		height: 50px;
   		background-image: url(../../../statics/images/menu3.png);
   		background-repeat: round;
	}

	.icon-feedback{
			width: 50px;
	   		height: 50px;
	   		background-image: url(../../../statics/images/menu4.png);
	   		background-repeat: round;
		}
	
	.icon-video{
			width: 50px;
	   		height: 50px;
	   		background-image: url(../../../statics/images/menu5.png);
	   		background-repeat: round;
		}
	
	.icon-contact{
		width: 50px;
   		height: 50px;
   		background-image: url(../../../statics/images/menu6.png);
   		background-repeat: round;
	}
	.mui-content > .mui-table-view:first-child {
    margin-top: 0;
 	 }
 	 .mui-grid-view.mui-grid-9 {
 	   background-color: #fff;
 	 }
</style>