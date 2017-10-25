<template>
	<div class="foot-nav">
		<router-link :to="{ path: '/recommend'}"><span><img src="../assets/b/images/Screenshot_2017-10-23-18-49-50-618_03.png">游戏推荐</span></router-link>
		<router-link :to="{ path: '/list'}">
		<span><img src="../assets/b/images/Screenshot_2017-10-23-18-49-50-618_03-02.png" v-on:click="abc">排行榜</span>
		</router-link>
		<router-link :to="{ path: '/Find'}">
		<span><img src="../assets/b/images/123.png">发现</span>
		</router-link>
		<router-link :to="{ path: '/pay'}">
		<span><img src="../assets/b/images/Screenshot_2017-10-23-18-49-50-618_11.png">我的游戏</span>
		</router-link>
	</div>

</template>
<script>

</script>
<style>
	
</style>