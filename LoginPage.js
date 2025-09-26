document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.login-card form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username === username && user.password === password) {
      window.location.href = 'HomePage.html';
    } else {
      alert('Username atau password salah!');
    }
  });

  const signupLink = document.querySelector('.signup-link a');
  if (signupLink) {
    signupLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'RegisterPage.html';
    });
  }
});

