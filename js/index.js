 const seachBtn = document.getElementById('search')
 
  
 seachBtn.addEventListener('click',function(){
    const inputdata = document.getElementById('inputData').value;
    document.getElementById('inputData').value=" ";
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputdata+'&appid=8efdbf5f46f377a332124db9c67cf475')
    
    .then(res=>res.json())
    .then(data=>{
      console.log(data)

      const stateName = data.name;
      document.getElementById('cityName').innerText=stateName;

      const temp = data.main.temp ;
      //  const tmax= `${data.main.temp  }` 
      //  const maxt = tmax -  273.15
      // // Temperature_Max - ${data.main.temp_max} 
      // // Temperature_Man - ${data.main.temp_min}

       const tempe = temp - 273.15;
      document.getElementById('temp').innerText = tempe.toFixed(2);

      const clouds = data.weather[0].description;
      document.getElementById('cloude').innerText = clouds;

      
    })
    .catch(res => alert('Please Write To Your City Name....'))
 })

