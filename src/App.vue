<template>
  <button @click="add">
    ADD
  </button>
  <h1> {{ reversedMessage }}</h1>
  <h1> {{ reversedMessage }}</h1>
</template>

<script>
export default {
  data () {
    return { 
      // 값을 얻어내는 용도(Getter) / 값을 지정하는 용도 (Setter) 다 가능
      msg : "hello Computed"
    }
  },
  computed : { //캐싱기능이 있어 이미 연산된 기록이 있으면 저장된 값을 화면에 출력해줌
  //  (Getter)읽기 전용 ... 반응형으로 동작할 수는 없음 / 값을 얻어내는 용도로만 사용
  //  reversedMessage () { 
  //    this.msg.split('').reverse().join('' )
  //   }
  // Getter , Setter 
  reversedMessage : {
    get() {
      return this.msg.split('').reverse().join('' )  //?!Hello computer (2)
    },
    set(newValue)  {
     this.msg = newValue //detupmoc olleH  + !?  (1) 
    }
   }
  },
  methods : {
    add() {
      this.reversedMessage += '!?'
    }
  }
  
}
</script>
