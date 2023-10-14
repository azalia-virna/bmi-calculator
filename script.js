window.onload = () => {
  const btn = document.querySelector('#button');
  btn.addEventListener('click', calcBMI)
}


function calcBMI() {
  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const result = document.querySelector('#result');

  if (!height || isNaN(height) || height < 0) {
      result.innerText = "Please provide a valid height";
      return;
  } else if (!weight || isNaN(weight) || weight < 0) {
      result.innerText = "Please provide a valid weight";
      return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.5) {
      result.innerText = `You BMI Is ${bmi}
       You Are Underweight`; 
  } else if (bmi >= 18.5 && bmi < 24.9) {
      result.innerText = `Your BMI Is ${bmi}
      You Are Normal`;
  } else if (bmi >= 25 && bmi < 29.9) {
      result.innerText = `You BMI Is ${bmi}
      You Are Overweight`;
  } else if (bmi >= 30 && bmi < 34.9) {
      result.innerText = `Your BMI Is ${bmi}
      You Are Obesity`;
  } else {
      result.innerText = `Your BMI Is ${bmi}
      You Are Extremely obese`;
  }
}