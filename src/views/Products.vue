<template>
  <div @scroll="scroll()" ref="categoriesWrapper" class="wrapper">
    <div class="title-wrapper">
      <p class="title">Products</p>
      <p class="category">{{ categoryName }}</p>
      <img :src="require(`../assets/img/${categoryIconName(categoryName)}`)" alt="icon">
    </div>
    <transition-group tag="ul" name="fade-in" appear class="product-list">
      <product-card
        v-for="(product, index) in visibleProductList"
        :key="index - 1"
        :product-info="product"
      ></product-card>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'Categories',
  components: {
    ProductCard
  },
  data() {
    return {
      visibleProducts: 5,
      loadNewProducts: 5,
      scrollTimeout: false
    };
  },
  computed: {
    ...mapGetters([
      'products',
      'categoryIconName',
    ]),
    visibleProductList() {
      return this.products(this.categoryName).products.slice(0, this.visibleProducts);
    },
    categoryName() {
      return this.$route.params.category.replace(/-/g, ' ');
    },
    getIconName() {
      return this.$route.params.category;
    }
  },
  methods: {
    addProducts() {
      this.visibleProducts += this.loadNewProducts;
    },
    loadProducts() {
      const { scrollHeight, scrollTop } = this.$refs.categoriesWrapper;
      const { clientHeight } = document.documentElement;
      const scrollIsBottom = scrollHeight - scrollTop - 10 <= clientHeight;
      const haveProducts = this.visibleProducts <= this.products(this.categoryName).products.length;
      const loadProductsCondition = scrollIsBottom && haveProducts;

      if(loadProductsCondition) {
        this.addProducts();
      }
    },
    scroll() {
      if(!this.scrollTimeout) {
        this.scrollTimeout = true;
        setTimeout(() => {
          this.loadProducts();
          this.scrollTimeout = false;
        }, 100);
      }
    }
  },
  mounted() {
    const { scrollHeight, offsetHeight } = this.$refs.categoriesWrapper;
    const noScroll = scrollHeight === offsetHeight;
    if(noScroll) {
      this.loadProducts();
    }
  },
};
</script>

<style scoped lang="scss">
  .wrapper {
    height: 100vh;
    padding: 80px 40px 100px 185px;
    overflow: auto;

    .title-wrapper {
      max-width: 1490px;
      display: flex;
      margin: 0 auto 100px auto;
      align-items: center;

      .title {
        text-transform: uppercase;
        font-size: 72px;
        font-weight: 300;
      }

      .category {
        margin: 0 40px 0 auto;
        color: #c1c1c1;
        text-transform: uppercase;
        font-size: 18px;
      }
    }

    .product-list {
      max-width: 1490px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 420px;
      grid-gap: 40px;
      margin: 0 auto;
    }

    .btn-show-more-products {
      display: block;
      margin: 130px auto 0 auto;
      color: #0023ff;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: bold;
    }
  }

  .fade-in-enter {
    opacity: 0;
    transform: translateY(-30px);
  }

  .fade-in-enter-active {
    transition: opacity .5s ease-in-out, transform .5s ease-in-out;
  }

  .fade-in-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
</style>
