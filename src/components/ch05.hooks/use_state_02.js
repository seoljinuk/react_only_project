import { useState } from "react";

function App() {
    const imageSize = 120; // 이미지 사이즈

    /* 관리해야 할 상태 정의 */
    const [color, setColor] = useState('blue'); // 차량 색상 영문 이름
    const [year, setYear] = useState(2024); // 차량 생산 년도
    const [model, setModel] = useState('sonata'); // 차량 모델

    const ChangeTest = (event) => {
        const targetId = event.target.id;
        console.log('이벤트 발생 객체 id : ' + targetId);

        const targetValue = event.target.value;
        console.log('이벤트 타겟 값 : ' + targetValue);

        if (targetId === 'model') {

        } else if (targetId === 'color') {
            setColor(targetValue);
        } else if (targetId === 'year') {

        } else {

        }
    }

    return (
        <div className="App">
            <h1>내 차 정보</h1>
            <p>
                자동차의 종류에 따라서, 이미지 변경이 되고 색상은 설명 문구의 색상으로 변경이 됩니다.
            </p>

            {/* entity는 html에서 특수 문자를 표현하는 기법으로, 규칙을 정해 놓은 문자열이 있습니다. */}
            차종 변경 : &nbsp;
            <select id="model" onChange={ChangeTest} >
                <option value="avante">아반떼</option>
                <option value="sonata">소나타</option>
                <option value="grandeur">그랜져</option>
            </select>
            <br /><br />

            색상 변경 : &nbsp;
            <select id="color" onChange={ChangeTest} >
                <option value="yellow">노랑</option>
                <option value="blue">파랑</option>
                <option value="red">빨강</option>
                <option value="green">녹색</option>
            </select>
            <br /><br />

            생산 년도 : &nbsp;
            <select id="year" onChange={ChangeTest} >
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
            <br /><br />

            <p>
                {color} 색상의 {year} 년산 {model} 모델<br />
            </p>
            <br /><br />

            <img src="" alt="" width={imageSize} height={imageSize} />
        </div>
    );
}

export default App;