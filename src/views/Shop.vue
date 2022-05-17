<script>
import carousel from "vue-owl-carousel";
import ProductsDivision from "../components/ProductsDivision";
import ShopLeftOption from "../components/ShopLeftOption";

export default {
  name: "Shop",
  components: {
    ShopLeftOption,
    carousel,
    ProductsDivision,
  },
  data() {
    return {
      categories: [
        {
          title: "Man Shoes ",
          image: require("../assets/picture/categories/cat1.png"),
          quantity: 5,
        },
        {
          title: "Fashion Clothes ",
          image: require("../assets/picture/categories/cat2.png"),
          quantity: 6,
        },
        {
          title: "Hair Removal ",
          image: require("../assets/picture/categories/cat3.png"),
          quantity: 5,
        },
        {
          title: "Smart Watch",
          image: require("../assets/picture/categories/cat4.png"),
          quantity: 11,
        },
        {
          title: "Women Clothes ",
          image: require("../assets/picture/categories/cat5.png"),
          quantity: 2,
        },
        {
          title: "Hair Removal ",
          image: require("../assets/picture/categories/cat3.png"),
          quantity: 10,
        },
        {
          title: "Man Shoes ",
          image: require("../assets/picture/categories/cat1.png"),
          quantity: 6,
        },
        {
          title: "Man Shoes ",
          image: require("../assets/picture/categories/cat5.png"),
          quantity: 5,
        },
      ],
      isTrue: false,
      isShow: false,
      title: "Rick Grimes",
    };
  },
  methods: {
    //   updateParent(child_msz) {
    // console.log(this.child_msz)
    //   },

    ChangeParent(child_msz) {
      console.log("block Sidebar hide processing..");
      this.isTrue = child_msz;
      this.isShow = false;
      console.log("Sidebar hide");
    },
    showSidebar() {
      this.isShow = true;
      console.log("Sidebar show");
    },
  },
};
</script>

<template>
  <div class="shop">
    <!-- Common banner Area-->
    <div class="common-banner">
      <div class="CBanner-inner">
        <h1>{{ bannerName }}</h1>
        <button type="button" class="btn btn-CBanner"></button>
        <ul class="button-list">
          <li><a href="">Home</a></li>
          <li><a class="current-page" href="">Shop</a></li>
        </ul>
      </div>
    </div>
    <!-- Common banner Area-->
    <div class="container">
      <div class="shop-view">
        <div
          class="left-view"
          v-bind:class="{ sideclose: isTrue, sideShow: isShow }"
        >
          <ShopLeftOption @changeTitle="ChangeParent($event)" />
        </div>
        <div class="right-view">
          <!-- All Products List Start -->
          <div class="all-products">
            <!--    Left sidebar shown button-->
            <span class="sideShowButton" @click.prevent="showSidebar()">
              Filter <b-icon icon="filter-left"></b-icon>
            </span>
            <div class="all-products-option">
              <div class="left-option">
                <router-link to="home"> Home </router-link> /
                <span> Products </span>
              </div>
              <div class="right-option">
                <div class="top-button">
                  <span>Show </span>
                  <span>9 </span> / <span>12 </span> / <span>18 </span> /
                  <span>24 </span>
                  <span class="option-icon-button ms-3"
                    ><b-icon icon="list-ul" aria-hidden="true"></b-icon
                  ></span>
                  <span class="option-icon-button"
                    ><b-icon icon="grid-fill" aria-hidden="true"></b-icon
                  ></span>
                  <span class="option-icon-button"
                    ><b-icon icon="grid3x3-gap-fill" aria-hidden="true"></b-icon
                  ></span>
                  <span class="option-icon-button">
                    <img
                      src="../assets/picture/grid4.png"
                      style="width: 20px"
                      alt=""
                    />
                  </span>
                  <span class="sort-button">
                    <div class="btn-group ms-1">
                      <button
                        class="btn dropdown-toggle default-sort"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Default Sorting
                      </button>
                      <ul class="dropdown-menu">
                        <li>Sort by popularity</li>
                        <li>Sort by average rating</li>
                        <li>Sort by latest</li>
                        <li>Sort by price: low to high</li>
                        <li>Sort by price : high to low</li>
                      </ul>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- All Products List Stop -->
          <!-- All Categories List Start -->

          <div class="all-categories">
            <div class="categories-top">
              <h4>All Categories</h4>
            </div>
            <!--      carousel-->
            <carousel
              :autoplay="true"
              :speed="400"
              :nav="true"
              :dots="false"
              :responsive="{
                0: { items: 1, nav: false },
                300: { items: 2, nav: false },
                600: { items: 3, nav: false },
                991: { items: 4, nav: false },
                1200: { items: 5, nav: false },
                1500: { items: 6, nav: false },
              }"
            >
              <template class="prev-customize-icon" slot="prev"
                ><span class="prev prev-customize-icon">
                  <i class="fas fa-angle-left"></i></span
              ></template>
              <template class="next-customize-icon" slot="next"
                ><span class="next next-customize-icon">
                  <i class="fas fa-angle-right"></i></span
              ></template>

              <div
                class="categories-item"
                v-for="(item, index) in categories"
                :key="index"
              >
                <div class="categories-thumb">
                  <img
                    class="img img-fluid"
                    :src="item.image"
                    title="Man Shoe"
                  />
                  <span class="categories-item-quantity">
                    {{ item.quantity }}
                  </span>
                </div>
                <div class="categories-text">
                  <span> {{ item.title }}</span>
                </div>
              </div>
            </carousel>
          </div>

          <!-- All Categories List Stop -->

          <!--    Top Collection-->
          <div class="top-collection">
            <ProductsDivision />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
