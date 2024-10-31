const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height < 0 || height === " " || isNaN(height)) {
    result.innerHTML = `Please input the correct height ${height}`;
  } else if (weight < 0 || weight === " " || isNaN(weight)) {
    result.innerHTML = `Please input the correct weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      result.innerHTML = `<span>You are under weight ${bmi}</span>`;
    }
    if (18.6 < bmi && bmi < 24.9) {
      result.innerHTML = `<span>You are Normal weight ${bmi}</span>`;
    } else {
      result.innerHTML = `<span>You are Overweight ${bmi}</span>`;
    }
  }
});
