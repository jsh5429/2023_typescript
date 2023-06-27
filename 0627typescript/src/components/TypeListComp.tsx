import React, { useState } from 'react'

export default function TypeFuncComp() {
    const [array, setArray] = useState([{id:"id", text : "text"},{id:1, text:"one"},{id:2, text :"two"}]);
    return(
        <div>
            {
            array.map((num)=>(
                <li>{num.id} : {num.text}</li>
                ))
            }
        </div>
    )

}