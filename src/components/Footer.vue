<template>
  <footer class="footer">
    <!-- Subscrive area-->
    <div class="container">
      <div class="subscribe-area">
        <div class="row">
          <div class="col-sm-6">
            <div class="subscribe-text">
              <h3>Subscribe Now!</h3>
              <p>Venam By Signing Up To Our Newsletter.</p>
            </div>
          </div>
          <div class="col-sm-6 ">
            <form class="subscribe-option">
              <input type="email" input class="form-email" placeholder="Enter Your Email...">
              <button class="subs-btn" alt="">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <hr>
      <!-- More Page Area-->
      <div class="more-page">
        <p><b>Find Out More</b></p>
        <div class="page-list">
          <p class="page-item">
            <span class="page-cat">Main&nbsp;Categories:</span>
            <span>Accessories</span>
            <span>Adapters</span>
            <span>Batteries</span>
            <span>Webcams</span>
            <span>Electronics</span>
            <span>Dress</span>
            <span>Bags & Cases</span>
            <span>Shoes</span>
            <span>Receivers</span>
          </p>
        </div>
      </div>
      <!-- More details area -->
      <div class="footer-details">
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <div class="site-details">
              <p class="footer-option-title" ><b>MyShopping</b></p>
              <p style="color: #7D7D7D">Namkand sodales vel online best prices Amazon Check out ethnic wear, formal wear western wear Blood Pressure Rate Monito.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="footer-service">
              <p class="footer-option-title"><b>Customer Services</b></p>
              <ul>
                <li>Help Center</li>
                <li>Returns</li>
                <li>Product Recalls</li>
                <li>Accessibility</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="footer-links">
              <p class="footer-option-title"><b>Quick Links</b></p>
              <ul>
                <li>Return Policy</li>
                <li>Terms Of Use</li>
                <li>Security</li>
                <li>About us</li>
                <li>Store Pickup</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="footer-contact">
              <p class="footer-option-title"><b>Contact Us</b></p>
              <ul>
                <li><i class="fas fa-map-marker-alt"></i> &nbsp;Sector 8, Uttara, Dhaka </li>
                <li><i class="fas fa-phone"></i> &nbsp;01834960466</li>
                <li><i class="fas fa-envelope"></i> &nbsp;ma.nahid960@gmail.com</li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--container end div-->
    </div>
    <!--container end div-->

    <!-- Last footer area -->
    <div class="last-footer">
      <div class="container">
        <div class="footer-right-text">{{ new Date().getFullYear() }} © MyShopping.Design & Develop by Web Hunter</div>
        <div>
          <ul class="footer-social">
            <p><b>Follow Us : </b></p>
            <li>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mobile-footer fixed-bottom">
      <div class="mobile-footer-item">
        <b-icon icon="shop"></b-icon>
        <span>Store</span>
      </div>
      <div class="mobile-footer-item">
        <b-icon icon="search"></b-icon>
        <span>Search</span>
      </div>
      <div class="mobile-footer-item">
        <b-icon icon="heart"></b-icon>
        <span>Wishlist</span>
      </div>
      <div class="mobile-footer-item">
        <b-icon icon="bag"></b-icon>
        <span>Cart</span>
      </div>
      <div class="mobile-footer-item">
        <b-icon icon="person"></b-icon>
        <span>user</span>
      </div>
    </div>

  </footer>
</template>

<script>

export default {
  name: 'Footer'
}
</script>
