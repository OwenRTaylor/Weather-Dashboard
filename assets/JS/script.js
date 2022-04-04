
//Declaring variables
var key = "263734e13473fcd5d373c94ac2874e3e";
var lat = "33.44";
var lon = "	-90.435600";
var AB;
var date;
var apiUrl;
var UTC;
var i=0;
var ABC;
var dataArr = [];

var inputEl = document.getElementById('SearchInput');
var buttonEl = document.getElementById('SearchBtn');
var tempEl = document.getElementById('temp');
var windEl = document.getElementById('wind');
var humidityEl = document.getElementById('humidity');
var UVindexEl = document.getElementById('UVindex');
var dateEl = document.getElementById('dt');
form = document.querySelector('form')
var x = document.querySelector("img");

buttonEl.addEventListener('click',getWeather);

// Object with cities
var cities = [
    {
        "name":"Chicago",
        "lat":33.44,
        "lon":-94.04,
    },
    {
        "name":"Atlanta",
        "lat":33.7490,
        "lon":-84.3880,
    },
    {
        
        "name":"Seattle",
        "lat":47.6,
        "lon":-122.33,
        
    },
    {
        
        "name":"Austin",
        "lat":30.26,
        "lon":-97.73,
        
    },
    {
        
        "name":"New York",
        "lat":40.73,
        "lon":-73.9,
        
    },
    {
        
        "name":"Orlando",
        "lat":28.538,
        "lon": -81.379,
        
    },
    {
        
        "name":"Denver",
        "lat":47.6,
        "lon":-122.33,
        
    },
    {
        
        "name":"Denver",
        "lat":39.74,
        "lon":-104.95,
        
    },
    {
        
        "name":"San Francisco",
        "lat":-122.43,
        "lon": 37.77,
        
    },
    {
        
        "name":"San Diego",
        "lat":32.83,
        "lon": -117.13,
        
    }
];



