const clock = document.getElementById('clock');

setInterval(function(){
  let currDate = new Date();
  clock.innerHTML = currDate.toLocaleTimeString();
  
},1000)