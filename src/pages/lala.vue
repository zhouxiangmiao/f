<template>
	<div>
		<div class='ddbox'>
		<div class='top'>
			<img class='img1' :src="$store.state.Mdata.jy[$route.params.index].logo"/>
			<div class='text234'>
			<span class='a1'>{{$store.state.Mdata.jy[$route.params.index].text1}}</span>
			<span class='a2'>{{$store.state.Mdata.jy[$route.params.index].text3}}</span>
			<span class='a3'>{{$store.state.Mdata.jy[$route.params.index].text4}}</span>
			<span class='a4'>编辑推荐</span>
			<img :src="$store.state.Mdata.jy[$route.params.index].logo3"/>
			<a>关注</a>
			</div>
			<div class='text345'>
				<img :src="$store.state.Mdata.jy[$route.params.index].logo4"/>
				<a>下载</a>
			</div>
		</div>
		
	<div class="banner">
<mt-swipe :auto="4000">
  <mt-swipe-item><img src="../assets/b/images/images/Screenshot_2017-10-24-19-41-56-257_03.png"/></mt-swipe-item>
  <mt-swipe-item><img src="../assets/b/images/Screenshot_2017-10-23-18-40-52-890_06.png"/></mt-swipe-item>
  <mt-swipe-item><img src="../assets/b/images/images/Screenshot_2017-10-24-19-41-56-257_03.png"/></mt-swipe-item>
</mt-swipe>
	</div>
	<div class='text4'>
		<div class='title'>
			<img :src="$store.state.Mdata.jy[$route.params.index].logo6"/>
			<a>简介</a>
			</div>
			<span class='text6'>Duang,Duang,Duang!</span>
			<span class='text7'>扮演一只少龙龙，在危机四伏的路途中燃烧一切！向邻近的领主喷火并夺取他们的黄金，累计成龙族前所未有的最大宝藏。</span>
		</div>
	</div>
	</div>
</template>

<script>
</script>

<style>
	
</style>