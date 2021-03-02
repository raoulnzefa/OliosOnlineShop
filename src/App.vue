<template>
  <div
    id="app"
    v-touch:swipe.left="showCategoriesNav"
    v-touch:swipe.right="hideCategoriesNav"
  >
    <router-view></router-view>
    <navigation></navigation>
    <navigation-categories></navigation-categories>
  </div>
</template>

<script>
import 'focus-visible';

import { mapActions } from 'vuex';

import Navigation from '@/components/Navigation.vue';
import NavigationCategories from '@/components/NavigationCategories.vue';

export default {
  components: {
    Navigation,
    NavigationCategories
  },
  created() {
    this.loadData();
    this.calcVh();

    window.addEventListener('resize', () => {
      this.calcVh();
    });
  },
  methods: {
    ...mapActions([
      'showCategoriesNav',
      'hideCategoriesNav',
      'loadData'
    ]),
    calcVh() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }
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

.js-focus-visible :focus:not(.focus-visible) {
  outline: none;
}

.js-focus-visible .focus-visible {
  outline: none;
  box-shadow: 0 0 2px 1px #454545;
}

body {
  min-width: 320px;
  background-color: #f0f0f0;
  overflow: hidden;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f3f3;
}

::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: #c1c1c1;
}

.btn {
  border: none;
  cursor: pointer;
}
</style>
