// react 라이브러리에서 useState라는 hooks을 좀 사용하겠습니다.
import { useState } from "react";

function App() {
    // const [스테이트이름, 셋터메소드이름] = useState('기본값');
    const [color, setColor] = useState('red');
    const [name, setName] = useState('카푸치노');
    const [image, setImage] = useState('cappuccino01.png');

    const ClickEvent = () => {
        console.log(`현재 색상 : ${color}`);
        if (color === 'red') {
            setColor('blue');
            setName('크로아상');
            setImage('croissant_02.png');
        } else {
            setColor('red');
            setName('카푸치노');
            setImage('cappuccino01.png');
        }
    }


    return (
        <div className="App">
            <h1>My favoriter color is {color}!</h1>

            {/* 외부 {} 기호는 JSX 표현식에 사용하는 중괄호 */}
            {/* 내부 {} 기호는 자바 스크립트 객체 표현시 사용하는 중괄호 */}
            <span style={{ color: color, fontWeight: 'bold' }}>글자 색상</span>
            <br /><br />
            <button type="button" onClick={ClickEvent}>
                클릭시 이미지 변경 및 {color} 색상으로 변경
            </button>
            <br /><br />
            <h4>{name}</h4>
            <img src={`/images/${image}`} alt={name} width="210" height="210" />
        </div>
    );
}

export default App;