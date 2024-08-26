let Usuarios = [];
let Post = [];

const container = document.querySelector('.usuarios')
const feed = document.querySelector('.post')

fecthUsersData()
fecthPostsData()

async function fecthUsersData(){
    try {
        const response = await fetch("http://localhost:5050/users")
        if (!response.ok) {
            throw new Error("Network response was not ok");
          }
        const usersData = await response.json()
        safeUsersData(usersData) 
    } catch (error) {
        renderErrorState()
    }
}

  function safeUsersData(usersData) {
    const Data = usersData
    Data.forEach(element => {
        Usuarios.push(element)
    });
    renderUserData()
  }

  function renderUserData() {
    const usuarios = document.querySelector('.usuarios');
    usuarios.innerHTML = "";
    usuarios.className = 'users' 
    Usuarios.forEach(element => {

    const cart = document.createElement('div')
    cart.className = 'user'
    const nombre = document.createElement('p')
    nombre.innerText = 'Nombre: ' + element.nombre
    cart.appendChild(nombre)

    const username = document.createElement('p')
    username.innerText = 'Usuario: ' + element.usuario
    cart.appendChild(username)
    
    container.appendChild(cart)
    })
}

async function fecthPostsData() {
    try {
        const response = await fetch("http://localhost:5050/posts")
        if (!response.ok) {
            throw new Error("Network response was not ok");
          }
        const postsData = await response.json()
        safePostsData(postsData)        
    } catch (error) {
        renderErrorState()
    }
}

function safePostsData(data) {
    const Data = data
    Data.forEach(element => {
        Post.push(element)
    });
    renderPostsData();
    console.log('si'); 
}

function renderPostsData(){
    const posts = document.querySelector('.posts');
    posts.innerHTML = ""; 
    Post.forEach(element => {
        const cart = document.createElement('div')
        cart.className = 'cart'
        const imagen = document.createElement('img')
        imagen.src = element.imagen
        cart.appendChild(imagen)
    
        const titulo = document.createElement('p')
        titulo.innerText = element.titulo
        cart.appendChild(titulo)

        const descripcion = document.createElement('p')
        descripcion.innerText = element.descripcion
        cart.appendChild(descripcion)
        
        posts.appendChild(cart)        
        })
}

  function renderErrorState() {
    container.innerHTML = "";
    container.innerHTML = "<p>Failed to load data</p>";
  }
  
  