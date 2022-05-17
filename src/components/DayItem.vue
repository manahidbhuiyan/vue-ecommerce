<template>
<div class="deal-day">
  <div class="container">
    <div class="row no-gutters">
      <div class="col-lg-5 ">
          <div class="non-carousel">
            <img class="img img-fluid deal-day-picture" src="../assets/picture/banner2.jpg">
            <p class="banner-down-text">This campaign is limited to stocks, the last day is July 10th.</p>
          </div>
      </div>
      <div class="col-lg-7 ">
        <div class="carousel-top">
          <h3>Deal of the Day</h3>
          <a href="#">view all </a>
        </div>
        <hr>
        <carousel :autoplay="true" :nav="false" :dots="false" :items="3" :responsive="{0:{items:1,nav:false},600:{items:2,nav:false},991:{items:2,nav:false},1200:{items:2,nav:false},1500:{items:3,nav:false}}">
          <div class="card" v-for="element,index in list" :class='[element.category]'  :key="index" >
            <img class="card-img-top img-fluid first-image" :src='element.image'>
            <img class="card-img-top img-fluid second-image" :src='element.image2'>
<!--            <span class="offer">{{element.offer}}</span>-->
            <span class="sale">{{element.sale}} !</span>
            <div class="hover-item">
              <div class="add-section">
                <a class="add-section-item" href="#"><b-icon icon="eye"></b-icon></a>
                <a class="add-section-item" href="#"><b-icon icon="heart"></b-icon></a>
                <a class="add-section-item" href="#"><b-icon class="compare-icon" icon="arrow-repeat"></b-icon></a>
              </div>
              <button class="btn btn-add-cart"> Add to Cart </button>
            </div>
            <div class="card-body">
              <div class="card-body-top">
                <div class="first-text text-center mb-2" >
                  <p class="item-star"><b>{{ element.name}}</b>
                  </p>
                </div>
                <div class="second-text">
                  <p class="card-p" style="color: orangered">{{element.price}} &nbsp; </p>
                  <p class="item-name">| &nbsp;{ {{ element.discount }} % off&nbsp;}</p>
                </div>
              </div>
              <div class="card-body-bottom">
                <div class="products">
                  <p>Total Sold : {{ element.value}}</p>
                  <p>Stocks : {{ element.max}}</p>
                </div>
                <b-progress :value="element.value" :max="element.max" class="sell-progress"></b-progress>
                <p class="text-center" ><span style="color: #F7BA01">Hurry Up </span> Limited Time Offer</p>
                <template>
                  <div>
                    <CountDown :date="element.end"></CountDown>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import carousel from 'vue-owl-carousel'
// import Countdown from 'vuejs-countdown'
import CountDown from "./CountDown";


export default {
  name: "DayItem",

  components: { carousel, CountDown  },

  data() {
    return{
      list: [{
        name: "Cherry Bag",
        value: 5,
        max: 20,
        discount: "23",
        price: "700 TK",
        sale: "sale",
        // date: "August 22, 2022",
        image : require("../assets/picture/products/bag.jpeg"),
        image2 : require("../assets/picture/products/shoe.jpeg"),
        end: new Date('2022-01-30T16:37:00'),
      }, {
        name: "Black Shoe",
        value: 0,
        max: 30,
        price: "1200 TK",
        discount: "25",
        sale: "sale",
        image : require("../assets/picture/products/shoe.jpeg"),
        image2 : require("../assets/picture/products/t-shirt.jpeg"),
        end: new Date('2022-02-02T16:37:00'),
      },{
        name: "Dark Gray Sweater",
        value: 1,
        max: 25,
        price: "900 TK",
        discount: "12",
        sale: "sale",
        image : require("../assets/picture/products/shirt2.jpeg"),
        image2 : require("../assets/picture/products/women-dress.jpeg"),
        end: new Date('2022-03-02T16:37:00'),
      },{
        name: "Modelling Women",
        value: 10,
        max: 20,
        price: "1500 TK",
        discount: "17",
        sale: "sale",
        image : require("../assets/picture/products/wopmen.jpeg"),
        image2 : require("../assets/picture/products/shirt2.jpeg"),
        end: new Date('2022-02-27T16:37:00'),
      },{
          name: "Winter Hat",
          value: 5,
          max: 15,
          price: "100 TK",
          discount: "35",
          sale: "sale",
          image : require("../assets/picture/products/hat3.jpeg"),
          image2 : require("../assets/picture/products/hat.jpeg"),
        end: new Date('2022-03-02T16:37:00'),

        },],

      }

  },
}

</script>

<style scoped>

</style>
