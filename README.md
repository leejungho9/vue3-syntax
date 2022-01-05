# vue3 문법

*  보간법 
이중 중괄호 구문 기법을 사용한 문자열 보간법,　
<br> {{ message }} : 단순 텍스트 출력 message 속성이 변경될 때마다 갱신됨 

*  v-once
디렉티브를 사용하면 일회성 보간을 수행, 데이터가 갱신되더라도 화면에는 변화없음, 반응성을 가지지 않음
<br> <h1 v-once @click="add">{{ msg }}/h1>

*  원시 HTML 
이중 중괄호는 데이터를 HTML이 아닌 일반 텍스트로 해석, 실제 HTML을 출력하려면 v-html을 사용해야함
<br> <h1 v-html="msg"></h1>

### 속성
 
* v-bind 약어  (:) <br>
v-bind 생략  (:) <br> <a : href=“url></a> 

* v-on 약어 
<a v-on:click=“do”></a>
<br> <a @click=“do”></a>

### computed 
computed에 정의하는 익명함수는 반드시 값을 리턴하도록 작성되어야 한다.

*  computed 캐싱
computed는 캐싱기능이 있어 한 번 연산된 기록이 있으면 저장된 값을 화면에 출력해주어 
불필요한 리소스 낭비를 줄일수있음

*  computed getter , setter
읽기 전용 ... 반응형으로 동작할 수는 없음 / 값을 얻어내는 용도로만 사용(Getter)가능하지만 코드 추가로 (Setter) 기능도 사용할 수 있음
