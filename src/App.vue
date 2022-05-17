<script>
import Footer from './components/Footer.vue'
import Header from "./components/Header";
import Navbar from './components/Navbar.vue';
import Search from './components/Search.vue';

export default {

  components: { Header, Footer, Navbar, Search },


}
</script>
<template>

  <div id="app" >
    <Header />
    <Navbar />
    <Search />
    <RouterView />
    <Footer />
  </div>

</template>
<style >

#app {
  font-family: 'Poppins', sans-serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  /*color: #2c3e50;*/
}

</style>
