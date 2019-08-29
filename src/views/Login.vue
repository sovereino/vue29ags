<template>
  
</template>

<script>
export default {
methods: {
    upload(){
        const form = new FormData()
        form.append(this.text)

        axios.post('url', form);

        }
    }
}
</script>

<style>

</style>