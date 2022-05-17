<script>
export default {
  name: "Navbar",
  data() {
    return {
      isActive: false,
      isNavActive: false,
      isopen: false,
      isSideActive: false,
      isShow: false,
      isRotate: false,
      isUser: false,
    };
    // let navbar = document.getElementsByClassName("select-position");
    // let sticky = select-position.offsetTop;
  },

  methods: {
    showSideMenu() {
      this.isopen = !this.isopen;
      this.isRotate = !this.isRotate;
    },
    closeNav() {
      this.isopen = !this.isopen;
    },
    showsidepageM() {
      this.isShow = true;
      this.isSideActive = false;
      this.isUser = false;
    },
    showsidepageC() {
      this.isSideActive = true;
      this.isShow = false;
      this.isUser = false;
    },
    showSidePageU() {
      console.log("user clicked");
      this.isUser = true;
      this.isSideActive = false;
      this.isShow = false;
    },
  },
};
</script>
<template>
  <div class="select-position">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container container-fluid">
        <router-link to="/" class="site-title"> MyShopping </router-link>

        <button
          @click="showSideMenu"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarNav"
          v-bind:class="{ collapse_toggle: isActive }"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link"> Home </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Categories</a>
            </li>
            <li class="nav-item">
              <router-link to="/shop" class="nav-link"> Shop </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Special</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!--   sidenav -->
    <div id="mySidenav" class="sidenav" v-bind:class="{ closenav: isopen }">
      <div class="side-title">MyShopping</div>
      <a
        href=""
        class="closebtn"
        v-bind:class="{ buttonRotate: isRotate }"
        @click.prevent="closeNav"
        ><b-icon icon="x"></b-icon>
      </a>
      <div class="buttonlist d-flex justify-content-start">
        <button
          class="btn btn-dark btn-sidemenu p-2 me-2"
          @click="showsidepageM"
        >
          MENU
        </button>
        <button
          class="btn btn-dark btn-sidemenu p-2 me-2"
          @click="showsidepageC"
        >
          CATEGORIES
        </button>
        <button class="btn btn-dark btn-sidemenu p-2" @click="showSidePageU">
          <b-icon icon="person"></b-icon>
        </button>
      </div>
      <!--     categories list-->
      <div
        class="sideCategoriesList default-show"
        v-bind:class="{
          toggoleSidepage1: isSideActive,
          sidePage1st: isShow,
          noUserPage: isUser,
        }"
      >
        <li class="menu-item">
          <p style="color: orangered">Home</p>
        </li>
        <li class="menu-item">
          <p>Categories</p>
        </li>
        <li class="menu-item">
          <p>Shop</p>
        </li>
        <li class="menu-item">
          <p>Pages</p>
        </li>
        <li class="menu-item">
          <p>Special</p>
        </li>
        <li class="menu-item">
          <p>Contact</p>
        </li>
        <li class="menu-item">
          <p>About Us</p>
        </li>
      </div>
      <!--     categories list-->
      <div
        class="sideCategoriesList sidePage2"
        v-bind:class="{
          toggoleSidepage2: isSideActive,
          sidePage2nd: isShow,
          noUserPage: isUser,
        }"
      >
        <li class="menu-item">
          <p>Western woman</p>
        </li>
        <li class="menu-item">
          <p>TV, Appliances</p>
        </li>
        <li class="menu-item">
          <p>Baby products</p>
        </li>
        <li class="menu-item">
          <p>Grocery products</p>
        </li>
        <li class="menu-item">
          <p>Beauty, health products</p>
        </li>
        <li class="menu-item">
          <p>Industrial Products</p>
        </li>
        <li class="menu-item">
          <p>Car, Motorbike</p>
        </li>
        <li class="menu-item">
          <p>Club, Sports</p>
        </li>
      </div>

      <!--     sign in-->
      <div
        class="sidenav-login sidePage3"
        v-bind:class="{
          toggoleSidepage3: isSideActive,
          sidePage3rd: isShow,
          userPage: isUser,
        }"
      >
        <div class="login-title">
          <p>Sign in</p>
          <span><a href="#">Create an Account</a></span>
        </div>
        <div class="login-inner">
          <label
            >Username or email
            <span style="color: orangered; margin-bottom: 5px">*</span></label
          ><br />
          <input type="text" class="login-email" /><br />
          <label
            >Password
            <span style="color: orangered; margin-bottom: 5px">*</span></label
          ><br />
          <input type="password" class="login-pass" />
          <div class="checkbox d-flex">
            <input type="checkbox" /><span>&nbsp; Remember me</span>
          </div>
          <button type="submit" class="btn btn-login">Login</button>
          <a href="#">Lost Your Password?</a>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
