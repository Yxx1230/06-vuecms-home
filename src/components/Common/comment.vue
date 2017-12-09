<template>
	<div class="comment">
        	<!-- 添加评论 -->
       		 <h4>提交评论</h4>
			<div class="submitcomment">
       		     <textarea  v-model="content"  placeholder="请输入评论内容"></textarea>
       		     <button @click="send" class="mui-btn mui-btn-primary">发表</button>
       		 </div>
				
			<div class="title">
       		     <h4>评论列表</h4>
       		 </div>  
			<!-- 评论列表 -->

			<div v-for="(item,index) in comments " :key="index" class="item">
				<div class="content">
					{{item.content}}
				</div>
				<div>
					<span class="user">{{item.user_name}}</span>
					<span>{{item.add_time | fmtdate('YYYY-MM-DD HH:mm:ss')}}</span>
				</div>
			</div>
			      		     
       		 
			 <div class="more">
           		 <button @click="loadmore" class="mui-btn mui-btn-primary mui-btn-outlined">加载更多</button>
        	</div>

        
		</div>
</template>

<script>
	export default{
		data(){
			return{
				news:[],
				comments:[],
				content:'',// 文本框绑定的属性
				pageindex:1
			}
		},
		props:['id'],
		created(){
			this.getcomments();
		},
		methods:{
					
			// 根据id获取新闻对应的评论
			getcomments(){
				let url = 'getcomments/'+ this.id +'?pageindex='+this.pageindex;
				this.$http.get(url)
				.then((response) =>{
					if(response.status===200 &&response.data.status===0){
						//concat 连接两个数组，并返回一个新的数组
						this.comments=this.comments.concat(response.data.message);
					}else{
						console.log('服务器内部发生错误');
					}
				})
				.catch((err)=>{
					console.error(err);
				})

			},

			send(){
				if(this.content.length ===0){
					// Toast('请输入内容');
					this.$toast('请输入内容11');
					return;
				}


				let url='postcomment/' +this.id;
				this.$http
				.post(url,'content=' +this.content)
				.then((response)=>{

				  if(response.status===200 &&response.data.status===0){

				  	this.comments.unshift({
				  		user_name:'匿名用户',
				  		add_time:new Date(),
				  		content:this.content
				  	})
				  		// 清空文本框
				  	this.content='';

					}else{
						// 评论失败
					}
					this.$toast(response.data.message);

				})

				.catch((err)=>{
					console.error(err);
				})

			},

			loadmore(){
				this.pageindex++;
				this.getcomments();
			}

		}

	}
</script>

<style scoped>
	/*  评论的样式 */
    .submitcomment {
        text-align: center;
    }
    
    .submitcomment textarea {
        margin-top: 10px;
        padding: 0;
        width: 96%;
        height: 60px;
    }
    
    .submitcomment button {
        width: 96%;
    }
    
    .comment .title {
        border-top: 1px solid rgba(92, 92, 92, 0.4);
        border-bottom: 1px solid rgba(92, 92, 92, 0.4);
        margin: 20px 0 0 0;
        vertical-align: middle;
        padding: 10px 0;
    }
    
    .item {
        padding: 15px 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.4);
    }
    
    .item div {
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
    }
    
    .item span {
        font-size: 15px;
    }
    
    .item .user {
        color: skyblue;
    }
    
    .more {
        margin: 10px 0;
        text-align: center;
    }
    
    .more>button {
        width: 96%;
    }

</style>