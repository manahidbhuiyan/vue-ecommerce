<script>
import SpecificationWebsite from "./SpecificationWebsite";
export default {
  name: "ProductSpecification",
  components: { SpecificationWebsite},
  data(){
    return{
    isActive: false,
    isOn: false,
    isAddActive: false,
    isAddOn: false,
    isShowActive: false,
    isShowOn: false,
    isSpeActive: false,
    isSpeOn: false,
    }
  },
  methods:{
    descriptionShow(){
      this.isActive = true
      this.isOn = false
      this.isAddActive = false
      this.isShowActive = false
      this.isSpeActive = false
      // this.isAddOn = true
      // this.isShowOn = true
      // this.isSpeOn = true
      console.log("hello")
    },
    AdditionalInfo(){
      this.isOn = true
      this.isAddActive = true
      this.isAddOn = false
      this.isShowOn = true
      this.isSpeOn = true

      // this.isOn = true
      // this.isShowOn = true
      // this.isSpeOn = true
    },
    showcase(){
      this.isOn = true
      this.isAddOn = true
      this.isShowActive = true
      this.isShowOn = false
      this.isSpeOn = true
      // this.isAddOn = true
      // this.isOn = true
      // this.isSpeOn = true
    },
    specificationShow(){
      this.isOn = true
      this.isAddOn = true
      this.isShowOn = true
      this.isSpeActive = true
      this.isSpeOn = false
      // this.isAddOn = true
      // this.isShowOn = true
      // this.isOn = true
    }
  }
}
</script>

<template>
<div>
  <div class="proSpecification">
    <button @click="descriptionShow" type="button" class="btn btn-specification"> Description </button>
    <button @click="AdditionalInfo" type="button" class="btn btn-specification"> Additional Information </button>
    <button @click="showcase" type="button" class="btn btn-specification"> Showcase </button>
    <button @click="specificationShow" type="button" class="btn btn-specification"> Specification </button>
  </div>
  <div class="specification-details">
    <div class="description" v-bind:class="{'show':isActive,'hide':isOn }">
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        Vivamus bibendum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit.Contrary to popular belief,
        Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old.
        <br><br>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
        atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        Et harum quidem rerum facilis est et expedita distinctio.</p>
    </div>
    <div class="additional" v-bind:class="{'show':isAddActive,'hide':isAddOn }">
      <p><span>Color </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span><a href="#">Black</a></span>,<span><a href="#"> Blue</a></span>,
        <span><a href="#"> Pink</a></span>,<span><a href="#"> Yellow</a></span>,<span><a href="#"> Red</a></span> </p>
      <p class="addSize">Size &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>XS</span>,<span> S</span>,<span> M</span>,<span> L</span>,<span> XL</span>,<span> XXL</span>, </p>
    </div>
    <div class="showcase" v-bind:class="{'show':isShowActive,'hide':isShowOn }"></div>
    <div class="specification" v-bind:class="{'show':isSpeActive,'hide':isSpeOn }">
      <SpecificationWebsite />
    </div>
  </div>
</div>

</template>

<style scoped>

</style>
