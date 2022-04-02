
var key = "263734e13473fcd5d373c94ac2874e3e";
var lat = "33.44";
var lon = "	-90.435600";
var AB;
var inputEl = document.getElementById('SearchInput');
var buttonEl = document.getElementById('SearchBtn');
buttonEl.addEventListener('click',getWeather);
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
        
    }
];
console.log(cities)
function getWeather() {
    event.preventDefault();
    input = inputEl.value;
    console.log(input)
   
    var found = cities.find(e => e.name === input);
        console.log(found);
    getApi(found.lat,found.lon);
    
}

    function getApi(lat,lon){
        var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat +'&lon=' + lon + '&exclude=hourly,daily&units=imperial&appid=263734e13473fcd5d373c94ac2874e3e';

        fetch(apiUrl).then(function(response) {
            return response.json()
        }).then(function(data) {
            AB=data;
            console.log(data);
        })
        
              
      
            
        };
      
        let myObjects = [{"name":"a", "value":0}, {"name":"b", "value":1},{"name":"c", "value":2}];
        let found = myObjects.find(e => e.name === "a");
        console.log(found.value);