<template>
  <h1 @click="increase">
    {{ count }} / {{ doubleCount }}
  </h1>
  <h1>
    {{ message }} / {{ reversedMessage }}
  </h1>
</template>


<script type= text/javascript > 
export default {
  data() {
    return {
      message : 'Hello world',
      count : 0
    }
  },
  computed : {
    doubleCount () {
      return this.count * 2
    },
    reversedMessage () {
      return this.message.split('').reverse().join('')
    }
  },
  methods : {
    increase () {
      this.count +=1
    }
  }
}

</script>
