const response = await fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5');

const data = await response.json();

const p = document.querySelector('p');

p.innerHTML = data.results.sunset;

