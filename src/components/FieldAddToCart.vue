<template>
  <div class="order-wrapper">
    <p
      class="price"
    >
      ${{ discountedPrice(productInfo.price, productInfo.discountPercent) }}
    </p>
    <p v-if="productInfo.discountPercent !== 0" class="full-price">{{ productInfo.price }}</p>
    <div class="quantity-input-wrapper">
      <label class="label" for="quantity">Quantity</label>
      <input
        @input="validate"
        @blur="notEmpty"
        type="number"
        :value="quantity"
        min="1"
        max="99"
        class="quantity"
        id="quantity"
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AddToCartField',
  data() {
    return {
      quantity: 1
    };
  },
  computed: {
    ...mapGetters([
      'product',
      'productInCart',
      'discountedPrice'
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
    productInfo() {
      return this.product(parseInt(this.$route.params.id, 10));
    },
    categoryLinkName() {
      return this.$route.params.category;
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
  },
  watch: {
    $route(to, from) {
      if(from.path !== to.path) {
        this.quantity = 1;
      }
    }
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/partials/_media-queries';

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

      .label {
        position: absolute;
        top: -40px;
        left: 30px;
        color: #000;
        font-size: 18px;
        font-weight: 300;
        text-transform: uppercase;

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
</style>
