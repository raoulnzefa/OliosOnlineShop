<template>
  <div class="wrapper">
    <div class="preview">
      <p class="likes">{{ productInfo.likes }}</p>
      <img :src="require(`../assets/img/${productInfo.img}`)" :alt="productInfo.name">
    </div>
    <div class="info-wrapper" ref="infoWrapper">
      <div class="category-info">
        <p class="label">Products</p>
        <p class="category">
          {{ categoryName }}
          <img :src="require(`../assets/img/${categoryIcon}`)" alt="Icon" class="icon">
        </p>
      </div>
      <div class="product-info">
        <p class="title">{{ productInfo.name }}</p>
          <div class="preview-small">
            <p class="likes">{{ productInfo.likes }}</p>
            <img :src="require(`../assets/img/${productInfo.img}`)" :alt="productInfo.name">
          </div>
        <p class="description">{{ productInfo.description }}</p>
        <field-add-to-cart></field-add-to-cart>
      </div>
      <recommended-list></recommended-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RecommendedList from '@/components/RecommendedList.vue';
import FieldAddToCart from '@/components/FieldAddToCart.vue';

export default {
  name: 'Product',
  components: {
    RecommendedList,
    FieldAddToCart
  },
  computed: {
    ...mapGetters([
      'product',
      'categoryIconName',
      'categoriesInfo',
      'productMatch'
    ]),
    categoryName() {
      return this.$route.params.category.replace(/-/g, ' ');
    },
    categoryIcon() {
      return this.categoryIconName(this.categoryName);
    },
    productInfo() {
      return this.product(parseInt(this.$route.params.id, 10));
    }
  },
  watch: {
    $route(to, from) {
      if(from.path !== to.path) {
        this.$refs.infoWrapper.scrollTo(0, 0);
      }
    }
  },
  created() {
    const categoryMatch = this.categoriesInfo
      .filter(category => category.name === this.categoryName);

    const productMatch = this.productMatch(this.$route.params.id);

    if(categoryMatch.length === 0 || !productMatch) {
      this.$router.push('/404');
    }
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/partials/_media-queries';

  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    padding-left: 145px;
    overflow: hidden;

    @include media-xl {
      padding-left: 90px;
    }

    @include media-md {
      padding-left: 0;
    }

    @include media-lg {
      flex-direction: column;
    }

    .preview {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 80px 0;
      box-shadow: 0px 0px 25px 0px rgba(219, 219, 219, 0.45);
      background-color: #fff;
      overflow: hidden;
      z-index: 2;

      @include media-lg {
        display: none;
      }

      .likes {
        width: 100%;
        height: 90px;
        display: block;
        position: relative;
        padding-right: 120px;
        line-height: 90px;
        text-align: right;
        font-size: 28px;
        font-weight: 300;

        @include media-lg {
          height: 40px;
          line-height: 40px;
        }

        &::after {
          content: '';
          width: 32px;
          height: 30px;
          position: absolute;
          top: 30px;
          right: 70px;
          background: url('../assets/img/product/heart.png');

          @include media-lg {
            top: 7px;
          }
        }
      }

      img {
        max-width: 80%;
        max-height: 80%;
        margin: auto 0;

        @include media-lg {
          width: auto;
        }
      }
    }

    .info-wrapper {
      width: 60%;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;

      @include media-lg {
        width: 100%;
      }

      .category-info {
        height: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 80px 170px 0 125px;

        @media screen and (max-width: 1600px) {
          height: auto;
          flex-wrap: wrap;
          margin: 80px 170px 0 40px;
        }

        @include media-lg {
          margin: 50px 170px 0 40px;
        }

        @include media-md {
          margin: 100px 20px 0 20px;
        }

        @include media-sm {
          margin: 100px 10px 0 10px;
        }

        .label {
          text-transform: uppercase;
          font-size: 48px;
          font-weight: 300;

          @media screen and (max-width: 1600px) {
            width: 100%;
          }

          @include media-sm {
            text-align: center;
          }
        }

        .category {
          height: 90%;
          position: relative;
          padding-right: 130px;
          line-height: 80px;
          color: #c1c1c1;
          text-transform: uppercase;
          font-size: 18px;

          @include media-md {
            margin-right: 0;
          }

          @include media-sm {
            margin: 0 auto;
            padding-right: 70px;
          }

          .icon {
            position: absolute;
            top: 50%;
            right: 40px;
            transform: translateY(-50%);

            @media screen and (max-width: 1600px) {
              top: 32%;
            }

            @include media-sm {
              right: 0;
            }
          }
        }
      }

      .product-info {
        margin: auto 170px auto 125px;

        @media screen and (max-width: 1600px) {
          margin: auto 40px;
        }

        @include media-lg {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        @include media-md {
          margin: auto 20px;
        }

        @include media-sm {
          margin: auto 10px;
        }

        .title {
          margin-bottom: 40px;
          color: #0023ff;
          text-transform: uppercase;
          font-size: 72px;

          @include media-lg {
            width: 100%;
            text-align: center;
          }

          @include media-sm {
            font-size: 50px;
          }
        }

        .preview-small {
          width: 50%;
          height: 350px;
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px 0;
          box-shadow: 0px 0px 25px 0px rgba(219, 219, 219, 0.45);
          background-color: #fff;
          overflow: hidden;

          @include media-lg {
            display: flex;
          }

          @include media-sm {
            width: 100%;
          }

          .likes {
            width: 100%;
            height: 40px;
            display: block;
            position: relative;
            padding-right: 70px;
            line-height: 40px;
            text-align: right;
            font-size: 28px;
            font-weight: 300;

            &::after {
              content: '';
              width: 32px;
              height: 30px;
              position: absolute;
              top: 5px;
              right: 20px;
              background: url('../assets/img/product/heart.png');
            }
          }

          img {
            max-width: 90%;
            max-height: 80%;
            margin: auto 0;
          }
        }

        .description {
          margin-bottom: 120px;
          line-height: 2;
          color: #a8a8a8;
          font-size: 24px;
          font-weight: 300;

          @include media-lg {
            width: calc(50% - 20px);
            margin: 0;
            margin-left: 20px;
          }

          @include media-sm {
            width: 100%;
            margin-left: 0;
            text-align: center;
          }
        }
      }
    }
  }
</style>
