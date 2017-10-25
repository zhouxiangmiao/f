<template>
  <div>
  	<ul class='black'>
  		<router-link v-for="(aa,index) in $store.state.Mdata.jy" :to="'/lala/'+index">
  <li class="game1">
        <div class='b1'>
    	<img :src="aa.logo">
    	
    	<span>{{aa.title}}</span>
    	</div>
    	<p>龙之轰炸</p>
    <div class='bigimg'>
  <img :src="aa.logo2"/>
  </div>
  <div class='text1'>
  	<span>{{aa.text}}</span>
  </div>
  </li>
  </router-link>
  
   
  </ul>
  </div>
</template>
<script>
export  default{
  data(){
    return{
     
    }
  }
}
</script>
<style>
	
</style>