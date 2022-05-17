<script>
import carousel from 'vue-owl-carousel'
export default {
  name: "SameCategoryProduct",
  components:{
    carousel,
  },
  data(){
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

      },
      ],
      // tinySliderOptions: {
      //   container: '.my-slider',
      //   loop: true,
      //   items: 1,
      //   slideBy: 'page',
      //   nav: false,
      //   autoplay: true,
      //   speed: 400,
      //   autoplayButtonOutput: false,
      //   mouseDrag: true,
      //   lazyload: true,
      //   controlsContainer: "#customize-controls",
      //   responsive: {
      //     640: {
      //       items: 2,
      //     },
      //
      //     768: {
      //       items: 3,
      //     }
      //   }
      // }
    }
  }

}
</script>

<template>
<div>
  <div class="isotope-area">

    <div class="sameProduct">
<!--  <tiny-slider :nav="false" :dots="false" :speed="400" :autoplay="true" :autoplayTimeout="3000" :autoplayButtonOutput="false"-->
<!--               :mouse-drag="true" :controls="false" :loop="true" :items="4" :gutter="20" :slideBy="page">-->
<!--         <div class="col-md-4 col-lg-3" v-for="element,index in list" :class='[element.category]'  :key="index" >-->
<!--            <div class="card w-100">-->
<!--              <img class="card-img-top img-fluid first-image" :src='element.image'>-->
<!--              <img class="card-img-top img-fluid second-image" :src='element.image2'>-->
<!--              <div class="offer-sale">-->
<!--                <span class="offer">{{element.offer}}</span>-->
<!--                <span class="sale">{{element.sale}} !</span>-->
<!--              </div>-->
<!--              <div class="hover-item">-->
<!--                <div class="add-section">-->
<!--                  <a class="add-section-item" href="#"><b-icon icon="eye"></b-icon></a>-->
<!--                  <a class="add-section-item" href="#"><b-icon icon="heart"></b-icon></a>-->
<!--                  <a class="add-section-item" href="#"><b-icon class="compare-icon" icon="arrow-repeat"></b-icon></a>-->
<!--                </div>-->
<!--                <button class="btn btn-add-cart"> Add to Cart </button>-->
<!--              </div>-->
<!--              <div class="card-body">-->
<!--                <div class="first-text d-flex mb-2" style="justify-content: space-between">-->
<!--                  <p class="item-star">-->
<!--                    <span><i class="fas fa-star"></i></span>-->
<!--                    <span><i class="fas fa-star"></i></span>-->
<!--                    <span><i class="fas fa-star"></i></span>-->
<!--                    <span><i class="fas fa-star-half-alt"></i></span>-->
<!--                    <span><i class="far fa-star"></i></span>-->
<!--                  </p>-->
<!--                  <p class="item-pp">-->
<!--                    <del>{{element.p_price}}</del>-->
<!--                  </p>-->
<!--                </div>-->
<!--                <div class="second-text d-flex" style="justify-content: space-between">-->
<!--                  <p class="item-name"><b>{{element.name}}</b></p>-->
<!--                  <p class="card-p">{{element.price}}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--  </tiny-slider>-->
      <div class="tiny-slider-top">
        <h3>Viewars Also Like</h3>
<!--        <ul class="controls" id="customize-controls" aria-label="Carousel Navigation" tabindex="0">-->
<!--          <li style="list-style: none" class="prev" data-controls="prev" aria-controls="customize" tabindex="-1">-->
<!--            <i class="fas fa-angle-left"></i>-->
<!--          </li>-->
<!--          <li class="next" data-controls="next" aria-controls="customize" tabindex="-1">-->
<!--            <i class="fas fa-angle-right"></i>-->
<!--          </li>-->
<!--        </ul>-->
      </div>

      <carousel  :autoplay="true" :speed="400" :nav="true" :dots="false" :responsive="{0:{items:1,nav:false},600:{items:2,nav:false},991:{items:3,nav:false},1200:{items:3,nav:false},1500:{items:4,nav:false}}">
        <template slot="prev"><span class="prev prev-customize-icon"> <i class="fas fa-angle-left"></i></span></template>
        <template slot="next"><span class="next next-customize-icon"> <i class="fas fa-angle-right"></i></span></template>

        <div class="card" v-for="element,index in list" :class='[element.category]'  :key="index">
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

      </carousel>


    </div>
    </div>
</div>
</template>

<style scoped>

</style>
