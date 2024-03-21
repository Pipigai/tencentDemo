<template>
  <div id="app">
    <!-- <router-link to="../views/home"></router-link> -->
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  provide() {
    // 注册一个方法
    return {
      reload: this.reload,
    };
  },

  data() {
    return {
      isRouterAlive: true,
    };
  },

  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style>
body{
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 0!important;
}
</style>
