<template>
<!--  Sticky Header-->
  <div class="header ">
    <div class="container">
         <div class="header-left-side">
           <span>Quick Guide</span>&nbsp;&nbsp;
           <b-dropdown text=" BAN/TK" class="drop-list">
             <b-dropdown-item href="#">AUS/USD</b-dropdown-item>
             <b-dropdown-item href="#">US/USD</b-dropdown-item>
             <b-dropdown-item href="#">IN/RP</b-dropdown-item>
           </b-dropdown>
           <b-dropdown text="Sell with us" class="drop-list2 ps-3">
             <b-dropdown-item href="#">Returns</b-dropdown-item>
             <b-dropdown-item href="#">Privacy</b-dropdown-item>
             <b-dropdown-item href="#">Terms</b-dropdown-item>
           </b-dropdown>
           <a class="my-account ps-3" href="#">My Account <b-icon icon="person"></b-icon></a>
         </div>

      <div class="header-right-side">
             <a class="right-top " href="#">Compare <b-icon class="compare-icon" icon="arrow-repeat"></b-icon><span class="select-items">12</span></a>
             <a class="right-top " href="#">Cart <b-icon icon="bag"></b-icon><span class="select-items">0</span></a>
             <a class="right-top " href="#">Wishlist <b-icon icon="heart"></b-icon><span class="select-items">0</span></a>
             <router-link to="/account" class="right-top">My Account <b-icon icon="person"></b-icon></router-link>
         </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'Header'

}
</script>

<style lang="scss">

</style>
