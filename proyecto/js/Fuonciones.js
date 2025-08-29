function Formulario(){
    const name = document.getElementById('Nombre').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    const telefono = document.getElementById('Telefono').value;
    
    if (!name || !email || !password || !telefono) {
        alert("Por favor, completa todos los campos.");
        return false; // Evita el envío del formulario
    }

    const resultados = document.getElementById('resultados');
    resultados.textContent = `Nombre: ${name}, Email: ${email}, Password: ${password}, Teléfono: ${telefono}`;
}


