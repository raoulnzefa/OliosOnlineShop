<template>
  <div>
    <button
      @click="showCategoriesNav()"
      ref="btnShowNav"
      class="btn btn-show-nav"
      aria-label="Toggle categories menu">
    </button>
    <transition name="slide">
      <div
        v-show="isNavCategoriesOpen"
        v-closable="{
          handler: 'hideCategoriesNav',
          exclude: ['btnShowNav']
        }"
        class="nav-categories-wrapper"
      >
        <button @click="hideCategoriesNav()" class="btn btn-hide-nav"></button>
        <nav class="nav-categories">
          <transition-group name="fade-in" tag="ul">
            <router-link
              v-for="category in visibleCategories"
              :key="category.name"
              :to="`/products/${getCategoryLinkParam(category.name)}`"
              tag="li"
            >
              <a @click="hideCategoriesNav()" class="link">
                {{ category.name }}
                <img
                  :src="require(`../assets/img/${navCategoriesIcon(category)}`)"
                  alt="Icon"
                >
              </a>
            </router-link>
          </transition-group>
        </nav>
        <button
          v-show="isBtnShowAllCategories"
          @click="showAllCategories"
          class="btn btn-show-all-categories"
        >
          Show all categories
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NavigationCategories',
  data() {
    return {
      visibleCategoriesQuantity: 5
    };
  },
  computed: {
    ...mapGetters([
      'categoriesInfo',
      'isNavCategoriesOpen'
    ]),
    visibleCategories() {
      return this.categoriesInfo.slice(0, this.visibleCategoriesQuantity);
    },
    isBtnShowAllCategories() {
      return this.visibleCategoriesQuantity < this.categoriesInfo.length;
    }
  },
  methods: {
    ...mapActions([
      'showCategoriesNav',
      'hideCategoriesNav'
    ]),
    navCategoriesIcon(category) {
      return this.$route.path === `/products/${this.getCategoryLinkParam(category.name)}`
        ? category.activeLinkIconName
        : category.iconName;
    },
    getCategoryLinkParam(name) {
      return name.replace(/\s/g, '-').toLowerCase();
    },
    showAllCategories() {
      this.visibleCategoriesQuantity = this.categoriesInfo.length;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../assets/scss/partials/_media-queries';

  .btn-show-nav,
  .btn-hide-nav {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 80px;
    right: 55px;
    border-radius: 50%;
    box-shadow: 0px 0px 25px 0px rgba(219, 219, 219, 0.5);
    transition: background-color .1s ease-in-out;

    @include media-xl {
      width: 70px;
      height: 70px;
      top: 40px;
      right: 40px;
    }

    @include media-md {
      width: 60px;
      height: 60px;
      top: 0;
      right: 10px;
      border-radius: 0;
      box-shadow: none;
      z-index: 999;
    }

    &:hover {
      background-color: #f5f3f3;
    }
  }

  .btn-show-nav {
    background: url('../assets/img/hamburger-nav-icon.png') center no-repeat, #fff;
  }

  .btn-hide-nav {
    right: 45px;
    background: url('../assets/img/cross-icon.png') center no-repeat, #fff;

    @include media-xl {
      right: 30px;
    }

    @include media-md {
      position: fixed;
      right: 10px;
    }
  }

  .nav-categories-wrapper {
    width: 370px;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    overflow: auto;
    box-shadow: 0px 0px 25px 0px rgba(219, 219, 219, 0.5);
    overflow-x: hidden;

    @include media-xs {
      width: 100%;
    }

    .nav-categories {
      margin: 290px 0 100px 0;

      @include media-xl {
        margin: 190px 0 50px 0;
      }

      @include media-xs {
        margin: 100px 0 50px 0;
      }

      .link {
        width: 370px;
        display: block;
        position: relative;
        padding: 50px 0;
        text-align: right;
        padding-right: 165px;
        color: #c1c1c1;
        text-transform: uppercase;
        white-space: nowrap;
        font-size: 18px;
        transition: background-color .1s ease-in-out;

        @include media-xs {
          width: 100%;
          padding: 30px 0 30px 0;
          text-align: left;
          text-indent: 130px;
        }

        &:hover {
          background-color: #f5f3f3;
        }

        img {
          position: absolute;
          left: 240px;
          top: 50%;
          transform: translateY(-50%);

          @include media-xs {
            left: 40px;
          }
        }
      }
    }

    .btn-show-all-categories {
      width: 100%;
      height: 50px;
      position: relative;
      margin-bottom: 80px;
      background-color: #fff;
      color: #0023ff;
      text-transform: uppercase;
      font-size: 18px;
      transition: background-color .1s ease-in-out;

      @include media-xs {
        margin-bottom: 40px;
      }

      &:hover {
        background-color: #f5f3f3;
      }

      &::after {
        content: '';
        width: 160px;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 50%;
        background-color: #0023ff;
        transform: translateX(-50%);
      }
    }
  }

  .slide-enter {
    width: 0;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: width .3s ease-in-out;
  }

  .slide-enter-to,
  .slide-leave {
    width: 370px;

    @include media-xs {
      width: 100%;
    }
  }

  .slide-leave-to {
    width: 0;
  }

  .fade-in-enter {
    opacity: 0;
    transform: translateY(30px);
  }

  .fade-in-enter-active {
    transition: opacity .5s ease-in-out, transform .5s ease-in-out;
  }

  .fade-in-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
</style>
