let ENDPOINT = 'http://127.0.0.1:8000/'

let listas = document.getElementById('listaBicicletas')
let formulario = document.getElementById('formulario')

formulario.addEventListener('submit', async (event)=>{
    event.preventDefault()
    let formData = new FormData(formulario)
    let data = {
        "Modelo": formData.get('modelo'),
        "Caracteristicas": formData.get ('caracteristicas'),
        "Precio": formData.get ('precio'),
        "Descripcion": formData.get ('descripcion'),
    }
    console.log(data);
    let response = await fetch(ENDPOINT+'bicycles/obtenerTodas/',{
          method: 'POST',
          type: 'json',
          headers: {
            "content-Type": "application/json"
          },
        body: JSON.stringify(data)
    })
    let datos = await response.json()
    traerDatos()
})



function crearPlantilla(modelo, caracteristicas, precio, descripcion){
    return`
    <div class="bicicleta">
        <h3>Modelo: ${modelo}</h3>
        <p>caracteristicas: ${caracteristicas}</p>
        <h3>Precio: ${precio}</h3>
        <p>Descripción: ${descripcion}</p>
    </div>
    `
}

function traerDatos(){
    listas.innerHTML
   fetch(ENDPOINT+'bicycles/obtenerTodas/')
       .then(async(response)=>{
            let respuesta = await response.json()
            return respuesta
        })
       .then((respuesta) => {
        respuesta.map((Bicicleta) => listas.innerHTML += crearPlantilla(Bicicleta.Modelo, Bicicleta.Caracteristicas, Bicicleta.Precio, Bicicleta.Descripcion))       
        }) 
}

traerDatos()