
function login() {
  const correo = document.getElementById('correo').value;
  if (correo === 'enri290@gmail.com') {
    document.getElementById('app').style.display = 'block';
  } else {
    alert('Acceso denegado');
  }
}
