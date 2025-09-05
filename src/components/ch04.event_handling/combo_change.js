// 이미지 경로(public/images 폴더 아래에 이미지 파일)
const image_path = "/images";

function App() {
    // 선택된 카테고리
    let selectedCategory = "";

    // 카테고리별 항목
    const items = {
        bread: [
            { name: "브리오슈", img: `${image_path}/brioche_01.png` },
            { name: "치아바타", img: `${image_path}/ciabatta_01.png` },
            { name: "크로아상", img: `${image_path}/croissant_02.png` },
            { name: "프렌치 바게트", img: `${image_path}/french_baguette_01.png` },
        ],
        drink: [
            { name: "아메리카노", img: `${image_path}/americano01.png` },
            { name: "카푸치노", img: `${image_path}/cappuccino01.png` },
            { name: "바닐라 라떼", img: `${image_path}/vanilla_latte_01.png` },
            { name: "우유", img: `${image_path}/milk02.jpg` },
        ],
    };

    // 콤보박스 change 이벤트
    const ComboChangeHandle = (event) => {
        selectedCategory = event.target.value;
        console.log(`선택된 카테고리 : ${selectedCategory}`);
        renderList(); // 목록 갱신
    };

    // li 클릭 이벤트
    const handleClick = (item) => {
        // alert(item.name); // 이름 표시
        const largeImg = document.getElementById("large_image");
        largeImg.src = item.img; // 이미지 표시
    };

    // 목록 렌더링
    // 렌더링 함수 (JSX)
    const renderList = () => {
        const container = document.getElementById("list_container");
        if (!selectedCategory) {
            return null;
        }

        const currentItems = selectedCategory === "bread" ? items.bread : items.drink;

        if (selectedCategory === "bread") {
            return (
                <ul>
                    {currentItems.map((item, idx) => (
                        <li
                            key={idx}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleClick(item)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            );
        } else if (selectedCategory === "drink") {
            return (
                <ol>
                    {currentItems.map((item, idx) => (
                        <li
                            key={idx}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleClick(item)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ol>
            );
        }
    };


    return (
        <div className="App">
            <h2>콤보박스 Change 이벤트 예제</h2>
            <p>카테고리를 선택하면 목록과 이미지를 표시합니다.</p>

            <select onChange={ComboChangeHandle}>
                <option value="">-- 선택하세요 --</option>
                <option value="bread">빵</option>
                <option value="drink">음료수</option>
            </select>

            <div id="list_container" >{renderList()}</div>
            <div>
                <img
                    id="large_image"
                    alt="선택된 이미지"
                    width="300"
                    height="300"
                />
            </div>
        </div>
    );
}

export default App;