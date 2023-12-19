<template>
<div class="app-container">
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/friends">Friends</router-link> |
		<router-link :to="{name: 'gifts'}">Gifts</router-link> |
		<router-link :to="{name: 'gifts-purpose'}">Gifts Purpose</router-link>
	 </nav>
	 <router-view />
</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
.app-container{
	padding: 10px 20px;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
