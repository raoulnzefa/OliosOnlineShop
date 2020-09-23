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
          <img
            :src="require(`../assets/img/${product.img}`)"
            alt="product.name"
            class="recommended-preview"
          >
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
  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    padding-left: 145px;

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

        &::after {
          content: '';
          width: 32px;
          height: 30px;
          position: absolute;
          top: 30px;
          right: 70px;
          background: url('../assets/img/product/heart.png');
        }
      }

      img {
        width: 80%;
        max-height: 80%;
        margin: auto 0;
      }
    }

    .info-wrapper {
      width: 60%;
      display: flex;
      flex-direction: column;

      .category-info {
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 80px 370px 0 125px;

        .label {
          text-transform: uppercase;
          font-size: 48px;
          font-weight: 300;
        }

        .category {
          height: 90%;
          position: relative;
          padding-right: 130px;
          line-height: 80px;
          color: #c1c1c1;
          text-transform: uppercase;
          font-size: 18px;

          .icon {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
          }
        }
      }

      .product-info {
        margin: auto 370px auto 125px;

        .title {
          margin-bottom: 40px;
          color: #0023ff;
          text-transform: uppercase;
          font-size: 72px;
        }

        .description {
          margin-bottom: 120px;
          line-height: 2;
          color: #a8a8a8;
          font-size: 24px;
          font-weight: 300;
        }

        .order-wrapper {
          display: flex;
          align-items: center;

          .price {
            position: relative;
            margin-right: 25px;
            color: #0023ff;
            font-size: 48px;
            font-weight: bold;

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
          }

          .quantity-input-wrapper {
            position: relative;
            margin: 0 60px 0 auto;

            &::before {
              content: 'QUANTITY';
              position: absolute;
              top: -40px;
              left: 0;
              color: #000;
              font-size: 18px;
              font-weight: 300;
            }

            .quantity {
              width: 85px;
              height: 55px;
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

            .in-cart {
              position: absolute;
              top: -40px;
              left: 0;
              color: #000;
              font-size: 18px;
              font-weight: 300;
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

              &:hover {
                background-color: #0621d1;
              }
            }
          }
        }
      }

      .recommended-list {
        width: 100%;
        height: 390px;
        display: flex;
        justify-content: space-between;
        position: relative;
        padding-left: 120px;
        background-color: #fff;
        box-shadow: 0px 0px 25px 0px rgba(219, 219, 219, 0.25);

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
        }

        .recommended-product {
          width: calc(100% / 3 - 30px);
          display: flex;
          flex-direction: column;
          padding-top: 20px;

          .recommended-preview {
            max-width: 100%;
            max-height: calc(100% - 150px);
            display: block;
            margin: auto;
          }

          .recommended-info {
            height: 130px;
            margin-top: 20px;
            // padding: 0 80px;
            padding: 0 40px;

            .recommended-title {
              font-size: 30px;
              font-weight: 300;
            }

            .recommended-description {
              color: #a8a8a8;
              font-size: 18px;
              font-weight: 300;
            }
          }
        }
      }
    }
  }
</style>
