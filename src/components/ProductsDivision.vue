<template>
<div class="product-division">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-4">
        <Featured />
      </div>
      <div class="col-sm-12 col-md-4">
        <TopRated />
      </div>
      <div class="col-sm-12 col-md-4">
        <OnSale />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Featured from "./Featured";
import TopRated from "./TopRated";
import OnSale from "./OnSale";
export default {
  name: "ProductsDivision",
  components: {OnSale, TopRated, Featured}
}
</script>

<style scoped>

</style>
