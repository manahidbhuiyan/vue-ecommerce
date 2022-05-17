<template>
<div class="search-section">
  <div class="container">

    <div class="all-category">
      <button class="btn btn-sidebar" @click="sidebarToggole">
        <b-icon class="list-icon" icon="list-ul"></b-icon>&nbsp;&nbsp;&nbsp; <b>ALL CATEGORY</b>
      </button>
      <transition name="fade">
      <div class="side-menu fade-enter-active" v-bind:class="{'changemenu': isActive}">
            <li class="menu-item">
               <img class="img img-thumbnail dropdown-item-thumbnail" src="../assets/picture/sidebar/women.png" alt="">
               <p>Western woman</p>
            </li>
        <li class="menu-item">
               <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/tv.png" alt="">
               <p>TV, Appliances</p>
            </li>
        <li class="menu-item">
               <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/baby.png" alt="">
               <p>Baby products</p>
            </li>
        <li class="menu-item">
               <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/grocery.png" alt="">
               <p>Grocery products</p>
            </li>
        <li class="menu-item">
               <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/beauty.png" alt="">
               <p>Beauty, health products</p>
            </li>
        <li class="menu-item">
               <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/industrial.png" alt="">
               <p>Industrial Products</p>
            </li>
        <li class="menu-item">
               <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/bike.png" alt="">
               <p>Car, Motorbike</p>
            </li>
        <li class="menu-item">
               <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/sports.png" alt="">
               <p>Club, Sports</p>
            </li>
      </div>
      </transition>
    </div>



<!--          <div class="all-category">-->
<!--            <b-dropdown-->
<!--                id="dropdown-1"-->
<!--                class="m-md-2"-->
<!--                @click="dropdownMenuToggole"-->
<!--                v-bind:class="{'show' : isActive}"-->
<!--            >-->
<!--              <template slot="button-content">-->
<!--                <b-icon class="list-icon" icon="list-ul"></b-icon> &nbsp;-->
<!--                <em> All Categories</em>-->
<!--              </template>-->
<!--              <b-dropdown-item>-->
<!--                <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/women.png" alt="">-->
<!--                <p>Western woman</p>-->
<!--              </b-dropdown-item>-->
<!--              <b-dropdown-item>-->
<!--                                <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/tv.png" alt="">-->

<!--                <p>TV, Appliances</p>-->
<!--              </b-dropdown-item>-->
<!--              <b-dropdown-item>-->
<!--                                <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/baby.png" alt="">-->

<!--                <p>Baby products</p>-->
<!--              </b-dropdown-item>-->
<!--              <b-dropdown-item>-->
<!--                                <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/grocery.png" alt="">-->

<!--                <p>Grocery products</p>-->
<!--              </b-dropdown-item>-->
<!--              <b-dropdown-item>-->
<!--                                <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/beauty.png" alt="">-->

<!--                <p>Beauty, health products</p>-->
<!--              </b-dropdown-item>-->
<!--              <b-dropdown-item>-->
<!--                                <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/industrial.png" alt="">-->

<!--                <p>Industrial Products</p>-->
<!--              </b-dropdown-item>-->
<!--              <b-dropdown-item>-->
<!--                                <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/bike.png" alt="">-->

<!--                <p>Car, Motorbike</p>-->
<!--              </b-dropdown-item>-->
<!--              <b-dropdown-item>-->
<!--                                <img class="img img-thumbnail dropdown-item-thumbnail " src="../assets/picture/sidebar/sports.png" alt="">-->

<!--                <p>Club, Sports</p>-->
<!--              </b-dropdown-item>-->
<!--            </b-dropdown>-->
<!--          </div>-->
    <div class="inner-search-area">
      <div class="search">
        <b-form-input class="search-box" type="search" placeholder="search here..."></b-form-input>
      </div>
      <div class="text">
        <p>Free Shipping On Order 2k+</p>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Search",
  data(){
    return{
      isActive: false,
    }
  },
  methods:{
    sidebarToggole(){
      this.isActive = !this.isActive
      console.log("menu changed")
    }
  },
  mounted() {
    this.$root.$on('bv::dropdown::show', bvEvent => {
      console.log('Dropdown is about to be shown', bvEvent)
    })
  }
}
</script>

<style scoped>

</style>
