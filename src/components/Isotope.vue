<template>
  <div class="isotope-area">
    <div class="container">
      <div id="main">
        <span style="color: orangered" class="offer-text">Special offer </span>
        <h3 class="collection-name">TOP COLLECTIONS 2022</h3>
        <div class="button-group">
          <button v-for="(val, key) in option.getFilterData" class="button" v-bind:key="key" v-bind:class="[key===filterOption? 'is-checked' : '']" @click="filter(key)">{{key}}
          </button>
        </div>

         <isotope ref="cpt" class="row" id="root_isotope1"  :item-selector="'element-item'"  :list="list" :options='option' @filter="filterOption=arguments[0]" @sort="sortOption=arguments[0]" @layout="currentLayout=arguments[0]">
           <div class="col-md-4 col-lg-3" v-for="element,index in list" :class='[element.category]'  :key="index" >
             <div class="card w-100">
               <img class="card-img-top img-fluid first-image" :src='element.image'>
               <img class="card-img-top img-fluid second-image" :src='element.image2'>
               <div class="offer-sale">
                 <span class="offer">{{element.offer}}</span>
                 <span class="sale">{{element.sale}} !</span>
               </div>
               <div class="hover-item">
                 <div class="add-section">
                   <a class="add-section-item" href="#"><b-icon icon="eye"></b-icon></a>
                   <a class="add-section-item" href="#"><b-icon icon="heart"></b-icon></a>
                   <a class="add-section-item" href="#"><b-icon class="compare-icon" icon="arrow-repeat"></b-icon></a>
                 </div>
                 <button class="btn btn-add-cart"> Add to Cart </button>
               </div>
               <div class="card-body">
                 <div class="first-text d-flex mb-2" style="justify-content: space-between">
                   <p class="item-star">
                     <span><i class="fas fa-star"></i></span>
                     <span><i class="fas fa-star"></i></span>
                     <span><i class="fas fa-star"></i></span>
                     <span><i class="fas fa-star-half-alt"></i></span>
                     <span><i class="far fa-star"></i></span>
                   </p>
                   <p class="item-pp">
                     <del>{{element.p_price}}</del>
                   </p>
                 </div>
                 <div class="second-text d-flex" style="justify-content: space-between">
                   <p class="item-name"><b>{{element.name}}</b></p>
                   <p class="card-p">{{element.price}}</p>
                 </div>
               </div>
             </div>
           </div>
         </isotope>
      </div>
    </div>
  </div>
</template>

<script>
import isotope from 'vueisotope'
export default {
  name: "Isotope",
  components: {
    isotope,
  },
    data() {
    return{

      list: [{
        name: "Cherry Bag",
        // symbol: "Hg",
        offer: "30%",
        p_price: "480 TK",
        price: "400 TK",
        weight: 200.59,
        category: "watch",
        clothes: true,
        sale: "sale",
        image : require("../assets/picture/products/bag.jpeg"),
        image2 : require("../assets/picture/products/shoe.jpeg"),
      }, {
        name: "Black Shoe",
        offer: "30%",
        p_price: "480 TK",
        price: "400 TK",
        number: 52,
        weight: 127.6,
        category: "shoes",
        sale: "sale",
        image : require("../assets/picture/products/shoe.jpeg"),
        image2 : require("../assets/picture/products/t-shirt.jpeg"),
      }, {
        name: "Nevy Blue Sweater",
        offer: "30%",
        p_price: "480 TK",
        price: "400 TK",
        number: 83,
        weight: 208.980,
        category: "shoes",
        clothes: true,
        sale: "sale",
        image : require("../assets/picture/products/t-shirt.jpeg"),
        image2 : require("../assets/picture/products/bag.jpeg"),
      }, {
        name: "Dark Gray Sweater",
        offer: "30%",
        p_price: "480 TK",
        price: "400 TK",
        number: 82,
        weight: 207.2,
        category: "shoes",
        clothes: true,
        sale: "sale",
        image : require("../assets/picture/products/shirt2.jpeg"),
        image2 : require("../assets/picture/products/women-dress.jpeg"),
      }, {
        name: "Modelling Women",
        offer: "30%",
        p_price: "480 TK",
        price: "400 TK",
        number: 79,
        weight: 196.967,
        category: "watch",
        clothes: true,
        sale: "sale",
        image : require("../assets/picture/products/wopmen.jpeg"),
        image2 : require("../assets/picture/products/shirt2.jpeg"),

      }, {
        name: "Women Dress",
        offer: "30%",
        p_price: "480 TK",
        price: "400 TK",
        number: 19,
        weight: 39.0983,
        category: "w-clothes",
        clothes: true,
        sale: "sale",
        image : require("../assets/picture/products/women-dress.jpeg"),
        image2 : require("../assets/picture/products/wopmen.jpeg"),
      }, {
        name: "Brown Sweater",
        offer: "30%",
        p_price: "480 TK",
        price: "400 TK",
        number: 11,
        weight: 22.99,
        category: "w-clothes",
        clothes: true,
        sale: "sale",
        image : require("../assets/picture/products/dress2.jpeg"),
        image2 : require("../assets/picture/products/wopmen.jpeg"),

      }, {
        name: "Winter Hat",
        offer: "30%",
        p_price: "480 TK",
        price: "400 TK",
        number: 48,
        weight: 112.411,
        category: "watch",
        clothes: true,
        sale: "sale",
        image : require("../assets/picture/products/hat3.jpeg"),
        image2 : require("../assets/picture/products/hat.jpeg"),

      }, {
        name: "Brown Cotton sweater ",
        offer: "30%",
        p_price: "480 TK",
        price: "400 TK",
        number: 20,
        weight: 40.078,
        category: "w-clothes",
        clothes: true,
        sale: "sale",
        image : require("../assets/picture/products/dress3.jpeg"),
        image2 : require("../assets/picture/products/wopmen.jpeg"),

      }, {
        name: "Green Jacket",
        offer: "30%",
        p_price: "480 TK",
        price: "400 TK",
        number: 75,
        weight: 186.207,
        category: "watch",
        clothes: true,
        sale: "sale",
        image : require("../assets/picture/products/jacket.jpeg"),
        image2 : require("../assets/picture/products/jacket.jpeg"),
      }, {
        name: "Style Hat",
        offer: "30%",
        p_price: "480 TK",
        price: "400 TK",
        number: 70,
        weight: 173.054,
        category: "shoes",
        sale: "sale",
        image : require("../assets/picture/products/hat.jpeg"),
        image2 : require("../assets/picture/products/hat3.jpeg"),

      }, ],
      currentLayout: 'masonry',
      masonry: {
        // columnWidth: 40,
        columnWidth: 20,
        isFitWidth: true
      },
      selected: null,
      sortOption: "original-order",
      filterOption: "show all",
      option: {
        itemSelector: ".element-item",
        getFilterData: {
          "ALL": function() {
            return true;
          },
          "FASHION CLOTHES": function(el) {
            return !!el.clothes;
          },
          "SMART WATCH": function(el) {
            return el.category === "watch";
          },
          "WOMEN CLOTHES": function(el) {
            return el.category === "w-clothes" ;
          //  || el.category === "alkaline-earth"
          },
          "CASUAL SHOES": function(el) {
            return el.category !== "shoes";
          },

        },
      }

    }
    },
    methods: {
      sort: function(key) {
        this.$refs.cpt.sort(key);
      },
      filter: function(key) {
        this.$refs.cpt.filter(key);
      },
      changeLayout: function(key) {
        this.$refs.cpt.layout(key);
      }
    }

}
</script>

<style scoped>

</style>
