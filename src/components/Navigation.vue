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
          <a class="link">
            <img
              :src="require(`../assets/img/nav/${link.url === $route.path
                ? link.activeLinkIconName
                : link.iconName
              }`)"
              alt="Icon"
            >
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
      'nav'
    ])
  }
};
</script>

<style scoped lang="scss">
  .nav-wrapper {
    width: 145px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0px 0px 25px 0px rgba(219, 219, 219, 0.5);

    .logo {
      margin: 35px 0 110px 0;
    }

    .nav {
      width: 100%;

      .link {
        display: block;
        padding: 40px 0;
        transition: background-color .1s ease-in-out;

        &:hover {
          background-color: #f5f3f3;
        }

        img {
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
</style>
