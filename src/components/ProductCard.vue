<template>
  <li class="product-card">
    <img
      :src="require(`../assets/img/${productInfo.img}`)"
      :alt="productInfo.name"
      class="preview"
    >
    <div class="info">
      <router-link
        :to="`/product/${categoryName}/${productInfo.id}`"
        tag="a"
        class="title"
      >
        {{ productInfo.name }}
      </router-link>
      <p class="description">{{ productInfo.caption }}</p>
      <p class="price">${{ discountedPrice(productInfo.price, productInfo.discountPercent) }}</p>
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProductCard',
  props: [
    'productInfo'
  ],
  computed: {
    ...mapGetters([
      'discountedPrice'
    ]),
    categoryName() {
      return this.$route.params.category;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../assets/scss/partials/_media-queries';

  .product-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    background: #fff;

    &:nth-child(10n + 2) {
      grid-column-start: 2;
      grid-column-end: 5;
      flex-direction: row;
      align-items: center;

      @include media-lg {
        grid-column-start: unset;
        grid-column-end: unset;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }

      .preview {
        max-width: 60%;
        max-height: 90%;
        margin: 0 auto 20px auto;

        @include media-lg {
          max-width: 100%;
          max-height: calc(100% - 160px);
          margin: auto;
        }
      }

      .info {
        margin-left: 40px;

        @include media-lg {
          margin-left: 0;
        }
      }
    }

    &:nth-child(5n + 4) {
      grid-column-start: 2;
      grid-column-end: 4;
      flex-direction: row;
      align-items: center;

      @include media-lg {
        grid-column-start: unset;
        grid-column-end: unset;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }

      .preview {
        max-width: 50%;
        max-height: 100%;
        margin: 0 auto 20px auto;

        @include media-lg {
          max-width: 100%;
          max-height: calc(100% - 160px);
          margin: auto;
        }
      }

      .info {
        margin-left: 40px;

        @include media-lg {
          margin-left: 0;
        }
      }
    }

    &:nth-child(10n + 6) {
      grid-column-start: 1;
      grid-column-end: 4;
      flex-direction: row-reverse;
      align-items: center;

      @include media-lg {
        grid-column-start: unset;
        grid-column-end: unset;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }

      .preview {
        max-width: 60%;
        max-height: 90%;
        margin: 0 auto 20px auto;

        @include media-lg {
          max-width: 100%;
          max-height: calc(100% - 160px);
          margin: auto;
        }
      }

      .info {
        margin-right: 40px;

        @include media-lg {
          margin-right: 0;
        }
      }
    }

    .preview {
      max-width: 100%;
      max-height: calc(100% - 160px);
      display: block;
      margin: auto;
    }

    .info {
      .title {
        margin-top: auto;
        color: #000;
        text-transform: uppercase;
        font-size: 30px;
        font-weight: 300;
        transition: color .1s ease-in-out;

        &:hover {
          color: #0023ff;
        }
      }

      .description {
        margin-bottom: 15px;
        color: #a8a8a8;
        font-size: 18px;
        font-weight: 300;
      }

      .price {
        color: #0023ff;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
</style>
