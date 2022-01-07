<template>
  <div>
    Child :  {{ msg.value }}
  </div>
</template>

<script> 
    export default {
       inject : ['msg']
    }
</script>


<style scoped>

</style>