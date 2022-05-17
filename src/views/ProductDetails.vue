<script>
import CountDown from "../components/CountDown";
import ProductSpecification from "../components/ProductSpecification";
import SameCategoryProduct from "../components/SameCategoryProduct";
import Reviews from "../components/Reviews";


export default {
  name: "ProductDetails",
  components:{
    SameCategoryProduct,
    CountDown,
    ProductSpecification,
    Reviews
  },
  data(){
    return{
      bannerName:"SHOP",
      stock: 65,
      offer:20,
      title:"Cotton Shirt",
      proPrice: 800.00,
      pre_price: 1000.00,
      end: new Date('2022-04-02T16:37:00'),
      quantity: 0,
      model: "3KJ69SA-E",
      tinySliderOptions: {
        mouseDrag: true,
        loop: false,
        items: 4,
        gutter: 20,
        swipeAngle: 45,
        nav: false
      }
    }
  },
  methods: {

  }
}
</script>

<template>
<div class="products-details">
  <div class="common-banner">
    <div class="CBanner-inner">
      <h1>{{bannerName}}</h1>
      <button type="button" class="btn btn-CBanner"></button>
      <ul class="button-list">
        <li><a href="">Home</a></li>
        <li><a href="">Shop</a></li>
        <li><a class="current-page" href="">Products</a></li>
      </ul>
    </div>
  </div>

<!--  details-area-->
<div class="container">
  <div class="details-area">
    <div class="row">
      <div class="col-sm-12 col-md-5">
        <div class="products-image-area">
          <img class="img img-fluid" src="../assets/picture/products/shirt.jpeg">
          <span class="products-image-zoom"><b-icon icon="search"></b-icon></span>
        </div>
        <br>
        <br>
        <div class="products-additional-img">
          <tiny-slider :nav="false" :dots="false" :mouse-drag="true" :controls="false" :loop="false" :items="4" gutter="20" slideBy="page">
            <div class="addImgItem"><img class="img img-fluid" src="../assets/picture/products/shirt2.jpeg" alt=""> </div>
            <div class="addImgItem"><img class="img img-fluid" src="../assets/picture/products/t-shirt.jpeg" alt=""> </div>
            <div class="addImgItem"><img class="img img-fluid" src="../assets/picture/products/jacket.jpeg" alt=""> </div>
            <div class="addImgItem"><img class="img img-fluid" src="../assets/picture/products/shoe.jpeg" alt=""> </div>
            <div class="addImgItem"><img class="img img-fluid" src="../assets/picture/products/jacket.jpeg" alt=""> </div>
            <div class="addImgItem"><img class="img img-fluid" src="../assets/picture/products/shoe.jpeg" alt=""> </div>
          </tiny-slider>
        </div>
      </div>
      <div class="col-sm-12 col-md-7">
        <div class="top-product-option">
          <div>
            <ul>
              <li class="stock"> sale! </li>
              <li class="stock"> {{ stock }} is stock </li>
              <li class="stock" > {{ offer }} % </li>
            </ul>

          </div>
          <div>
            <ul >
              <li> <b-icon icon="arrow-left-circle"></b-icon> </li>
              <li> <b-icon icon="grid"></b-icon> </li>
              <li> <b-icon icon="arrow-right-circle"></b-icon> </li>
            </ul>
          </div>
        </div>
        <h3 class="pd_title mb-3"> {{title}} </h3>
        <p class="item-star">
          <span><i class="fas fa-star"></i></span>
          <span><i class="fas fa-star"></i></span>
          <span><i class="fas fa-star"></i></span>
          <span><i class="fas fa-star-half-alt"></i></span>
          <span><i class="far fa-star"></i></span>
          <span style="color: #0099FF"> 1 customer review</span>
        </p>
        <h3 class="pd_price mb-3 " style="font-weight: 600">TK : <i>{{proPrice}}</i> &nbsp;&nbsp;&nbsp; <span style="color: #7D7D7D; font-weight: lighter"> <del>{{pre_price}}</del> </span>  </h3>
        <p class="pd_details">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        <p style="margin: 0;color:#7D7D7D" ><span style="color: #F7BA01">Hurry Up </span> Limited Time Offer</p>
         <CountDown :date="end"></CountDown>
        <hr>
        <div class="size-color">
          <div class="size">
            <p>Color : </p>
            <div class="d-flex">
              <span class="color-choose color1" ></span>
              <span class="color-choose color2"></span>
              <span class="color-choose color3"></span>
            </div>
          </div>
          <div class="size">
            <p>Size : &nbsp;&nbsp; </p>
            <div class="d-flex">
              <span class="size-choose">XS</span>
              <span class="size-choose">S</span>
              <span class="size-choose">M</span>
              <span class="size-choose">L</span>
              <span class="size-choose">XL</span>
              <span class="size-choose">XXL</span>
              <span class="size-choose clear">clear</span>
            </div>
          </div>
        </div>
        <div class="proAddCart">
          <div class="proQuantity">
            <span @click="quantity--" style="cursor: pointer"> - &nbsp;</span>
            <p> {{ quantity }} </p>
            <span @click="quantity++" style="cursor: pointer">&nbsp; + </span>
          </div>
          <button type="button" class="btn proCart"> Add To Cart </button>
        </div>
        <div class="proAddItem">
          <ul>
            <li class="title-font"> <b-icon class="compare-icon" icon="arrow-repeat"></b-icon> <span>Compare</span> </li>
            <li class="title-font"><b-icon icon="heart"></b-icon>  <span>Add To Wishlist</span></li>
          </ul>
        </div>
        <hr>
        <div class="proAddItem">
          <ul>
            <li><b-icon icon="heart"></b-icon><span> Add To Wishlist</span></li>
            <li><b-icon icon="question-circle"></b-icon><span> Ask a Question</span> </li>
          </ul>
        </div>
        <p class="title-font"><b-icon icon="truck"></b-icon> Estimated Delivery: <span class="subtitle-font">With in 1 weeks</span></p>
        <p class="title-font"><b-icon icon="emoji-smile"></b-icon> 87 people <span class="subtitle-font">are viewing this right now</span></p>
        <hr>
        <p class="title-font">SKU: <span class="subtitle-font"> {{ model }} </span> </p>
        <p class="title-font">Categories: <span class="subtitle-font"> Man Dress, shirt </span></p>
        <p class="title-font">Tag: <span class="subtitle-font"> Simple </span> </p>
        <p class="share-products title-font">Share:
        <ul>
        <li style="background-color: #3b5998"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li style="background-color: #1da1f2"><a href=""><i class="fab fa-twitter"></i></a></li>
        <li style="background-color: #000"><a href=""><i class="fas fa-envelope"></i></a></li>
        <li style="background-color: #e60023"><a href=""><i class="fab fa-pinterest"></i></a></li>
        <li style="background-color: #0077b5"><a href=""><i class="fab fa-linkedin-in"></i></a></li>
        <li style="background-color: #1da1f2"><a href=""><i class="fab fa-facebook-messenger"></i></a></li>
        <li style="background-color: #25d366"><a href=""><i class="fab fa-whatsapp"></i></a></li>
        <li style="background-color: #08c"><a href=""><i class="fab fa-telegram"></i></a></li>
        <li style="background-color: #7360f2"><a href=""><i class="fab fa-viber"></i></a></li>
      </ul>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="specification-area">
        <ProductSpecification />
      </div>
    </div>
    <div class="row">
      <div class="same-as-products">
        <SameCategoryProduct />
      </div>
    </div>
    <div class="productReviews">
      <Reviews />
    </div>
  </div>
</div>
</div>
</template>


<style scoped>

</style>
