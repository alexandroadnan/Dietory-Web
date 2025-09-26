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
});