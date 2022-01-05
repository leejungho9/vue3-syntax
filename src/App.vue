<template>
  <h1 @click="changeMessage">
    {{ msg }}
  </h1>
  <h1> {{ reversedMessage }}</h1>
</template>

<script>
export default {
  data () {
    return { 
      msg : "Hello?"
    }
  },
  computed : { 
    reversedMessage() {
      return this.msg.split('').reverse().join('')
    }
  },
  watch : { //데이터를 감시하는 용도의 옵션 
    msg() {
      console.log('msg:',this.msg) // msg : Good! 출력
    },
    reversedMessage () { // 계산된 데이터도 감시 가능
      console.log('reversedMessage:', this.reversedMessage) // reversedMessage: !dooG 출력
    }
  },
  methods : {
    changeMessage() {
      this.msg ='Good!'
    }
  },
}
</script>