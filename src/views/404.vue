<template>
  <div class="wrapper">
    <p class="error">Page Not Found</p>
    <router-link to="/" tag="button" class="btn btn-homepage">Back to homepage</router-link>
  </div>
</template>

<script>
export default {
  name: 'Cart',
};
</script>

<style scoped lang="scss">
@import '../assets/scss/partials/_media-queries';

  .wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px;

    @include media-sm {
      padding: 0 20px;
    }

    .error {
      color: #d8d8d8;
      text-align: center;
      font-size: 100px;
      font-weight: 900;

      @include media-lg {
        font-size: 70px;
      }

      @include media-sm {
        font-size: 40px;
      }
    }

    .btn-homepage {
      height: 55px;
      margin: 25px 0 100px 0;
      padding: 0 40px;
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
</style>
