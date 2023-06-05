

function toggleShowPass() {
  const passwordInput = document.getElementById('password');
  const eyeToggle = document.getElementsByClassName('fa-eye');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';

    eyeToggle[0].className = eyeToggle[0].className.replace('fa-eye', 'fa-eye-slash')
  } else {
    passwordInput.type = 'password';
    eyeToggle[0].className = eyeToggle[0].className.replace('fa-eye-slash', 'fa-eye')
  }
}