import React, {useState} from "react";

function Modal(props) {
    let [숫자, 숫자변경] = useState(0);

    return (
        <div className = "list">
        <h3>{props.title} <span onClick={ ()=>{ 숫자변경( 숫자 + 1) } }>👍</span> { 숫자 }</h3>
        <p>11월 5일</p>
        <hr/>
        </div>
    )
}

export default Modal;