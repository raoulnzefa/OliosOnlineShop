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
  },
  methods: {
    ...mapActions([
      'showCategoriesNav',
      'hideCategoriesNav',
      'loadData'
    ]),
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

body {
  min-width: 320px;
  background-color: #f0f0f0;
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
