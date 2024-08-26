const form = {
    'nombre': '',
    'usuario': '',
    'contraseña': ''
}

const inputNombre = document.getElementById('name')
inputNombre.addEventListener('change', function() {
    changeNombre(inputNombre.value)
})
function changeNombre(e) {
    form.nombre = e
    console.log(form.nombre)
    checkForm(form)
}

const inputUsuario = document.getElementById('usuario')
inputUsuario.addEventListener('change', function() {
    changeUsuario(inputUsuario.value)
})
function changeUsuario(e) {
    form.usuario = e
    console.log(form.usuario)
    checkForm(form)
}

const inputContraseña = document.getElementById('contraseña')
inputContraseña.addEventListener('change', function() {
    changeContraseña(inputContraseña.value)
})

function changeContraseña(e) {
    form.contraseña = e
    console.log(form.contraseña)
    checkForm(form)
}


function checkForm(form) {
    let signin = document.getElementById("signin");
    const isFormFilled = Object.values(form).every(value => value.trim() !== '');
    if (isFormFilled){
      signin.disabled = false;
      signin.style.backgroundColor = 'purple'
    } else {
      signin.disabled = true;
    }
  }


async function createUser() {
    try {
      const usuario = {
        nombre: form.nombre,
        usuario: form.usuario,
        contraseña: form.contraseña
      };

      const response = await fetch("http://localhost:5050/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(usuario),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert('usuario registrado')

    } catch (error) {
      alert('usuario no registrado')
      renderErrorState();
    }
  }

  function renderErrorState() {
    const aviso = document.querySelector("aviso");
    aviso.innerHTML = 'Error al registrarse'
    console.log("Failed to load data");
  }
  
  function renderLoadingState() {
    const container = document.getElementById("data-container");
    container.innerHTML = ""; 
    container.innerHTML = "<p>Loading...</p>";
    console.log("Loading...");
  }


const signin = document.getElementById('signin')
signin.disabled = true
signin.style.backgroundColor = 'gray'

signin.addEventListener('click', function() {
    createUser();
    window.location.href = 'http://127.0.0.1:3002/';
});

const returnb = document.getElementById('return')
returnb.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:3000/';
});