
const form = {
    'imagen': '',
    'titulo': '',
    'descripcion': ''
}

const inputImagen = document.getElementById('imagen');
inputImagen.addEventListener('change', function() {
    addImagen(inputImagen.value)
})


function addImagen(e) {
    form.imagen = e
    console.log(form.imagen)
    checkForm(form)
}

const inputTitulo = document.getElementById('titulo');
inputTitulo.addEventListener('change', function() {
    addTitulo(inputTitulo.value)
})
function addTitulo(e) {
    form.titulo = e
    console.log(form.titulo)
    checkForm(form)
}

const inputDescripcion = document.getElementById('descripcion');
inputDescripcion.addEventListener('change', function() {
    addDescripcion(inputDescripcion.value)
})
function addDescripcion(e) {
    form.descripcion = e
    console.log(form.descripcion)
    checkForm(form)
}

const postButton = document.getElementById('post')
postButton.disabled = true
postButton.style.backgroundColor = 'gray'

function checkForm(form) {
    const postButton = document.getElementById('post')
    postButton.disabled = true
    postButton.style.backgroundColor = 'gray'
    const isFormFilled = Object.values(form).every(value => value.trim() !=='');
    if (isFormFilled) {
    postButton.disabled = false
    postButton.style.backgroundColor = 'purple'
    }
}

async function crearPost() {

    try {
        const cart = {
          imagen: form.imagen,
          titulo: form.titulo,
          descripcion: form.descripcion
        };
  
        const response = await fetch("http://localhost:5050/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(cart),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert('Post subido')
        clearInputs()
      } catch (error) {
        alert('usuario no registrado')
        renderErrorState();
      }
      clearForm(form)
}

function clearInputs() {
    const inputImagen = document.getElementById('imagen');
    inputImagen.value = '';
    const inputTitulo = document.getElementById('titulo');
    inputTitulo.value = '';
    const inputDescripcion = document.getElementById('descripcion');
    inputDescripcion.value = ''
    const post = document.getElementById('post')
    post.disabled = true
};

function clearForm(form) {
    form.imagen = '',
    form.titulo = '',
    form.descripcion = ''
}

const post = document.getElementById('post')
post.addEventListener('click', function(){
    crearPost()
});

const returnb = document.getElementById('return')
returnb.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:3000/';
});

    function renderErrorState(){
        alert('Error al subir el post')
    };
