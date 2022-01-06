# vue3 문법

### 문자열 보간법 
 Mustache” 구문(이중 중괄호)구문 기법을 사용한 텍스트 보간법  
 {{ message }} : 단순 텍스트 출력 message 속성이 변경될 때마다 갱신됨 

###  원시 HTML 
이중 중괄호는 데이터를 HTML이 아닌 일반 텍스트로 해석, 실제 HTML을 출력하려면 v-html을 사용해야함
### 속성
* v-bind : 데이터를 가져와 사용할 때 사용, v-bind 생략하고 콜론(:) 으로 사용 가능  
* v-on : 이벤트 연결할 때 사용, v-on생략하고 @ 으로 사용 가능 
* v-once : 디렉티브를 사용하면 일회성 보간을 수행, 데이터가 갱신되더라도 화면에는 변화없음, 반응성을 가지지 않음  
### computed 
computed : 계산된 속성
* 정의하는 익명함수는 반드시 값을 리턴하도록 작성되어야 함
* 캐싱기능이 있어 한 번 연산된 기록이 있으면 저장된 값을 화면에 출력해주어 불필요한 리소스 낭비를 줄일수있음
* 값을 얻어내는 용도로만 사용(Getter)가능하지만 코드 추가로 (Setter) 기능도 사용할 수 있음
### watch 
watch : 데이터를 감시하는 용도의 옵션 , 계산된 데이터도 감시 가능

### HTML 클래스 렌더링( v-bind : class )  
```
<div : class=“{active : isActive} > </div>  
```

### 조건부 렌더링
* v-if : 조건에 따라 블록을 렌더링할 때 사용, 블록은 디렉티브의 표현식이 true일 때 렌더링됨   
* v-show : 연결되어있는 데이터의 true, false 여부와 상관없이 해당하는 요소를 구조적으로 렌더링은 함, 하지만 화면에 보이지 않게 display : none 이 적용되어 있음  
* 둘의 차이 v-show를 쓰면 항상 렌더링 되어 DOM에 남아있다는 점, v-show는 단순히 엘리먼트의 display 속성만 전환하는 것

### 리스트 렌더링
push()
pop()
shift()
unshift()
splice()
sort()
reverse()

### 이벤트 핸들링( v-on: )
* @click=“handler() : 인수를 넣어주지 않으면 이벤트객체가 넘어가고 handler(‘hi’)처럼 인수가 들어가면 들어간 인수를 넘겨줌
* 만약 이벤트객체와 지정 텍스트를 같이 넘겨주고 싶다면 hadler (‘hi’, $evnet)를 사용

### 이벤트 수식어
1. .stop : 이벤트 전파가 중단
==  vue 안에서 @click.stop=“hadler”으로 단순화해서 사용
2. .prevent : 이벤트 페이지를 다시 로드하지 않음
 == vue안에서 @click.prevent="handler" 으로 단순화해서 사용 
3. .capture : 이벤트가 부모요소 -> 자식요소로 내려오는 개념
==  vue 안에서 @click.capture=“hadler”으로 단순화해서 사용
4. .self : 이벤트가 연결된 정확한 영역에서만 동작하도록 만들어줌 
==  vue 안에서 @click.self=“hadler”으로 단순화해서 사용
5. .once : 특정 이벤트가 발생했을 때 단 한 번만 메소드를 실행하는 기능
 == vue안에서 @click.once="handler"으로 단순화해서 사용
6. .passive : 이벤트와 로직의 처리를 독립시켜줌
==  == vue안에서 @wheel.passive="handler"으로 단순화해서 사용



