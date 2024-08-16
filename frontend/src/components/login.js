const mensajeError = document.getElementsByClassName("error")[0];

document.getElementById('login-form').addEventListener('submit', async (event) => {
    
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://peluqueria-invasion-back.vercel.app/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ Nombre: username, Contrasena: password }),
        credentials: 'include',
    });
    
    if (response.ok) {
        // window.location.href = '/';
        await new Promise(resolve => setTimeout(resolve, 5500)); // Espera 500ms (puedes ajustar este tiempo)
        window.location.href = '/';
    } 
    
    if (!response.ok) {
        return mensajeError.classList.toggle("escondido", false);
    }

});
  
