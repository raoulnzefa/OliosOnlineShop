<template>
  <div @scroll="scroll()" ref="categoriesWrapper" class="wrapper">
    <div class="title-wrapper">
      <p class="title">Products</p>
      <p class="category">{{ categoryName }}</p>
      <img
        :src="require(`../assets/img/${categoryIconName(categoryName)}`)"
        alt="icon"
        class="category-icon"
      >
    </div>
    <transition-group tag="ul" name="fade-in" appear class="product-list">
      <product-card
        v-for="product in visibleProductList"
        :key="product.id"
        :product-info="product"
      ></product-card>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'Products',
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
      'productsList',
      'categoryIconName',
      'categoriesInfo'
    ]),
    visibleProductList() {
      return this.productsList(this.categoryName).products.slice(0, this.visibleProducts);
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
      const haveProducts = this.visibleProducts <= this.productsList(this.categoryName)
        .products.length;
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
  watch: {
    $route(to, from) {
      if(from.path !== to.path) {
        this.$refs.categoriesWrapper.scrollTo(0, 0);
        this.visibleProducts = 5;
      }
    }
  },
  created() {
    const categoryMatch = this.categoriesInfo
      .filter(category => category.name === this.categoryName);

    if(categoryMatch.length === 0) {
      this.$router.push('/404');
    }
  },
  mounted() {
    const { scrollHeight, offsetHeight } = this.$refs.categoriesWrapper;
    const noScroll = scrollHeight === offsetHeight;

    if(noScroll) {
      this.loadProducts();
    }
  }
};
</script>

<style scoped lang="scss">
@import '../assets/scss/partials/_media-queries';

  .wrapper {
    height: 100vh;
    padding: 80px 40px 100px 185px;
    overflow: auto;

    @include media-xl {
      padding: 50px 40px 100px 135px;
    }

    @include media-lg {
      padding: 50px 30px 50px 125px;
    }

    @include media-md {
      padding: 100px 20px 50px 20px;
    }

    @include media-sm {
      padding: 80px 10px 30px 10px;
    }

    .title-wrapper {
      max-width: 1490px;
      display: flex;
      margin: 0 auto 100px auto;
      align-items: center;

      @include media-lg {
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto 50px auto;
      }

      .title {
        text-transform: uppercase;
        font-size: 72px;
        font-weight: 300;

        @include media-lg {
          width: 100%;
          margin-bottom: 20px;
          text-align: center;
        }

        @include media-xs {
          font-size: 50px;
        }
      }

      .category {
        margin: 0 40px 0 auto;
        color: #c1c1c1;
        text-transform: uppercase;
        font-size: 18px;

        @include media-lg {
          margin: 0;
          margin-right: 20px;
        }
      }

      .category-icon {
        margin-right: 130px;

        @include media-lg {
          margin: 0;
        }
      }
    }

    .product-list {
      max-width: 1490px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 420px;
      grid-gap: 40px;
      margin: 0 auto;

      @include media-lg {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
      }

      @include media-sm {
        grid-gap: 10px;
      }

      @include media-xs {
        grid-template-columns: 1fr;
      }
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
