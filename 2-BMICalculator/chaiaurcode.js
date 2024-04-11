const form = document.querySelector('form');
// This usecase will give you empty value
// Form submit button results in sending the values to server through GET/POST api
// There are special event listeners for stopping this

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stopping what clicking submit button does by default

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `<span>${height} is not a valid height<span>`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `<span>${weight} is not a valid weight<span>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // results
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi},You are underweight<span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi},You are in normal range<span>`;
    } else {
      results.innerHTML = `<span>${bmi},You are overweight<span>`;
    }
  }
});
