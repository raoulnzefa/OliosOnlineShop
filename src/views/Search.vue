<template>
  <div class="wrapper">
    <div class="search-wrapper">
      <input
        @blur="search"
        @keyup.enter="search"
        :value="searchInput"
        type="text"
        id="search-input"
        class="search-input"
        maxlength="100"
        autocomplete="off"
      >
      <button @click="clear" class="btn btn-clear">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d="M10 8.586l-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414-7.071 7.071z"></path>
        </svg>
      </button>
      <label class="search-label" for="search-input">Type product that you are looking for</label>
    </div>
    <p v-if="isInput" class="result-counter">{{ resultCounter }}</p>
    <ul class="products">
      <li
        v-for="product in searchResult"
        :key="product.id"
        class="product"
      >
        <div class="preview">
          <img :src="require(`../assets/img/${product.img}`)" alt="product.name">
        </div>
        <router-link
          tag="a"
          :to="`/product/${product.category.replace(/\s/g, '-')}/${product.id}`"
          class="name"
        >
          {{ product.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      searchInput: '',
      searchResult: [],
      isInput: false
    };
  },
  computed: {
    ...mapGetters([
      'searchProducts'
    ]),
    resultCounter() {
      let res = null;
      const { length } = this.searchResult;

      switch(length) {
        case 0:
          res = 'No Results';
          break;
        case 1:
          res = `${this.searchResult.length} Searched Result`;
          break;
        default:
          res = `${this.searchResult.length} Searched Results`;
      }

      return res;
    }
  },
  methods: {
    search(e) {
      this.isInput = true;
      e.preventDefault();

      if(e.target.value === '') {
        this.searchInput = '';
        this.searchResult = [];
      } else {
        this.searchInput = e.target.value;
        this.searchResult = this.searchProducts(this.searchInput);
      }
    },
    clear() {
      this.searchInput = '';
      this.searchResult = [];
    }
  },
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
      padding: 50px 30px 50px 120px;
    }

    @include media-md {
      padding: 100px 20px 50px 20px;
    }

    @include media-sm {
      padding: 80px 10px 30px 10px;
    }

    .search-wrapper {
      position: relative;
      margin-bottom: 30px;

      @include media-lg {
        margin-right: 90px;
      }

      @include media-md {
        margin-right: 0;
      }

      .search-input {
        width: 100%;
        height: 100px;
        margin-bottom: 30px;
        padding: 0 10px;
        padding-right: 50px;
        border: none;
        border-bottom: 2px solid #e3e3e3;
        background-color: transparent;
        color: #000;
        font-size: 100px;
        font-weight: 300;
      }

      .btn-clear {
        width: 36px;
        height: 36px;
        position: absolute;
        top: 32px;
        right: 0;
        background-color: transparent;

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

      .search-label {
        color: #c9c9c9;
        font-size: 36px;
        font-weight: 300;

        @include media-md {
          display: block;
          text-align: center;
        }
      }
    }

    .result-counter {
      color: #000;
      font-size: 30px;
      font-weight: bold;

      @include media-md {
        text-align: center;
      }
    }

    .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .product {
        width: calc(100% / 2 - 20px);
        height: 120px;
        display: flex;
        align-items: center;
        margin: 20px 0;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0px 0px 25px 0px rgba(219, 219, 219, 0.5);

        @include media-lg {
          width: 100%;
        }

        @include media-md {
          margin: 10px 0;
        }

        @include media-sm {
          height: auto;
          flex-direction: column;
        }

        .preview {
          width: 100px;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 30px;

          @include media-sm {
            margin-right: 0;
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

          @include media-sm {
            text-align: center;
          }
        }
      }
    }
  }
</style>
