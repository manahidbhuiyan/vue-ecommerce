<template>
  <div class="featured">
      <div class="carousel-top">
        <h5>On Sale products</h5>
        <a href="#">view all </a>
      </div>
    <hr>
    <div class="card-product " v-for="element,index in list" :class='[element.category]'  :key="index" >
      <div class="card-thumbnail">
        <img class="img-fluid featured-img" :src='element.image'>
        <!--     <span class="sale">{{element.sale}} !</span>-->
      </div>

      <div class="card-text">
        <p class="item-name"><b>{{element.name}}</b></p>
        <p class="card-p">BAN {{element.price}}</p>
        <p class="item-star">
          <span><i class="fas fa-star"></i></span>
          <span><i class="fas fa-star"></i></span>
          <span><i class="fas fa-star"></i></span>
          <span><i class="fas fa-star-half-alt"></i></span>
          <span><i class="far fa-star"></i></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnSale",
  data() {
    return {

      list: [{
        name: "Black Cherry Bag",
        // symbol: "Hg",
        offer: "30%",
        p_price: "480 TK",
        price: "400 TK",
        weight: 200.59,
        category: "watch",
        clothes: true,
        sale: "sale",
        image: require("../assets/picture/products/bag.jpeg"),
        image2: require("../assets/picture/products/shoe.jpeg"),
      },
        {
          name: "Panda Black Shoe",
          offer: "30%",
          p_price: "480 TK",
          price: "400 TK",
          number: 52,
          weight: 127.6,
          category: "shoes",
          sale: "sale",
          image: require("../assets/picture/products/shoe.jpeg"),
          image2: require("../assets/picture/products/t-shirt.jpeg"),
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
