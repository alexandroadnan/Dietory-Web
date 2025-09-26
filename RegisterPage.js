document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  // Ambil value radio button sex yang dipilih
  const sex = document.querySelector('input[name="sex"]:checked')?.value || '';
  localStorage.setItem('user', JSON.stringify({ username, email, dob, sex, password }));
  window.location.href = 'LoginPage.html';
});

const sexRow = document.getElementById('sex');
if (sexRow) sexRow.textContent = user.sex || '-';