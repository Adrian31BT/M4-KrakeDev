const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = 3001;

app.use(bodyParser.json());

const laptops=[
    { "id": 101, "marca": "HP", "procesador": "Intel core i7", "memoria": "32GB", "disco": "512GB SSD" },
    { "id": 102, "marca": "Dell", "procesador": "AMD Ryzen 5", "memoria": "16GB", "disco": "1TB HDD" },
    { "id": 103, "marca": "Acer", "procesador": "Intel core i3", "memoria": "8GB", "disco": "256GB SSD" },
    { "id": 104, "marca": "Asus", "procesador": "Intel core i9", "memoria": "64GB", "disco": "2TB SSD" },
    { "id": 105, "marca": "Apple", "procesador": "M1", "memoria": "16GB", "disco": "1TB SSD" }
]

app.use("/laptops",(request, response, next)=>{
    console.log("headers: ", request.headers);
    console.log("body: ", request.body);
    next();
});

/* Busca todas las laptops */
app.get("/laptops",(request, response)=>{
    response.send(laptops);
});

/* Busca una laptop */
app.get("/laptops/:idParams", (request, response)=>{
    const id = parseInt(request.params.idParams);
    const laptop = laptops.find(item => item.id === id);
    if (laptop) {
        response.send(laptop);
    } else {
        response.send("Laptop no encontrada");
    }
});

/* Crea una laptop */
app.post("/laptops", (request, response)=>{
    request.body.id=106;
    response.send(request.body)
});

/* Actualiza una laptop */
app.put("/laptops/:idParams", (request, response)=>{
    const id = request.params.idParams;
    console.log("id: "+id);
    response.send(request.body)
});

/* Elimina una laptop */
app.delete("/laptops/:idParams", (request, response)=>{
    const id = request.params.idParams;
    console.log("id: "+id);
    response.send()
});

app.listen(port, ()=>{
    console.log("Servidor listo en el puerto: "+port);
})