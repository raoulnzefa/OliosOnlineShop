<template>
  <div class="main">
    <p class="bg-text">Newest</p>
    <h1 class="title">Olios</h1>
    <transition-group name="slogan" appear tag="p">
      <p
        v-show="currentSlogan === index"
        v-for="(slogan, index) in slogans"
        :key="index"
        class="slogan"
      >
        {{ slogan }}
      </p>
    </transition-group>
    <router-link to="/products" tag="button" class="btn btn-view-more">View More</router-link>
    <ul class="dots">
      <li v-for="num in slogans.length" :key="num">
        <button
          @click="changeSlogan(num - 1)"
          :class="{'active-dot': currentSlogan === num - 1}"
          class="dot"
        ></button>
      </li>
    </ul>
  </div>
</template>

<script>
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
  .main {
    width: 100%;
    height: 100vh;
    position: relative;
    // padding-top: 170px;
    padding-top: 50px;
    background: url('../assets/img/home-bg.png') center bottom / cover no-repeat;

    .bg-text {
      position: absolute;
      top: 70px;
      left: 50%;
      color: rgba(231, 231, 231, 0.7);
      text-transform: uppercase;
      // font-size: 400px;
      font-size: 200px;
      font-weight: 900;
      transform: translateX(-50%);
    }

    .title {
      position: relative;
      color: #000;
      text-transform: uppercase;
      text-align: center;
      font-size: 220px;
      font-weight: 100;
    }

    .slogan {
      margin-bottom: 35px;
      color: #000;
      text-transform: uppercase;
      text-align: center;
      font-size: 36px;
      font-weight: 300;
    }

    .btn-view-more {
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

    .dots {
      display: flex;
      position: absolute;
      bottom: 100px;
      right: 220px;

      li {
        &:not(:last-child) {
          margin-right: 45px;
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
