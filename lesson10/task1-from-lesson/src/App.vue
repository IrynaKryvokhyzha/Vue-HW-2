<template>
<athlete-manager/>
</template>

<script>
import AthleteManager from './components/AthleteManager.vue';


export default {
  name: "App",
  components: {
	AthleteManager,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
