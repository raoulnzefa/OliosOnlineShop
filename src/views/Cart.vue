<template>
  <div class="wrapper">
    <div v-if="!cartEmpty" class="order-info">
      <p class="total">Total Price: <span class="price-value">${{ totalPrice }}</span></p>
      <ul class="order-list">
        <li
          v-for="product in cart"
          :key="product.id"
          class="product"
        >
          <div class="preview">
            <img :src="require(`../assets/img/${product.img}`)" :alt="product.name">
          </div>
          <router-link
            tag="a"
            :to="`/product/${product.categoryLinkName}/${product.id}`"
            class="name"
          >
            {{ product.name }}
          </router-link>
          <p class="price">
            ${{ price(discountedPrice(product.price, product.discountPercent), product.quantity) }}
          </p>
          <p class="quantity">x{{ product.quantity }}</p>
          <button @click="removeFromCart(product.id)" class="btn btn-remove-from-cart">
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d="M10 8.586l-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414-7.071 7.071z"></path>
            </svg>
          </button>
        </li>
      </ul>
      <button class="btn btn-order-now">Order Now</button>
    </div>
    <p v-if="cartEmpty" class="cart-empty">Cart Is Empty</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart',
  computed: {
    ...mapGetters([
      'cart',
      'discountedPrice'
    ]),
    price() {
      return (quantity, price) => quantity * price;
    },
    totalPrice() {
      let totalPrice = 0;

      this.cart.forEach(product => {
        totalPrice += this.price(
          this.discountedPrice(product.price, product.discountPercent), product.quantity
        );
      });

      return totalPrice;
    },
    cartEmpty() {
      return this.cart.length === 0;
    }
  },
  methods: {
    ...mapActions([
      'removeFromCart'
    ])
  }
};
</script>

<style scoped lang="scss">
@import '../assets/scss/partials/_media-queries';

  .wrapper {
    width: 100%;
    height: 100vh;
    padding: 80px 160px 100px 185px;
    background-image: linear-gradient(
      rgba(255, 255, 255, .9),
      rgba(255, 255, 255, .9)),
      url('../assets/img/home-bg.png'
    );
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    overflow: auto;

    @include media-xl {
      padding: 50px 150px;
    }

    @include media-lg {
      padding: 70px 30px 50px 120px;
    }

    @include media-md {
      padding: 100px 20px 50px 20px;
    }

    @include media-sm {
      padding: 80px 10px 30px 10px;
    }

    .order-info {
      .total {
        color: #000;
        font-size: 30px;

        .price-value {
          color: #0023ff;
        }
      }

      .order-list {
        width: 100%;

        .product {
          width: 100%;
          height: 120px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          position: relative;
          margin: 40px 0;
          padding: 20px;
          background-color: #fff;
          box-shadow: 0px 0px 25px 0px rgba(219, 219, 219, 0.5);

          @include media-md {
            margin: 20px 0;
          }

          @include media-xs {
            height: 240px;
          }

          .preview {
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 30px;

            @include media-md {
              margin-right: auto;
            }

            @include media-xs {
              margin: 0 auto;
            }

            img {
              max-width: 100px;
              max-height: 100px;
            }
          }

          .name {
            color: #000;
            font-size: 30px;
            font-weight: 300;
            text-transform: uppercase;

            @include media-md {
              position: absolute;
              top: 20px;
              left: 150px;
              margin-right: 70px;
            }

            @include media-sm {
              font-size: 24px;
            }

            @include media-xs {
              left: 50%;
              margin-right: 0;
              text-align: center;
              transform: translateX(-50%);
            }
          }

          .price {
            margin-left: auto;
            color: #0023ff;
            font-size: 18px;
            font-weight: bold;

            @include media-md {
              position: absolute;
              bottom: 20px;
              left: 200px;
            }

            @include media-xs {
              left: 55%;
            }
          }

          .quantity {
            margin-left: 40px;
            color: #0023ff;
            font-size: 18px;
            font-weight: bold;

            @include media-md {
              position: absolute;
              bottom: 20px;
              left: 150px;
              margin: 0;
            }

            @include media-xs {
              left: auto;
              right: 55%;
            }
          }

          .btn-remove-from-cart {
            min-width: 36px;
            max-width: 36px;
            height: 36px;
            margin-left: 40px;
            background-color: transparent;

            @include media-xs {
              position: absolute;
              top: 20px;
              right: 20px;
            }

            &:hover {
              svg {
                fill: #0023ff;
              }
            }

            svg {
              width: 100%;
              height: 100%;
              fill: #b8b8b8;
              transition: fill .1s ease-in-out;
            }
          }
        }
      }

      .btn-order-now {
        width: 215px;
        height: 55px;
        display: block;
        position: relative;
        margin: 0 auto;
        border-radius: 30px;
        background-color: #0023ff;
        color: #fff;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 900;
        transition: background-color .1s ease-in-out;

        &:hover {
          background-color: #0621d1;
        }
      }
    }

    .cart-empty {
      color: #000;
      font-size: 30px;
      font-weight: bold;
      text-align: center;
    }
  }
</style>
