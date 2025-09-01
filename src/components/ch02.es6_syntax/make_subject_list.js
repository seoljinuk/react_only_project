function App(){
    let header = 'IT 과목';
    let subject = ['java', 'react', 'html', 'javascript', 'bootstrap', 'oracle'] ;

    let result = '';
    result += `<h1>${header}</h1>` ;
    result += `<ul>`;

    // 여기서 for 구문
    for(const item of subject){ // for(타입 단수:복수)
        result += `<li>${item}</li>`;
    }   
      
    result += `</ul>`;

    console.log(result) ;

    // result2 변수에 <ol> 태그를 사용하여 순서가 있는 목록으로 만들기    
    let result2 = '';
    result2 += `<h1>${header}</h1>` ;
    result2 += `<ol>`;
    for(const item of subject){  
        result2 += `<li>${item}</li>`;
    }         
    result2 += `</ol>`;

    return(
        <div className="App">
            {/* 보안(XSS 공격) 때문에 기본적으로 모든 내용을 문자열로 보여줍니다.  */}
            {/* 문자열 형식으로 HTML 태그 형태로 렌더링하기 */}
            <div dangerouslySetInnerHTML={{__html : result}} /> 
            <hr/> {/* 1줄 추가 */}
            {/* 여기에 보여 주기 */}
            <div dangerouslySetInnerHTML={{__html : result2}} /> 
        </div>
    );  
}

export default App ;