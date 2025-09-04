// 넘겨진 프로터리는 () 내에 적어 주면 됩니다.
function App({ greeting, welcome }) {
    // console.log('샘플');

    return (
        <header>
            <h1>{greeting}</h1>
            <p>{welcome}</p>
        </header>
    );
}

export default App;