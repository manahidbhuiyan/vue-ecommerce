<script>
export default {
  name:"Account",
  components:{

  },
  data(){
    return{
      bannerName:"My Account"
    }
  }
}
</script>


<template>
<div>
  <!--common banner area start-->

  <div class="common-banner">
    <div class="CBanner-inner">
      <h1>{{bannerName}}</h1>
      <button type="button" class="btn btn-CBanner"></button>
      <ul class="button-list">
        <li><a href="">Home</a></li>
        <li><a class="current-page" href="">Account</a></li>
      </ul>
    </div>
  </div>
  <!--  common banner area stop-->

<!--  <div class="common-banner">-->
<!--    <div class="CBanner-inner">-->
<!--      <h1>{{bannerName}}</h1>-->
<!--      <button type="button" class="btn btn-CBanner"></button>-->
<!--      <ul class="button-list">-->
<!--        <li><a href="">Home</a></li>-->
<!--        <li><a href="">Shop</a></li>-->
<!--        <li><a class="current-page" href="">Products</a></li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->

  <!--  account area start-->

  <div class="account">
    <div class="container">
      <div class="login">
        <h3 class="login-title">Login</h3>
        <div class="login-inner">
          <label>Username or email <span style="color: orangered; margin-bottom: 5px">*</span></label><br>
          <span class="email-input"><input type="text" class="login-email"><br></span>
          <label>Password <span style="color: orangered; margin-bottom: 5px">*</span></label><br>
          <span class="password-input">
            <input type="password" class="login-pass">
            <span><b-icon class="show-password" icon="eye-slash"></b-icon> </span>
          </span>
          <div class="checkbox d-flex">
            <button type="submit" class="btn btn-login">Login</button>
            <div><input type="checkbox"><span>&nbsp; Remember me</span></div>
          </div>

          <a href="#">Lost Your Password?</a>
        </div>
      </div>
<!--      -->
      <div class="login">
        <h2 class="login-title">Register</h2>
        <div class="login-inner">
          <label>Email Address <span style="color: orangered; margin-bottom: 5px">*</span></label><br>
          <span class="email-input"><input type="text" class="login-email"><br></span>
          <div class="signup-text">
            <span>A password will be sent to your email address. <br><br> Your personal data will be used to support your experience throughout this website,
              to manage access to your account, and for other purposes described in our <span style="color: #0099FF;cursor: pointer">privacy policy</span> .</span>
          </div>

          <button type="submit" class="btn btn-login">Register</button>

        </div>
      </div>
    </div>
  </div>

</div>
</template>

<style lang="scss">

</style>