//Setting five previous days of info
function FiveDayForecast(){
    date-=86400
    apiUrl ='http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=' + lat +'&lon=' + lon + '&dt='+ date + '&exclude=hourly,daily&units=imperial&appid=263734e13473fcd5d373c94ac2874e3e'
    i=1
        ABC = fetch(apiUrl).then(response => response.json());
    ABC.then(function(data) {
        dateEl = document.getElementById('dt'+i);
        tempEl = document.getElementById('temp'+i);
        windEl = document.getElementById('wind'+i);
        humidityEl = document.getElementById('humidity'+i);
        localDate = data.current.dt;
        localDate = new Date;
        dateEl.textContent = localDate;
        tempEl.textContent = 'Temp: ' + data.current.temp + '°F';
        windEl.textContent = 'Wind Speed: '+data.current.wind_speed + ' MPH';
        humidityEl.textContent = 'Humidity: ' +data.current.humidity + '%';
        UVindexEl.textContent = 'UVIndex: ' + data.current.uvi;
        date-=86400
        apiUrl ='http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=' + lat +'&lon=' + lon + '&dt='+ date + '&exclude=hourly,daily&units=imperial&appid=263734e13473fcd5d373c94ac2874e3e'
        i++
    });
        ABC.then(function(data) {
            dateEl = document.getElementById('dt'+i);
            tempEl = document.getElementById('temp'+i);
            windEl = document.getElementById('wind'+i);
            humidityEl = document.getElementById('humidity'+i);
            localDate = data.current.dt;
            localDate = new Date;
            dateEl.textContent = localDate;
            tempEl.textContent = 'Temp: ' + data.current.temp + '°F';
            windEl.textContent = 'Wind Speed: '+data.current.wind_speed + ' MPH';
            humidityEl.textContent = 'Humidity: ' +data.current.humidity + '%';
            UVindexEl.textContent = 'UVIndex: ' + data.current.uvi;
            date-=86400
            apiUrl ='http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=' + lat +'&lon=' + lon + '&dt='+ date + '&exclude=hourly,daily&units=imperial&appid=263734e13473fcd5d373c94ac2874e3e'
            ABC = fetch(apiUrl).then(response => response.json());
            i++
        });
        ABC.then(function(data) {
            dateEl = document.getElementById('dt'+i);
            tempEl = document.getElementById('temp'+i);
            windEl = document.getElementById('wind'+i);
            humidityEl = document.getElementById('humidity'+i);
            localDate = data.current.dt;
            localDate = new Date;
            dateEl.textContent = localDate;
            tempEl.textContent = 'Temp: ' + data.current.temp + '°F';
            windEl.textContent = 'Wind Speed: '+data.current.wind_speed + ' MPH';
            humidityEl.textContent = 'Humidity: ' +data.current.humidity + '%';
            UVindexEl.textContent = 'UVIndex: ' + data.current.uvi;
            date-=86400
            apiUrl ='http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=' + lat +'&lon=' + lon + '&dt='+ date + '&exclude=hourly,daily&units=imperial&appid=263734e13473fcd5d373c94ac2874e3e'
            ABC = fetch(apiUrl).then(response => response.json());
            i++
        });
        ABC.then(function(data) {
            dateEl = document.getElementById('dt'+i);
            tempEl = document.getElementById('temp'+i);
            windEl = document.getElementById('wind'+i);
            humidityEl = document.getElementById('humidity'+i);
            
            localDate = data.current.dt;;
            localDate = new Date;
            dateEl.textContent = localDate;
            tempEl.textContent = 'Temp: ' + data.current.temp + '°F';
            windEl.textContent = 'Wind Speed: '+data.current.wind_speed + ' MPH';
            humidityEl.textContent = 'Humidity: ' +data.current.humidity + '%';
            UVindexEl.textContent = 'UVIndex: ' + data.current.uvi;
            date-=86400
            apiUrl ='http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=' + lat +'&lon=' + lon + '&dt='+ date + '&exclude=hourly,daily&units=imperial&appid=263734e13473fcd5d373c94ac2874e3e'
            ABC = fetch(apiUrl).then(response => response.json());
            i++
        });
        ABC.then(function(data) {
            dateEl = document.getElementById('dt'+i);
            tempEl = document.getElementById('temp'+i);
            windEl = document.getElementById('wind'+i);
            humidityEl = document.getElementById('humidity'+i);
            
            localDate = data.current.dt;
            localDate = new Date;
            dateEl.textContent = localDate;
            tempEl.textContent = 'Temp: ' + data.current.temp + '°F';
            windEl.textContent = 'Wind Speed: '+data.current.wind_speed + ' MPH';
            humidityEl.textContent = 'Humidity: ' +data.current.humidity + '%';
            UVindexEl.textContent = 'UVIndex: ' + data.current.uvi;
            date-=86400
            apiUrl ='http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=' + lat +'&lon=' + lon + '&dt='+ date + '&exclude=hourly,daily&units=imperial&appid=263734e13473fcd5d373c94ac2874e3e'
            ABC = fetch(apiUrl).then(response => response.json());
            i++
        });
    
    
    
    
    
    
}
// Setting Main Card
function SetInfo(data){
    date = data.current.dt;
    
    tempEl = document.getElementById('temp');
    windEl = document.getElementById('wind');
    humidityEl = document.getElementById('humidity');
    dateEl = document.getElementById('dt');
    
    var inputEl = document.getElementById('SearchInput');
    input = inputEl.value;
    var localDate = date;
    localDate = new Date;
    x.setAttribute('src','https://openweathermap.org/img/wn/' + data.current.weather[0].icon+ '@2x.png');
    x.setAttribute('style','display:block;');
    dateEl.textContent = input + ":" +localDate;
    tempEl.textContent = 'Temp: ' + data.current.temp + '°F';
    windEl.textContent = 'Wind Speed: '+data.current.wind_speed + ' MPH';
    humidityEl.textContent = 'Humidity: ' +data.current.humidity + '%';
    UVindexEl.textContent = 'UVIndex: ' + data.current.uvi;
    if ( data.current.uvi <= 3) {
    UVindexEl.setAttribute('style','background-color:green');
    } else if   ( data.current.uvi > 3 && data.current.uvi < 8){
        UVindexEl.setAttribute('style','background-color:yellow');
    } else {
        UVindexEl.setAttribute('style','background-color:red');

    }
    FiveDayForecast();
}
// inital button ClickListener
function getWeather() {
    event.preventDefault();
    input = inputEl.value;

    var found = cities.find(e => e.name === input);
    if (found!=undefined) {
    var tracker = localStorage.getItem('tracker')
    if (tracker!=null) {
        tracker++
        localStorage.setItem('tracker',tracker);
    } else{
        localStorage.setItem('tracker',0);
        tracker = localStorage.getItem('tracker')
    }
    
        lat = found.lat
        lon = found.lon
        dataArr = localStorage.getItem('previousSearch');
        
        if (dataArr!=null) {
            dataArr = dataArr.split(',');
            dataArr[tracker] = found.name
            localStorage.setItem('previousSearch', dataArr)
        } else{
            dataArr = [];
            dataArr.length = 10;
            tracker=0;
            dataArr[0] = found.name;
            localStorage.setItem('previousSearch', dataArr);
        }
        


        
        apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat +'&lon=' + lon + '&exclude=hourly,daily&units=imperial&appid=263734e13473fcd5d373c94ac2874e3e';
    getApi(apiUrl,1);
} else{
    console.log('Please enter a city name');
}
}
    //First getapi
   function getApi(apiUrl,num){
        fetch(apiUrl).then(function(response) {
            return response.json()
        }).then(function(data) {
            if (num === 1){
            SetInfo(data);
            }
        })
            
      
            
        };
      


//Loading prevoius information
function SetPrevInfo(){
    event.preventDefault();
    
    var tempEl = document.getElementById('temp');
    var windEl = document.getElementById('wind');
    var humidityEl = document.getElementById('humidity');
    var UVindexEl = document.getElementById('UVindex');
    var dateEl = document.getElementById('dt');
    element = event.target;
    var found = cities.find(e => e.name === element.textContent);
    lat = found.lat
    lon = found.lon
    apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat +'&lon=' + lon + '&exclude=hourly,daily&units=imperial&appid=263734e13473fcd5d373c94ac2874e3e';
    fetch(apiUrl).then(function(response) {
        return response.json()
    }).then(function(data) {
        date = data.current.dt;
    date = date - 86400;
    var localDate = date;
    localDate = new Date;
    localDate = localDate.toLocaleString;
    dateEl = localDate;
    tempEl.textContent = data.current.temp + '°F';
    windEl.textContent = data.current.wind_speed+' MPH'
    humidityEl.textContent = data.current.humidity + '%';
    UVindexEl.textContent = data.current.uvi;
    })
}
//Loading data
function loadData(){
    var prevSrch = localStorage.getItem('previousSearch');
    var length = localStorage.getItem('tracker');
    prevSrch = prevSrch.split(',');
    for(i=0;i<=length;i++){
    var buttonEl1 = document.createElement('button');
    buttonEl1.textContent = prevSrch[i];
    buttonEl1.addEventListener('click',SetPrevInfo)
    form.appendChild(buttonEl1);
    }

}
loadData();