
<script>
export default {
  name: "Reviews",
  data(){
    return{
      sizes: ['Rate..','Perfect', 'Good', 'Average', 'Not that bad', 'poor', 'Very poor'],
      list:[
        {
          title:"Reviews",
          author: "Admin",
          // adminOption: "(verified owner) –",
          date:"July 8, 2021",
          text:"Contrary to popular belief, Lorem Ipsum is not simply random text." +
              " It has roots in a piece of classical Latin literature from 45 BC," +
              " making it over 2000 years old. Vivamus bibendum magna Lorem ipsum dolor sit amet," +
              " consectetur adipiscing elit.Contrary to popular belief, Lorem Ipsum is not simply random text." +
              " It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
          author: "Mahabub Alam",
          date:"Feb 2, 2022",
          text:"Contrary to popular belief, Lorem Ipsum is not simply random text." +
              " It has roots in a piece of classical Latin literature from 45 BC," +
              " making it over 2000 years old. Vivamus bibendum magna Lorem ipsum dolor sit amet,"
        },
      ]
    }
  }
}
</script>

<template>
<div class="reviews-area">
  <h3 class="reviews-area-title">Product Reviews</h3>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <div class="review-left" v-for="(item, index) in list" :key="index">
        <h5 class="review-title">{{ item.title }}</h5>
        <div class="review">
          <div class="review-owner-img">
            <img class="img-thumbnail" src="../assets/picture/person/person1.png">
          </div>
          <div class="review-details">
            <div class="review-details-top d-flex justify-content-between">
              <h5>{{ item.author }} <span class="innerTitle">{{item.adminOption}} - {{ item.date }}</span> </h5>
              <p class="item-star">
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star-half-alt"></i></span>
                <span><i class="far fa-star"></i></span>
              </p>
            </div>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
<!--    -->
    <div class="col-sm-12 col-md-6">
      <div class="review-left">
        <h5 class="review-title">Add a review</h5>
        <span class="innerTitle">Your email address will not be published. Required fields are marked *</span>
        <p style="margin:15px 0 10px 0;">Your rating <span style="color: orangered; margin-bottom: 5px">*</span></p>
        <p class="item-star item-star2">
          <span><i class="far fa-star"></i></span>
          <span><i class="far fa-star"></i></span>
          <span><i class="far fa-star"></i></span>
          <span><i class="far fa-star"></i></span>
          <span><i class="far fa-star"></i></span>
        </p>
        <div class="form-group">
          <select class="form-control" id="my-list-id">
            <option v-for="(size,id) in sizes" :key="id">{{ size }}</option>
          </select>
        </div>

        <p style="margin:15px 0 10px 0;">Your Review <span style="color: orangered; margin-bottom: 5px">*</span></p>
        <textarea class="review-text" rowspan="10" ></textarea>
        <div class="author d-flex justify-content-between">
          <div class="name">
            <label>NAME <span style="color: orangered; margin-bottom: 5px">*</span></label><br>
            <span class="email-input"><input type="text" class="login-email"><br></span>
          </div>
          <div class="email">
            <label>EMAIL <span style="color: orangered; margin-bottom: 5px">*</span></label><br>
            <span class="email-input"><input type="text" class="login-email"><br></span>
          </div>
        </div>
        <div><input type="checkbox"><span style="color: #7d7d7d">&nbsp; Save my name, email, and website in this browser for the next time I comment.</span></div>
        <button type="submit" class="btn btn-review">Submit</button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
