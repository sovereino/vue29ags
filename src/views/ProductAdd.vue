<template>
  <div class="card">
      <div class="card-header">
          Add New Product
      </div>
      <div class="card-body">
          <Inputan label="Nama" />
          <Inputan label="Harga" type="number" />
          <Inputan label="Save" />
      </div>
  </div>
</template>

<script>
import Inputan from "@/components/Inputan";
import Tombol from "@/components/Tombol";

export default {
components: {
    Inputan,
    Tombol
    },

    data(){
        return{
            name: '',
            price: 0,
        }
    }
};
</script>

<style>

</style>