<template>
  <h1 @click="increase">
    {{ count }} / {{ doubleCount }}
  </h1>
  <h1 @click="changeMessage">
    {{ message }} / {{ reverseMessage }}
  </h1>
</template>

<script>
export default {
  data () {
    return {
      count : 0,
      message: 'hello'
    }
  },
  computed : {
    doubleCount() {
      return this.count *2
    },
    reverseMessage() {
      return this.message.split('').reverse().join('')
    }
  },
  watch : {
    message(newValue) {
      console.log(newValue)
    }
  },
  created () {
    console.log(this.message)
  },
  mounted () {
    console.log(this.count)
  },
   methods : {
    increase () {
      this.count += 1
    },
    changeMessage() {
      this.message = 'Good?'
    },
  },
}
</script>