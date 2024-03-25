<template>
  <div class="intellectual_main">
    <!-- 登录 -->
    <div class="intellectual_signin" v-if="signin">
      <div class="sign_title">Sign In</div>
      <el-form
        :model="signInForm"
        :rules="rules"
        ref="signInForm"
        class="demo-signInForm"
      >
        <el-form-item prop="email" class="signInForm_email">
          <el-input
            v-model="signInForm.email"
            placeholder="Email Address"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass" class="signInForm_pass">
          <el-input
            :type="showPassword ? 'text' : 'password'"
            v-model="signInForm.pass"
            placeholder="Password"
            autocomplete="off"
          ></el-input>
          <img
            src="../../assets/img/hide_pass.png"
            v-if="!showPassword"
            @click="togglePassword"
          />
          <img
            src="../../assets/img/show_pass.png"
            v-else
            @click="togglePassword"
          />
          <span style="padding: 0 12px; color: #eee">|</span>
          <span class="span_forget">Forgot?</span>
        </el-form-item>

        <el-form-item>
          <el-button
            class="signBtn"
            @click="signIn('signInForm')"
            :style="{
              backgroundColor:
                signInForm.email != '' && signInForm.pass != ''
                  ? '#FED600'
                  : '#D8D8D8',
              color:
                signInForm.email != '' && signInForm.pass != ''
                  ? '#1D1D1D'
                  : '#999999',
            }"
            ><span>Sign In</span></el-button
          >
        </el-form-item>

        <div class="forgot_span">
          <span
            >Don't have an account？<span style="color: #007aff"
              >Join Free</span
            ></span
          >
        </div>
      </el-form>
    </div>

    <!-- 注册 -->
    <div class="intellectual_joinfree" v-if="joinfree">
        <div class="sign_title">Sign In</div>
      <el-form
        :model="registrateForm"
        :rules="ruleRegis"
        ref="registrateForm"
        class="demo-signInForm"
      >
        <el-form-item prop="email" class="signInForm_email">
          <el-input
            v-model="registrateForm.email"
            placeholder="Email Address"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass" class="signInForm_pass">
            <el-input
            v-model="registrateForm.pass"
            placeholder="Password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="repestpass" class="signInForm_pass">
            <el-input
            v-model="registrateForm.repestpass"
            placeholder="Repest Password"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            class="signBtn"
            @click="registrateSubmit('registrateForm')"
            :style="{
              backgroundColor:
              registrateForm.email != '' && registrateForm.pass != ''
                  ? '#FED600'
                  : '#D8D8D8',
              color:
              registrateForm.email != '' && registrateForm.pass != ''
                  ? '#1D1D1D'
                  : '#999999',
            }"
            ><span>Submit</span></el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginRegistrationForgot",
  data() {
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("This e-mail address is incorrect."));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("This password is incorrect."));
      }
    };
    var validateRepestPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("This password is incorrect."));
      }
    };
    return {
      signInForm: {
        pass: "",
        email: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
      },

      registrateForm:{
        pass: "",
        email: "",
        repestpass:'',
      },
      ruleRegis:{
        pass: [{ validator: validatePass, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
        repestpass: [{ validator: validateRepestPass, trigger: "blur" }],
      },

      signin: false,
      joinfree: true,
      forgot: false,
      showPassword: false,
    };
  },

  created() {},

  methods: {
    // 登录
    signIn(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    registrateSubmit(formName){
        this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    // 显示隐藏密码
    togglePassword() {
      this.showPassword = !this.showPassword;
    },

    // 注册
  },
};
</script>

<style scoped>
.intellectual_main {
  width: 100%;
  height: 754px;
  background: url(../../assets/img/intell_bg.png) no-repeat center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intellectual_signin,
.intellectual_joinfree,
.intellectual_forgot {
  border-radius: 8px;
  background: #ffffff;
}

.sign_title {
  font-family: Rubik;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  font-variation-settings: "opsz" auto;
  color: #3d3d3d;
  margin: 32px 0 32px 32px;
}

::v-deep .el-form-item {
  width: 436px;
  height: 56px;
}

::v-deep .signInForm_email .el-form-item__content {
  width: 436px;
  height: 56px;
  border-radius: 4px;
  border: 1px solid #eeeeee;
}

::v-deep .signInForm_email .el-input__inner {
  width: 436px;
  height: 56px;
  border: none;
  padding: 0 16px;
}

::v-deep .signInForm_pass .el-input__inner {
  width: 314px;
  height: 56px;
  border: none;
  padding: 0 16px;
}

::v-deep .signInForm_pass .el-form-item__content {
  width: 436px;
  height: 56px;
  border-radius: 4px;
  border: 1px solid #eeeeee;
  display: flex;
  align-items: center;
}

::v-deep .signInForm_pass .el-input {
  width: 314px;
  height: 56px;
  border: none;
}

.demo-signInForm {
  margin: 32px 32px 24px;
}

.span_forget {
  font-family: Rubik;
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  font-variation-settings: "opsz" auto;
  /* 蓝/蓝-500 */
  color: #007aff;
}

.signBtn {
  width: 438px;
  height: 42px;
  border-radius: 4px;
  background: #d8d8d8;
  border: none;
  font-family: Rubik;
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  font-variation-settings: "opsz" auto;
  /* 灰/灰-400 */
  color: #999999;
}

.signBtn:hover {
  background: #d8d8d8;
  color: #999999;
}

.el-form-item {
  margin-bottom: 24px;
}

.forgot_span {
  font-family: Rubik;
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  font-variation-settings: "opsz" auto;
  /* Don't have an account？ */
  color: #999999;
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep .el-form-item__error {
  font-family: Rubik;
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  font-variation-settings: "opsz" auto;
  /* 红/红-500 */
  color: #f44336;
}
</style>
