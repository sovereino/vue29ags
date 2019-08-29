<template>
  <div class="container mt-5">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>


<script>
  import Navbar from './components/Navbar';
  export default {
    components: {
      Navbar
    },
    data(){
      return {
        
      }
    },
    methods: {
      say(){
        window.alert('Say Hai')
      }
    },
    computed: {

    }
  }
</script>

  

