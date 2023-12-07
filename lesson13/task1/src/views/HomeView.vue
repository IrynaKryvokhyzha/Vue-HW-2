<template>
  <div class="home-page">
   <home-page/>

  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue';

export default {
  name: "HomeView",
  components: {
    HomePage,
  },
};
</script>
<style lang="scss" scoped>
.home-page{
	height: 100%;
}
</style>