<template>
  <div class="main">
    <h1 class="title">Olios</h1>
    <transition-group name="slogan" appear tag="p">
      <p
        v-show="currentSlogan === index"
        v-for="(slogan, index) in slogans"
        :key="slogan"
        class="slogan"
      >
        {{ slogan }}
      </p>
    </transition-group>
    <router-link :to="firstCategory" tag="button" class="btn btn-view-more">View More</router-link>
    <ul class="dots">
      <li v-for="(num, i) in slogans.length" :key="num">
        <button
          @click="changeSlogan(num - 1)"
          :class="{'active-dot': currentSlogan === num - 1}"
          class="dot"
          :aria-label="`Slogan ${i}`"
        ></button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      currentSlogan: 0,
      sloganInterval: null,
      intervalTime: 10,
      slogans: [
        'Newest furniture shop template',
        'User friendly layout',
        'Modern design',
        'Fully customizable screens'
      ]
    };
  },
  created() {
    this.setSloganInterval();
  },
  computed: {
    ...mapGetters([
      'categoriesInfo'
    ]),
    firstCategory() {
      return `/products/${this.categoriesInfo[0].name.replace(/\s/g, '-').toLowerCase()}`;
    }
  },
  methods: {
    changeSlogan(index) {
      this.currentSlogan = index;
      clearInterval(this.sloganInterval);
      this.setSloganInterval();
    },
    setSloganInterval() {
      this.sloganInterval = setInterval(() => {
        this.currentSlogan + 1 < this.slogans.length
          ? this.currentSlogan++
          : this.currentSlogan = 0;
      }, this.intervalTime * 1000);
    }
  }
};
</script>

<style scoped lang="scss">
@import '../assets/scss/partials/_media-queries';

  .main {
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 10px;
    background: url('../assets/img/home-bg.png') center bottom / cover no-repeat;

    .title {
      position: relative;
      margin-bottom: 50px;
      color: #000;
      text-transform: uppercase;
      text-align: center;
      font-size: 220px;
      font-weight: 100;
      line-height: .8;

      @include media-lg {
        margin-bottom: 40px;
        font-size: 160px;
      }

      @include media-md {
        margin-bottom: 30px;
        font-size: 100px;
      }

      @include media-xs {
        margin-bottom: 20px;
        font-size: 90px;
      }

      @media screen and (max-height: 500px) {
        margin-bottom: 10px;
        font-size: 100px;
      }
    }

    .slogan {
      margin: 0 155px 35px 155px;
      color: #000;
      text-transform: uppercase;
      text-align: center;
      font-size: 36px;
      font-weight: 300;

      @include media-xl {
        margin: 0 100px 35px 100px;
      }

      @include media-md {
        font-size: 30px;
        margin: 0 0 35px 0;
      }

      @media screen and (max-height: 500px) {
        margin: 0 100px 10px 100px;
      }
    }

    .btn-view-more {
      width: 215px;
      height: 55px;
      flex-shrink: 0;
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

    .dots {
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 100px;
      right: 220px;

      @include media-xl {
        bottom: 40px;
        right: 40px;
      }

      @include media-xs {
        right: 0;
        left: 50%;
        transform: translateX(-50%);
      }

      li {
        &:not(:last-child) {
          margin-right: 45px;

          @media screen and (max-height: 500px) {
            margin-right: 20px;
          }

          @include media-md {
            margin-right: 20px;
          }
        }
      }

      .dot {
        width: 14px;
        height: 14px;
        display: block;
        border: 3px solid #d9d9d9;
        border-radius: 50%;
        cursor: pointer;
        transition: border-color .1s ease-in-out;

        &:hover {
          border-color: #0023ff;
        }
      }

      .active-dot {
        background-color: #0023ff;
        border-color: #0023ff;
      }
    }
  }

  .slogan-enter {
    opacity: 0;
    transform: translateY(-40px);
  }

  .slogan-enter-active {
    transition: all .7s ease-in-out;
  }

  .slogan-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .slogan-leave,
  .slogan-leave-active {
     display: none;
  }
</style>
