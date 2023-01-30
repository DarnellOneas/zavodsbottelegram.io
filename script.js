navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords
  })
  function error(){
    alert("Ошибка");
  }