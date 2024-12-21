const API_URL = 'https://localhost:7140/api/';
document.getElementById('registroForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const nombre = document.getElementById('username').value;
  const clave = document.getElementById('password').value;
  const correo = document.getElementById('email').value;
  const response = await fetch(`${API_URL}Acceso/Registrar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, correo, clave })
  });
  if (response.ok) {
    window.location.href = 'index.html';
} else {
    alert('Error en el registro');
  }
});