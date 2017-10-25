<template>
	<div>
		<div class="banner">
<mt-swipe :auto="4000">
  <mt-swipe-item><img src="../assets/b/images/Screenshot_2017-10-23-18-40-52-890_12.png"/></mt-swipe-item>
  <mt-swipe-item><img src="../assets/b/images/Screenshot_2017-10-23-18-40-52-890_12.png"/></mt-swipe-item>
  <mt-swipe-item><img src="../assets/b/images/Screenshot_2017-10-23-18-40-52-890_12.png"/></mt-swipe-item>
</mt-swipe>
	</div>
		<ul class='day'>
  <li v-for="(bb,index) in $store.state.Mdata.b" >
  	<div class='title'>
       <span>{{bb.title}}</span>
       <a>{{bb.title1}}</a>
       </div>
       <div class='games'>
       	<div v-for='item1 in $store.state.Mdata.b[index].label1' class='game11'>
       		<img :src="item1.logo"/>
       		<a>{{item1.text}}</a>
       	</div>
       </div>
       
  </li>
  </ul>
  <div class='img123'>
  <div v-for='bbb in $store.state.Mdata.old1' class='old'>
  	
  	<img :src="bbb.logo"/>
  	</div>
  </div>
  <ul class='day'>
  <li v-for="(bb,index) in $store.state.Mdata.b" >
  	<div class='title'>
       <span>{{bb.title}}</span>
       <a>{{bb.title1}}</a>
       </div>
       <div class='games'>
       	<div v-for='item1 in $store.state.Mdata.b[index].label1' class='game11'>
       		<img :src="item1.logo"/>
       		<a>{{item1.text}}</a>
       	</div>
       </div>
       
  </li>
  </ul>
  <div class='img123'>
  <div v-for='bbb in $store.state.Mdata.old1' class='old'>
  	
  	<img :src="bbb.logo"/>
  	</div>
  </div>
  
   
  
	</div>
</template>
<style>
	
</style>