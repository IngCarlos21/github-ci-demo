const app = require("./holamundo");

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log("la aplicación está siendo escuchada en el puerto "+port);
})