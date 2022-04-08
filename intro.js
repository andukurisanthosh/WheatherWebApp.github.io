const element = document.getElementById('root');

function geoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        element.innerHTML="Geolocation is not supported by this browser."
    }
}

function showPosition(){
    element.innerHTML = `lattitude : ${position.coords.latitude} <br>`
}