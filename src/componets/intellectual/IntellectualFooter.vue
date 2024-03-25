<template>
  <div class="usafooter_class">
    <div class="footspan_item" style="margin-top: 40px;margin-bottom: 12px;">
      <span>China Wholesale</span>
      <div class="footLine"></div>
      <span>Security & Privacy</span>
      <div class="footLine"></div>
      <span>About Us</span>
      <div class="footLine"></div>
      <span>China Manufacturers</span>
      <div class="footLine"></div>
      <span>Seller Home</span>
      <div class="footLine"></div>
      <span>Blog</span>
      <div class="footLine"></div>
      <span>Best Sellers</span>
      <div class="footLine"></div>
      <span>Customer Service</span>
      <div class="footLine"></div>
      <span>Terms of Use</span>
      <div class="footLine"></div>
      <span>Local Warehouse</span>
      <div class="footLine"></div>
      <span>Facebook group</span>
    </div>

    <div class="footspan_item" style="margin-bottom: 24px;">
      <span>Russinan</span>
      <div class="footLine"></div>
      <span>Portuguess</span>
      <div class="footLine"></div>
      <span>Italian</span>
      <div class="footLine"></div>
      <span>Spanish</span>
      <div class="footLine"></div>
      <span>French</span>
      <div class="footLine"></div>
      <span>German</span>
      <div class="footLine"></div>
      <span>Turkey</span>
      <div class="footLine"></div>
      <span>한국어 </span>
      <div class="footLine"></div>
      <span>العربية</span>
      <div class="footLine"></div>
      <span>Nederlands</span>
      <div class="footLine"></div>
      <span>Polski</span>
      <div class="footLine"></div>
      <span>Svenska</span>
      <div class="footLine"></div>
      <span>日本語</span>
      <div class="footLine"></div>
      <span>Ireland</span>
    </div>

    <div class="footimgs" style="margin-bottom: 24px;">
      <img src="../../assets/footimg/master.png" width="29px" height="23px" />
      <img src="../../assets/footimg/visa.png" width="38px" height="13px" />
      <img src="../../assets/footimg/AE.png" width="28px" height="28px" />
      <img src="../../assets/footimg/diners_club.png" width="80px" height="22px" />
      <img src="../../assets/footimg/discover.png" width="81px" height="13px" />
      <img src="../../assets/footimg/yinlian.png" width="45px" height="28px" />
      <img src="../../assets/footimg/maestro.png" width="38px" height="23px" />
      <img src="../../assets/footimg/ideal.png" width="33px" height="28px" />
      <img src="../../assets/footimg/sofort.png" width="42px" height="28px" />
      <img src="../../assets/footimg/banck.png" width="43.5px" height="28px" />
      <img src="../../assets/footimg/Geo.png" width="77px" height="13px" />
      <img src="../../assets/footimg/Pci.png" width="44px" height="28px" />
    </div>

    <div class="footspan_item">
      <span
        >Copyright Notice © 2004 - 2023 DHgate.com All rights reserved. License
      </span>
      <span class="footspan_span">ICP备18054285号-7</span>
      <span class="footspan_span">京公网安备11010802019844号</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntellectualFooter",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.usafooter_class {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 246px;
  opacity: 1;
  width: 100%;
  background: #1f1f1f;
}

.footimgs {
  display: flex;
}

.footimgs img {
  margin-right: 16px;
}

.footspan_item {
  display: flex;
}

.footspan_item span {
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
}

.footLine {
  width: 0px;
  height: 12px;
  transform: rotate(180deg);
  opacity: 1;
  /* 灰/灰-200 */
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 8px;
}

.footspan_span {
  font-family: Rubik !important;
  font-size: 12px !important;
  font-weight: normal !important;
  line-height: 16px !important;
  text-align: center !important;
  letter-spacing: 0em;

  /* 黑/正文 */
  color: #ffffff !important;
  margin-left: 4px;
}
</style>
