<template>
  <h1
    :[attr]="'active'"
    @[event]="add">
    {{ msg }}
  </h1>
</template>

<script>
  export default {
    data() {
      return {
        msg : 'active',
        attr : 'class',
        event : 'click'
      }
    },
    methods : {
      add() {
        this.msg += '!'
      }
    }
  }
</script>

<style scoped>
  .active {
    color : red;
  }
</style>