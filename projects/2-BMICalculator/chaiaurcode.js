const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'PLEASE GIVE A VALID HEIGHT!'
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'PLEASE GIVE A VALID WEIGHT!'
  }
  else{
    const bmi = (weight*10000/(height*height)).toFixed(2)
    results.innerHTML = `<span> BMI = ${bmi} </span>`
  }

});
