function App(){
    function multiply(num){
        return (10 * num).toFixed(3) ;
    }

    console.log('자바 스크립트 배열 관련 map 함수');
    const numbers = [4, 9, 16, 25];

    const result01 = numbers.map(multiply);
    console.log(result01);

    console.log('\n비어 있는 배열은 어떻게 되나요?');
    const result02 = [].map(multiply);
    console.log(result02);

    console.log('\nmap 함수와 화살표 함수를 조합합니다.');
    const twotimes = (n) => 2 * n ;
    const result03 = numbers.map(twotimes);
    console.log(result03);    

    console.log('\n자바 스크립트 Math 객체를 같이 사용해 봅니다.');
    const result04 = numbers.map(Math.sqrt);
    console.log(result04);  
    
    const foods = ['라면', '우동', '짜장면', '짬뽕', '칼국수', '마라탕'] ;
    console.log(foods);  

    const result05 = foods.map((item) => `맛있는 ${item} 좋아요`);
    console.log(result05);  

    return(
        <div className="App">
            배열 함수(map)
        </div>
    );     
}

export default App ;