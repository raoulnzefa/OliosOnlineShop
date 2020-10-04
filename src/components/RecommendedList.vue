<template>
  <ul class="recommended-list">
    <li
      v-for="product in recommendedProducts(categoryName, productInfo.id)"
      :key="product.id"
      class="recommended-product"
    >
      <div class="recommended-preview-wrapper">
          <img
          :src="require(`../assets/img/${product.img}`)"
          alt="product.name"
          class="recommended-preview"
        >
      </div>
      <div class="recommended-info">
        <router-link
          :to="`/product/${categoryLinkName}/${product.id}`"
          tag="a"
          class="recommended-title"
        >
          {{ product.name }}
        </router-link>
        <p class="recommended-description">{{ product.description }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'RecommendedList',
  computed: {
    ...mapGetters([
      'product',
      'recommendedProducts'
    ]),
    categoryName() {
      return this.$route.params.category.replace(/-/g, ' ');
    },
    productInfo() {
      return this.product(parseInt(this.$route.params.id, 10));
    },
    categoryLinkName() {
      return this.$route.params.category;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../assets/scss/partials/_media-queries';

  .recommended-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 10px 10px 10px 120px;
    background-color: #fff;
    box-shadow: 0px 0px 25px 0px rgba(219, 219, 219, 0.25);

    @media screen and (max-width: 1600px) {
      padding: 10px 10px 10px 60px;
    }

    @include media-xl {
      flex-direction: column;
    }

    @include media-sm {
      padding: 50px 0 10px 0;
      background-color: transparent;
    }

    &::before {
      content: 'RECOMMENDED';
      position: absolute;
      top: 50%;
      left: -30px;
      color: #ddd;
      text-align: center;
      font-size: 30px;
      font-weight: 300;
      transform: translateY(-50%) rotate(-90deg);

      @media screen and (max-width: 1600px) {
        left: -90px;
      }

      @include media-sm {
        top: 10px;
        left: 50%;
        transform: translateY(0) translateX(-50%) rotate(0);
      }
    }

    .recommended-product {
      width: calc(100% / 3 - 30px);
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      background-color: #fff;

      @media screen and (max-width: 1600px) {
        width: calc(100% / 3 - 5px);
      }

      @include media-xl {
        width: 100%;
        flex-direction: row;
        align-items: center;
      }

      @include media-sm {
        flex-direction: column;
        margin: 5px 0;
      }

      .recommended-preview-wrapper {
        min-width: 40%;
        height: 200px;
        display: flex;

        .recommended-preview {
          max-width: 100%;
          max-height: 100%;
          display: block;
          margin: auto;
        }
      }

      .recommended-info {
        margin-top: 20px;
        padding: 0 40px;

        @include media-xl {
          margin-top: 0;
        }

        @include media-xl {
          padding: 0 10px;
        }

        @include media-sm {
          padding: 10px;
        }

        .recommended-title {
          color: #000;
          font-size: 30px;
          font-weight: 300;
          transition: color .1s ease-in-out;

          &:hover {
            color: #0023ff;
          }

          @include media-sm {
            display: block;
            width: 100%;
            text-align: center;
          }
        }

        .recommended-description {
          color: #a8a8a8;
          font-size: 18px;
          font-weight: 300;

          @include media-sm {
            text-align: center;
          }
        }
      }
    }
  }
</style>
