const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use("/contacts",(request, response, next)=>{
    console.log("headers: ", request.headers);
    console.log("body: ", request.body);
    next();
});

app.get("/contacts",(request, response)=>{
    const contacts=[
        {id:1, nombre:"Adrian", apellido:"Bacilio", celular:"0993242423"},
        {id:2, nombre:"Arturo", apellido:"Tumbaco", celular:"0991232423"},
        {id:3, nombre:"Arelys", apellido:"Torres", celular:"0992431234"}
    ]
    response.send(contacts);
});

app.post("/contacts", (request, response)=>{
    request.body.id=99;
    response.send(request.body)
});

app.put("/contacts/:idParams", (request, response)=>{
    const id = request.params.idParams;
    console.log("id: "+id);
    response.send(request.body)
});

app.delete("/contacts/:idParams", (request, response)=>{
    const id = request.params.idParams;
    console.log("id: "+id);
    response.send()
});

app.listen(port, ()=>{
    console.log("Servidor listo en el puerto: "+port);
})