<script>
// import RangeSlider from "../components/RangeSlider";
// import RangeSlider from 'vue-range-slider'
// you probably need to import built-in style
// import 'vue-range-slider/dist/vue-range-slider.css'

import "vue-range-slider/dist/vue-range-slider.css";
import RangeSlider from "vue-range-slider";
export default {
  name: "ShopLeftOption",
  components: {
    RangeSlider,
  },
  data() {
    return {
      sizes: ["BAN / TK", "US / USD", "IN / RP", "AUS / USD"],
      sliderValue: 20,
      filterItem: [
        {
          size: "XS",
          quantity: 20,
        },
        {
          size: "S",
          quantity: 12,
        },
        {
          size: "M",
          quantity: 17,
        },
        {
          size: "L",
          quantity: 8,
        },
        {
          size: "XL",
          quantity: 15,
        },
      ],
      colorItem: [
        {
          name: "Black",
          quantity: 20,
        },
        {
          name: "Orange",
          quantity: 15,
        },
        {
          name: "Red",
          quantity: 22,
        },
        {
          name: "Blue",
          quantity: 40,
        },
        {
          name: "Brown",
          quantity: 17,
        },
      ],
      Topproducts: [
        {
          name: " Classic black scarf",
          price: 200,
          image: require("../assets/picture/top products/top-product1.jpeg"),
        },
        {
          name: " Black Coat",
          mainPrice: "TK 1500",
          price: 1200,
          image: require("../assets/picture/top products/top-product2.jpeg"),
        },
        {
          name: " Brown Cashmere Sweater",
          price: 1000,
          image: require("../assets/picture/top products/top-product3.jpeg"),
        },
        {
          name: " Modern Design Hat",
          price: 250,
          image: require("../assets/picture/top products/top-product4.jpeg"),
        },
        {
          name: " Yellow Free Cloth",
          price: 500,
          image: require("../assets/picture/top products/top-product5.jpeg"),
        },
      ],
      recent: [
        {
          name: " Classic black scarf",
          price: 200,
          image: require("../assets/picture/top products/top-product1.jpeg"),
        },
        {
          name: " Black Coat",
          mainPrice: "TK 1500",
          price: 1200,
          image: require("../assets/picture/top products/top-product2.jpeg"),
        },
      ],
      products: [
        {
          name: " Modern Design Hat",
          price: 250,
          image: require("../assets/picture/top products/top-product4.jpeg"),
        },
        {
          name: " Yellow Free Cloth",
          price: 500,
          image: require("../assets/picture/top products/top-product5.jpeg"),
        },
        {
          name: " Black Shoe",
          mainPrice: "TK 2000",
          price: 1200,
          image: require("../assets/picture/top products/top-product6.jpeg"),
        },
      ],
      child_msz: true,
    };
  },
  methods: {
    valueChange() {
      this.option.selected = this.event.target.value;
    },
    closeSidebar() {
      this.$emit("changeTitle", this.child_msz);
    },
  },
};
</script>

