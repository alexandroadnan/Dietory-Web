document.addEventListener('DOMContentLoaded', function() {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  // Nama lengkap
  const fullName = user.username || 'User';
  document.getElementById('profileName').textContent = fullName;
  document.getElementById('sidebarName').textContent = fullName;

  // Email
  const emailInput = document.getElementById('emailProfile');
  if (emailInput) emailInput.value = user.email || '-';

  // Tanggal lahir
  const dobRow = document.getElementById('dob');
  if (dobRow) dobRow.textContent = user.dob || '-';

  // Kelamin
  const sexRow = document.getElementById('sex');
  if (sexRow) sexRow.textContent = user.sex || '-';

  // First name & last name
  const nameParts = fullName.trim().split(' ');
  let firstName = nameParts[0] || '';
  let lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : nameParts[0] || '';
  document.getElementById('firstName').textContent = firstName;
  document.getElementById('lastName').textContent = lastName;

  // Ambil BMI dari localStorage
  const bmiData = JSON.parse(localStorage.getItem('bmi'));
  if (bmiData && document.getElementById('profileBMI')) {
    document.getElementById('profileBMI').textContent = `${bmiData.value} (${bmiData.category})`;
  }
});