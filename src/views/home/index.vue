<template>
  <div>
    <!-- 头部 -->
    <IntellectualHead></IntellectualHead>

    <!-- 登录注册忘记密码 -->
    <LoginRegistrationForgot></LoginRegistrationForgot>

    <!-- 尾部 -->
    <IntellectualFooter></IntellectualFooter>
  </div>
</template>

<script>
import IntellectualHead from '@/componets/intellectual/IntellectualHead.vue';
import LoginRegistrationForgot from '@/componets/intellectual/LoginRegistrationForgot.vue'
import IntellectualFooter from '@/componets/intellectual/IntellectualFooter.vue'

export default {
  components:{
    IntellectualHead,
    LoginRegistrationForgot,
    IntellectualFooter
  },
  
  data() {
    return {
      
    }
  },

  created(){
    
  },

  methods: {

  }
}
</script>

<style scoped>

</style>