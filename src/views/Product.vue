<template>
  <div class="wrapper">
    <div class="preview">
      <p class="likes">{{ productInfo.likes }}</p>
      <img :src="require(`../assets/img/${productInfo.img}`)" :alt="productInfo.name">
    </div>
    <div class="info-wrapper">
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
        <div class="order-wrapper">
          <p
            class="price"
          >
            ${{ discountedPrice(productInfo.price, productInfo.discountPercent) }}
          </p>
          <p v-if="productInfo.discountPercent !== 0" class="full-price">{{ productInfo.price }}</p>
          <div class="quantity-input-wrapper">
            <input
              @input="validate"
              @blur="notEmpty"
              type="number"
              :value="quantity"
              min="1"
              max="99"
              class="quantity"
            >
          </div>
          <div class="btn-add-to-cart-wrapper">
            <p
              v-show="productInCartQuantity"
              class="in-cart"
            >
              In Cart: {{ productInCartQuantity }}
            </p>
            <button
              @click="addToCart({ ...productInfo, quantity: +quantity, categoryLinkName })"
              class="btn btn-add-to-cart"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
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
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Product',
  data() {
    return {
      quantity: 1
    };
  },
  computed: {
    ...mapGetters([
      'productInCart',
      'product',
      'discountedPrice',
      'recommendedProducts',
      'categoryIconName'
    ]),
    productInCartQuantity() {
      let quantity;

      if(this.productInCart(this.productInfo.id)) {
        quantity = this.productInCart(this.productInfo.id).quantity;
      } else {
        quantity = '';
      }

      return quantity;
    },
    categoryLinkName() {
      return this.$route.params.category;
    },
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
  methods: {
    ...mapActions([
      'addToCart'
    ]),
    validate(e) {
      if(e.target.value.length > 2) {
        e.target.value = e.target.value.slice(0, -1);
      }
    },
    notEmpty(e) {
      if(+e.target.value === 0) {
        e.target.value = 1;
      }

      if(+e.target.value[0] === 0) {
        e.target.value = e.target.value.slice(1);
      }

      this.quantity = e.target.value;
    }
  }
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

        .order-wrapper {
          display: flex;
          align-items: center;
          margin-bottom: 20px;

          @include media-xl {
            flex-wrap: wrap;
          }

          @include media-lg {
            width: 100%;
            flex-wrap: nowrap;
            margin-top: 70px;
          }

          @include media-sm {
            flex-wrap: wrap;
            justify-content: center;
          }

          .price {
            position: relative;
            margin-right: 25px;
            color: #0023ff;
            font-size: 48px;
            font-weight: bold;

            @include media-sm {
              margin-right: 10px;
              font-size: 30px;
            }

            &::before {
              content: 'COST';
              position: absolute;
              top: -40px;
              left: 0;
              color: #000;
              font-size: 18px;
              font-weight: 300;
            }
          }

          .full-price {
            color: #000;
            text-decoration: line-through;
            font-size: 24px;
            font-weight: bold;

            @include media-sm {
              font-size: 20px;
            }
          }

          .quantity-input-wrapper {
            position: relative;
            margin: 0 60px 0 auto;

            @include media-xl {
              margin: 0 0 0 auto;
            }

            @include media-lg {
              margin: 0;
            }

            &::before {
              content: 'QUANTITY';
              position: absolute;
              top: -40px;
              left: 30px;
              color: #000;
              font-size: 18px;
              font-weight: 300;

              @include media-sm {
                top: -30px;
              }
            }

            .quantity {
              width: 85px;
              height: 55px;
              margin-left: 30px;
              border: none;
              border-radius: 30px;
              background-color: #fff;
              color: #000;
              text-align: center;
              font-size: 30px;
              font-weight: bold;
            }
          }

          .btn-add-to-cart-wrapper {
            position: relative;

            @include media-xl {
              width: 100%;
            }

            @include media-lg {
              width: auto;
              margin-left: auto;
            }

            @include media-sm {
              width: 100%;
            }

            .in-cart {
              position: absolute;
              top: -40px;
              left: 0;
              color: #000;
              font-size: 18px;
              font-weight: 300;

              @include media-xl {
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
              }

              @include media-lg {
                top: -30px;
              }

              @include media-sm {
                top: 20px;
              }
            }

            .btn-add-to-cart {
              width: 215px;
              height: 55px;
              border-radius: 30px;
              color: #fff;
              text-transform: uppercase;
              font-size: 18px;
              font-weight: 900;
              background-color: #0023ff;
              transition: background-color .1s ease-in-out;

              @include media-xl {
                display: block;
                margin: 50px auto 0 auto;
              }

              @include media-lg {
                margin: 0;
              }

              @include media-sm {
                margin: 50px auto 0 auto;
              }

              &:hover {
                background-color: #0621d1;
              }
            }
          }
        }
      }

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
              font-size: 30px;
              font-weight: 300;

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
    }
  }
</style>
