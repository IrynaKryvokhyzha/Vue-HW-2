<template>
  <div class="home">
  
    <hello-page  />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloPage from "@/components/HelloPage.vue";

export default {
  name: "HomeView",
  components: {
	HelloPage,
  },
};
</script>
