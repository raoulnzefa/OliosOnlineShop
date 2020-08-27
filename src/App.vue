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
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
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

.btn {
  border: none;
  cursor: pointer;
}
</style>
