<template>
  <div>
    <table>
      <tbody>
        <tr v-for="(artikelx, index) in artikel" :key="index">
          <td>{{ ++index }}</td>
          <td>
            <router-link class="nav-link" :to="'/web/' +artikelx.id">{{artikelx.title}}</router-link>
          </td>
          <td>{{ artikelx.content }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async mounted() {
    const response = await axios.get("http://192.168.99.100:8000/api/blog");
    this.artikel = response.data.data;
  },
  data() {
    return {
      artikel: []
    };
  }
};
</script>

<style>
</style>