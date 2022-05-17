<template>
  <div class="div" >
    <div class="banner-area">
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="slider-title">
                <h3><b>Best deal !</b></h3>
                <h5>Top Bag Collection</h5>
                <p>Get up to <span style="color: orangered">50%</span> off Today</p>
                <button class="btn btn-info">Shop Now</button>
              </div>
              <img src="../assets/picture/bag1.png" class="img-fluid" alt="">
            </div>
            <div class="carousel-item">
              <div class="slider-title">
                <h3><b>Best deal !</b></h3>
                <h5>Top Headphone </h5>
                <p>Get up to <span style="color: orangered">50%</span> off Today</p>
                <button class="btn btn-info">Shop Now</button>
              </div>
              <img src="../assets/picture/headphone1.png" class="img-fluid" alt="">
            </div>
            <div class="carousel-item">
              <div class="slider-title">
                <h3><b>Best deal !</b></h3>
                <h5>Smart Watch</h5>
                <p>Get up to <span style="color: orangered">50%</span> off Today</p>
                <button class="btn btn-info">Shop Now</button>
              </div>
              <img src="../assets/picture/watch1.png" class="img-fluid" alt="">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" ><i class="fas fa-chevron-left" style="color: black"></i></span>
            <span class="visually-hidden">prev</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"><i class="fas fa-chevron-right" style="color: black"></i></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </div>
    <CardItem />
    <Isotope />
    <DayItem />
    <Categories />
    <ProductsDivision />
  </div>
</template>

<script>
import CardItem from "../components/CardItem";
import Isotope from "../components/Isotope";
import DayItem from "../components/DayItem";
import Categories from "../components/Categories";
import ProductsDivision from "../components/ProductsDivision";
export default {
  name: "Home",
  components: {ProductsDivision, Categories, DayItem, Isotope, CardItem},

}
</script>


