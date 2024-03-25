<template>
  <div class="intellectual_head">
    <div class="intellectual_head_img">
      <img src="../../assets/img/logo_head.png" />
      <div class="intellectual_head_line"></div>
      <span class="intellectual_head_title">IP Protection Portal</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntellectualHead",
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped>
.intellectual_head {
  width: 100%;
  height: 80px;
  background: #1f1f1f;
  display: flex;
  align-items: center;
}

.intellectual_head_img {
  display: flex;
  align-items: center;
  left: 376px;
  position: absolute;
}

.intellectual_head img {
  width: 200px;
  height: 56px;
}

.intellectual_head_line {
  width: 0.5px;
  height: 18px;
  border-radius: 120px;
  background: #ffffff;
  margin: 0 8.5px 0 8px;
}

.intellectual_head_title {
  font-family: Rubik;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0em;

  font-variation-settings: "opsz" auto;
  color: #ffffff;
}
</style>