<template>
  <div class="sideLeft">
    <!--     categories list-->
    <a href="" class="crossSidebar" @click.prevent="closeSidebar()"
      ><b-icon class="crossIcon" icon="x"></b-icon>
    </a>

    <div class="sideCategoriesList w-100">
      <h6 class="shopLeft-Title">Product Categories</h6>
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
    <!--    filter by size-->
    <div class="filterSize w-100 text-start">
      <h6 class="shopLeft-Title">Filter by size</h6>
      <div
        class="filter-item d-flex justify-content-between"
        v-for="(itemList, index) in filterItem"
        :key="index"
      >
        <p>{{ itemList.size }}</p>
        <span>{{ itemList.quantity }}</span>
      </div>
    </div>
    <!--    filter by color-->
    <div class="filterSize w-100 text-start">
      <h6 class="shopLeft-Title">Filter by color</h6>
      <div
        class="filter-item d-flex justify-content-between"
        v-for="(itemList, index) in colorItem"
        :key="index"
      >
        <p>{{ itemList.name }}</p>
        <span>{{ itemList.quantity }}</span>
      </div>
    </div>

    <!--   search option-->
    <div class="searchProducts">
      <form class="subscribe-option">
        <input
          type="search"
          class="form-search"
          placeholder="Search Products..."
        />
        <button class="search-btn" alt="">Search</button>
      </form>
    </div>

    <!-- Price System -->
    <div class="form-group">
      <select class="form-control" id="my-list-id">
        <option value="" v-for="(size, id) in sizes" :key="id">
          {{ size }}
        </option>
      </select>
    </div>

    <!--   Filter by price-->

    <div class="filterPrice">
      <h6 class="shopLeft-Title">Filter by Price</h6>
      <range-slider
        class="slider"
        min="0"
        max="20000"
        v-model="sliderValue"
      ></range-slider>
      <div class="filter-area">
        <button type="button" class="btn-sm filter">Filter</button>
        <span class="priceText"> Price: TK {{ sliderValue }} - TK 20000 </span>
      </div>
    </div>

    <!--   Average rating-->
    <div class="averageRating">
      <h6 class="shopLeft-Title">Average Rating</h6>
      <p class="item-star">
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span class="rating-quantity"> (10)</span>
      </p>
      <p class="item-star">
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="far fa-star"></i></span>
        <span class="rating-quantity"> (4)</span>
      </p>
      <p class="item-star">
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="far fa-star"></i></span>
        <span><i class="far fa-star"></i></span>
        <span class="rating-quantity"> (2)</span>
      </p>
    </div>

    <!--   Product tag-->
    <div class="productTag">
      <h6 class="shopLeft-Title">Product Tag</h6>
      <div class="tag-list">
        <a class="tag-item" href="#"> Audio </a>
        <a class="tag-item" href="#"> External </a>
        <a class="tag-item" href="#"> Group </a>
        <a class="tag-item" href="#"> Nine </a>
        <a class="tag-item" href="#"> Product </a>
        <a class="tag-item" href="#"> Simple </a>
        <a class="tag-item" href="#"> Special Offer </a>
        <a class="tag-item" href="#"> Variable </a>
      </div>

      <!--     top rate Products-->
      <div class="sideTopProducts">
        <h6 class="shopLeft-Title">Top Rated Products</h6>
        <div
          class="products-list"
          v-for="(product, index) in Topproducts"
          :key="index"
        >
          <div class="product-item-details">
            <p>
              <b>{{ product.name }}</b>
            </p>
            <p class="item-star">
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
            </p>
            <p>
              <del> {{ product.mainPrice }}</del>
              <span style="color: orangered">TK {{ product.price }} </span>
            </p>
          </div>
          <div class="product-item-pic">
            <img :src="product.image" class="product-pic" alt="" />
          </div>
        </div>
      </div>

      <!--     Recently views-->

      <div class="sideTopProducts">
        <h6 class="shopLeft-Title">Recently Viewed Products</h6>
        <div
          class="products-list"
          v-for="(product, index) in recent"
          :key="index"
        >
          <div class="product-item-details">
            <p>
              <b>{{ product.name }}</b>
            </p>
            <p class="item-star">
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
            </p>
            <p>
              <del> {{ product.mainPrice }}</del>
              <span style="color: orangered">TK {{ product.price }} </span>
            </p>
          </div>
          <div class="product-item-pic">
            <img :src="product.image" class="product-pic" alt="" />
          </div>
        </div>
      </div>

      <!--     Products-->

      <div class="sideTopProducts">
        <h6 class="shopLeft-Title">Products</h6>
        <div
          class="products-list"
          v-for="(product, index) in products"
          :key="index"
        >
          <div class="product-item-details">
            <p>
              <b>{{ product.name }}</b>
            </p>
            <p class="item-star">
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
            </p>
            <p>
              <del> {{ product.mainPrice }}</del>
              <span style="color: orangered">TK {{ product.price }} </span>
            </p>
          </div>
          <div class="product-item-pic">
            <img :src="product.image" class="product-pic" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
