var city;
function submit(callback) {
  city = document.getElementById("city").value;
  console.log(city);
  callback();
}
function getData() {
  url = `http://api.weatherapi.com/v1/current.json?key=3e8073cb547547c1bda71528222305 &q=${city}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("temp").innerHTML = data.current.temp_c;
      document.getElementById("country").innerHTML = data.location.name;
      document.getElementById("time").innerHTML = data.current.last_updated;
      document.getElementById("condition").innerHTML =
        data.current.condition.text;
      document.getElementById("icon").src = data.current.condition.icon;
    });
}
