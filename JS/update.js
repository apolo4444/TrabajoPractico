window.onload = function() {
    var args = location.search.substr(1).split('&');
    // lee los argumentos pasados a este formulario
    var parts = []
    for (let i = 0; i < args.length; ++i) {
        parts[i] = args[i].split('=');
    }
    console.log(args)
    document.getElementById("txtId").value = decodeURIComponent(parts[0][1])
    document.getElementById("txtNombre").value = decodeURIComponent(parts[1][1])
    document.getElementById("txtPrecio").value = decodeURIComponent(parts[2][1])
}

function modificar() {
    let id = document.getElementById("txtId").value
    let n = document.getElementById("txtNombre").value
    let p = document.getElementById("txtPrecio").value
    
    let concepto = {
        nombre: n,
        definicion: p,
        
    }
    //let url = "http://localhost:5000/glosario/"+id
    let url = "https://matiaslasorsa.pythonanywhere.com/glosario/"+id
    var options = {
        body: JSON.stringify(concepto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            // Handle response we get from the API
        })
        .then(function () {
            window.location.href = "Glosario.html";
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}

