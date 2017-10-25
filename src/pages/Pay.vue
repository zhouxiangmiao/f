<template>
	<div>
		<div class='gamess'>
		<div class='games'>我玩过的游戏</div>
		<ul class='list'>
			<li v-for="(lis,index ) in $store.state.Mdata.a">
				
				<img :src="lis.logo " />
				<div>
					<span>{{lis.text1}}</span>
					<span>{{lis.text2}}</span>
					<p v-for="item in $store.state.Mdata.a[index].label">{{item}}</p>
				</div>
			</li>

		</ul>
	</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>
<style>
	
</style>
