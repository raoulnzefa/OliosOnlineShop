<template>
  <div id="app">
    <router-view></router-view>
    <navigation></navigation>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f0f0f0;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}
</style>
