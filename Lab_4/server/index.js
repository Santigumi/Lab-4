const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json()); 
app.use(cors()); 

const db = {
  usuarios: [],
  posts: []
};

app.get("/users", (request, response) => {
  response.send(db.usuarios);
});

app.post("/user", (request, response) => {
  const { body } = request;
  db.usuarios.push(body);
  response.status(201).send(body);
});

app.get("/posts", (request, response)=>{
  response.send(db.posts)
})

app.post("/posts", (request, response)=>{
  const { body } = request;
  db.posts.push(body)
  response.status(201).send(body);
})

app.listen(5050, () => {
  console.log(`Server is running on http://localhost:${5050}`);
});
