<template>
  <h1 @click="increase">
    {{ count }} 
  </h1>
  <h1 @click="changeMessage">
    {{ message }} 
  </h1>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue'
export default {
  
  //created라는 라이프사이클 컴포넌트가 생성된 후 실행되기 때문에 따로 import 안해도 된다.
  setup() {
    //count 관련
    const count = ref(0)
    const doubleCount = computed(() => {
      return count.value * 2
    })
    function increase () {
      count.value += 1
    }

    //message 관련
    const message = ref('hello')
    const reverseMessage = computed(() => {
      return this.message.value.split('').reverse().join('')
    })
    watch(message, (newValue) => {
      console.log(newValue)
    })
    function changeMessage () {
      message.value = 'Goood?'
    }
    //created 라이프사이클과 동일한 결과
    console.log(message.value)
    //mounted == onMounted
    onMounted (() => {
      console.log(count.value)
    })

    return {
      count, 
      increase,
      doubleCount,

      message,
      changeMessage,
      reverseMessage
    }
  }
}