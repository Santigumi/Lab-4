const form = {
    'usuario': '',
    'contraseña': ''
}

const inputUsuario = document.getElementById('usuario')
inputUsuario.addEventListener('change', function() {
    changeUsuario(inputUsuario.value)
})
function changeUsuario(e) {
    form.usuario = e
    console.log(form.usuario)
}

const inputContraseña = document.getElementById('contraseña')
inputContraseña.addEventListener('change', function() {
    changeContraseña(inputContraseña.value)
})

function changeContraseña(e) {
    form.contraseña = e
    console.log(form.contraseña)
}

async function fetchUser() {
    try {
      const response = await fetch("http://localhost:5050/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const dataUser = await response.json();
      return dataUser
      
    } catch (error) {
      renderErrorState();
    }
  } 

async function logIn(provideUsuario, provideContraseña) {
    try {
        const Data = await fetchUser()
        const user = Data.find((usuario)=>{
            return usuario.usuario === provideUsuario && usuario.contraseña === provideContraseña;
        })
        if(user){
            window.location.href = 'http://127.0.0.1:3004/';
        } else {
            alert('Usuario o contraseña incorrecto(s)') 
        }
      } catch (error) {
        alert('error 2')
      }
}

  function renderErrorState(){
    alert('error al iniciar sesión')
  }

const login = document.getElementById('login')
login.addEventListener('click', function() {
    let provideUsuario = form.usuario
    let provideContraseña = form.contraseña
    logIn(provideUsuario, provideContraseña)  
});

const returnb = document.getElementById('return')
returnb.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:3000/';
});

