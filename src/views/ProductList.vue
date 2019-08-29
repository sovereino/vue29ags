<template>
<div>
  <table class="table table-bordered table-striped table-hover">
    <head>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Harga</th>
      </tr>
    </head>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{++index}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td></td>
        <td>Total</td>
        <td>{{ total }}</td>
      </tr>
    </tfoot>
  </table>
</div>
</template>

<script>
export default {
data() {
return{
    items: [
        {id: 1, name: 'Sepatu', price: 150000},
        {id: 2, name: 'Baju', price: 100000},
        {id: 3, name: 'Celana', price: 50000},
        {id: 1, name: 'Ikat Pinggang', price: 250000},
    ]
    };
},

computed: {
    total() {
        return this.items
        .map(item => Number(item.price))
        .reduce((prev, current) => prev + current, 0)
            }
    }
}
</script>

<style>
</style>