<template>
	<div id="app">
		<HeadTop></HeadTop>
		<transition name="animate">
			<router-view class="content"></router-view>
		</transition>
		<FootEnd></FootEnd>
	</div>
</template>

<script>
	import HeadTop from './components/HeadTop'
	import FootEnd from './components/Foot'
	export default {
		components: {
			HeadTop,
			FootEnd
		}
	}
</script>

<style>
	.content {
		transition: 0.3s;
	
		width: 100%;
		top: 58px;
		bottom: 58px;
		font-size: 15px;
		position: fixed;
		overflow-y: auto;
	}
	
	.animate-enter {
		transform: translate(100%, 0);
		opacity: 0
	}
	
	.animate-leave-active {
		transform: translate(-100%, 0);
		opacity: 0
	}
	
	body,
	ul,
	p,
	h3 {
		margin: 0px;
		padding: 0px;
	}
	
	li {
		list-style: none
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>