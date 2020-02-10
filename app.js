async function getWeatherAW(){

    try{  // async fn 에서 rejected Promise 의 결과 받는법
          // 즉 , error 를 방지 하는 법임
          // (기능은 java 랑 똑같음)


        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=sf6p8tfNvwdIgE7fTwFs9DH30VwLYnoSSORJKjNhZ%2FKmbun8FUP7s6Ie73cUTpjL2RuNMRf3XXfli8fHcG9%2Byg%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&base_date=20200209&base_time=1500&nx=98&ny=75
`;
        
        const result = await fetch(proxyUrl + url);    // proxyUrl + API url 로 사용
//               var jsonText = JSON.stringify(xmlToJson(result));

        console.log(result);
        const data = await result.json();  // Resoponse Object -> Object 변환
        console.log(data);
          console.log(data.response.body.items.item);
        return data;    // async fn 은  Promise return 함

    } catch(error){

        console.log(error);
        // alert(error);
    }

};


// getWeatherAW();


async function getWeatherAW2(){

    try{  // async fn 에서 rejected Promise 의 결과 받는법
          // 즉 , error 를 방지 하는 법임
          // (기능은 java 랑 똑같음)


        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=daegu&appid=7b8161880e7347a096624195021341c5
`;
        
        const result = await fetch(proxyUrl + url);    // proxyUrl + API url 로 사용
//               var jsonText = JSON.stringify(xmlToJson(result));

        console.log(result);
        const data = await result.json();  // Resoponse Object -> Object 변환
        console.log(data);
        console.log(data.list[0].main.temp);
        setTimeout(()=>{
            document.querySelector('body').textContent = data.list[0].main.temp;

        }, 3000);
        return data;    // async fn 은  Promise return 함

    } catch(error){

        console.log(error);
        // alert(error);
    }

};

// getWeatherAW2();
