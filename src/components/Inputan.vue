<template>
  <div class="form-group">
      <label>{{label}}</label>
      <input 
            :type='text'
            class='form-control'
            :value='value'
            @update="$emit('update')"
        >
  </div>
</template>

<script>
export default {
    props: ['label', 'type', 'value'],
    data() {
        return {
            value: ''
        }
    }
}
</script>

