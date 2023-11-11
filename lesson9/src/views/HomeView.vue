<template>
	<div class="home">
	 <h2>Це магазин належить програмісту на фрілансі</h2>
	 <ul>
		 Тому:
		 <li>магазин працює коли хоче</li>
		 <li>товари надсилає швидко</li>
		 <li>на запитання відповідає коли висипається</li>
	 </ul>
	</div>
 </template>
 
 <script>
 // @ is an alias to /src
 
 
 export default {
	name: "HomeView",
	components: {
	  
	},
 };
 </script>
 <style lang="scss">
 .home{
	 display: flex;
	 flex-direction: column;
	 font-size: 24px;
 }
 ul{
 display: flex;
 flex-direction: column;
 text-align: start;
 }
 </style>