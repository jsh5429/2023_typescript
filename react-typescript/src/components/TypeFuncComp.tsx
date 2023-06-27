import React, { useState } from 'react'

// props의 값을 사용하기위해서 interface 작성
interface CounterProps {
    startNumber : number;
    name? :string;
    check? : boolean;
}

// 매개변수로 받아오는 props 타입지정
export default function TypeFuncComp(props:CounterProps) {
  // 안에 있는 속성을 알고 있기때문에 
  // ctrl+space를 이용해서 이름을 찾을 수 있다
  const {startNumber, name} = props;

  // 현재 넣어준 값으로 타입이 고정되서 사용
  const [text, setText] = useState("텍스트 작성");
  // 만약 count에 들어갈 타입이 두개이상이라면 <>안에 직접적용
  const [count, setCount] = useState<number|undefined>(5)
  const [array, setArray] = useState([{id:"id", text : "text"},{id:1, text:"one"},{id:2, text :"two"}]);

  // 이벤트 객체를 사용하는 메소드,
  // 이벤트 객체의 타입을 동일하게 가져와서 사용
  const InputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
        <h3>TypeFuncComp</h3>
        <p>{props.startNumber}</p>
        <p>{props.name}</p>
        <p>{count}</p>
        <p>{text}</p>
        {/** props으로 check를 boolean 값으로 받아오기 */}
        {props.check ? "확인" : "미확인"}

        {
            array.map((num)=>(
              <li>{num.id} : {num.text}</li>
            ))
        }

        <h3>글자확인 : {text}</h3>
        <input type="text" 
          onChange={(e)=>{setText(e.target.value)}}
        />
    </div>
  )
}
