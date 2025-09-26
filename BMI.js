let gender = 'male';
let weight = 70;
let age = 20;
let height = 170;

function updateUI() {
  document.getElementById('weightValue').textContent = weight;
  document.getElementById('ageValue').textContent = age;
  document.getElementById('heightValue').textContent = height;
  updateHeightBar();
}

function changeValue(type, delta) {
  if (type === 'weight') {
    weight = Math.max(20, weight + delta);
  } else if (type === 'age') {
    age = Math.max(10, age + delta);
  }
  updateUI();
}

function updateHeightBar() {
  const heightRange = document.getElementById('heightRange');
  height = parseInt(heightRange.value);
  document.getElementById('heightValue').textContent = height;
  // Update bar fill
  const bar = document.getElementById('heightBar');
  const percent = (height - 110) / (200 - 110);
  bar.style.height = (percent * 100) + '%';
}

function calculateBMI() {
  const bmi = weight / ((height / 100) ** 2);
  let category = '';
  let desc = '';
  if (bmi < 18.5) {
    category = 'Underweight';
    desc = 'Your BMI is ' + bmi.toFixed(1) + ', indicating you are underweight for your height.';
  } else if (bmi < 25) {
    category = 'Normal';
    desc = 'Your BMI is ' + bmi.toFixed(1) + ', indicating your weight is in the Normal category for adults of your height.';
  } else if (bmi < 30) {
    category = 'Overweight';
    desc = 'Your BMI is ' + bmi.toFixed(1) + ', indicating you are overweight for your height.';
  } else {
    category = 'Obese';
    desc = 'Your BMI is ' + bmi.toFixed(1) + ', indicating you are obese for your height.';
  }
  document.getElementById('bmiResultValue').textContent = bmi.toFixed(1);
  document.getElementById('bmiResultCategory').textContent = category;
  document.getElementById('bmiResultDesc').textContent = desc +
    '\n\nMaintaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.';

  // Simpan ke localStorage
  localStorage.setItem('bmi', JSON.stringify({
    value: bmi.toFixed(1),
    category: category,
    date: new Date().toISOString()
  }));
}

document.addEventListener('DOMContentLoaded', function() {
  const bmiForm = document.getElementById('bmiForm');
  if (bmiForm) {
    bmiForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const weight = parseFloat(document.getElementById('bmiWeight').value);
      const heightCm = parseFloat(document.getElementById('bmiHeight').value);
      if (weight > 0 && heightCm > 0) {
        const heightM = heightCm / 100;
        const bmi = weight / (heightM * heightM);
        let category = '';
        if (bmi < 18.5) category = 'Underweight';
        else if (bmi < 25) category = 'Normal';
        else if (bmi < 30) category = 'Overweight';
        else category = 'Obese';
        document.getElementById('bmiResult').textContent =
          `Your BMI: ${bmi.toFixed(1)} (${category})`;
      } else {
        document.getElementById('bmiResult').textContent = 'Please enter valid values.';
      }
    });
  }

  // Gender button events
  document.getElementById('maleBtn').addEventListener('click', function() {
    gender = 'male';
    this.classList.add('active');
    document.getElementById('femaleBtn').classList.remove('active');
  });
  document.getElementById('femaleBtn').addEventListener('click', function() {
    gender = 'female';
    this.classList.add('active');
    document.getElementById('maleBtn').classList.remove('active');
  });
  document.getElementById('heightRange').addEventListener('input', updateHeightBar);
  updateUI();
});