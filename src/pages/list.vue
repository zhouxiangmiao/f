<template>
	<div>
		<ul class='list'>
			<li v-for="(lis,index ) in $store.state.Mdata.a">
				<span class='title1'>{{lis.title}}</span>
				<img :src="lis.logo " />
				<div>
					<span>{{lis.text1}}</span>
					<span>{{lis.text2}}</span>
					<p v-for="item in $store.state.Mdata.a[index].label">{{item}}</p>
				</div>
			</li>

		</ul>
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