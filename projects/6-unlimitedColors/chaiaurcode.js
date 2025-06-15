const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const body = document.querySelector('body');

let startId;

const changeBg = function(){
  const random = parseInt(Math.random() * 16777215);
  let hex = '#' + random.toString(16).padStart(6, '0');
  body.style.backgroundColor = hex;
}

start.addEventListener('click', function(e){
  startId = setInterval(changeBg, 1000);
});

stop.addEventListener('click', function(e){
  clearInterval(startId);
  startId = null
});
