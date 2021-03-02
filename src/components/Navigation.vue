<template>
  <div class="nav-wrapper">
    <router-link to="/" tag="a" class="logo">
      <img src="../assets/img/nav/logo.png" alt="Logo">
    </router-link>
    <nav class="nav">
      <ul>
        <router-link
          v-for="(link, index) in nav"
          :key="index"
          :to="link.url"
          tag="li"
        >
          <a class="link" :aria-label="link.title">
            <img
              :src="require(`../assets/img/${navIcon(link)}`)"
              alt="Icon"
            >
            <span
              v-if="link.url === '/cart'"
              v-show="cart.length !== 0"
              class="counter"
            >
              {{ cart.length }}
            </span>
          </a>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navigation',
  computed: {
    ...mapGetters([
      'nav',
      'cart'
    ])
  },
  methods: {
    navIcon(link) {
      return link.url === this.$route.path ? link.activeLinkIconName : link.iconName;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../assets/scss/partials/_media-queries';

  .nav-wrapper {
    width: 145px;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0px 0px 25px 0px rgba(219, 219, 219, 0.5);
    z-index: 3;

    @include media-xl {
      width: 90px;
    }

    @include media-md {
      width: 100%;
      height: 60px;
      flex-direction: row;
    }

    .logo {
      margin-top: 35px;

      @include media-md {
        margin: 0 0 0 10px;
      }

      @include media-sm {
        display: none;
      }

      @media screen and (max-height: 450px) {
        display: none;
      }
    }

    .nav {
      width: 100%;
      height: 100%;

      @include media-md {
        width: auto;
        margin: 0 auto;

        @include media-sm {
          margin: 0 10px;
        }
      }

      ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @include media-md {
          flex-direction: row;
        }

        .link {
          display: block;
          position: relative;
          padding: 40px 0;
          transition: background-color .1s ease-in-out;

          @include media-xl {
            padding: 30px 0;
          }

          @include media-md {
            width: 60px;
            height: 60px;
            margin: 0 20px;
            padding: 0;
            overflow: hidden;
          }

          @include media-sm {
            margin: 0 10px;
          }

          &:hover {
            background-color: #f5f3f3;
          }

          img {
            display: block;
            margin: 0 auto;

            @include media-md {
              margin: 14px auto;
            }
          }

          .counter {
            width: 30px;
            height: 30px;
            display: block;
            position: absolute;
            top: 20%;
            left: 60%;
            border-radius: 50%;
            text-align: center;
            line-height: 30px;
            background-color: #0621d1;
            color: #fff;
            font-weight: bold;

            @include media-md {
              top: 10%;
              left: 50%;
            }
          }
        }
      }
    }
  }
</style>
