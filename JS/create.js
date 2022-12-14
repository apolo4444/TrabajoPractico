window.onload = function() {
    document.getElementById('btnCreate').onclick = function() { 
        console.log("Ejecutando Guardar()")
        let n = document.getElementById("txtNombre").value
        let p = document.getElementById("txtPrecio").value
       
        let concepto = {
            nombre: n,
           definicion: p,
            
        }
        console.log("Concepto: " + concepto)
        // let url = "http://localhost:5000/glosario" (desde el mySQL workbench)
        let url = "https://matiaslasorsa.pythonanywhere.com/glosario"
        var options = {
            body: JSON.stringify(concepto),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
           // redirect: 'follow'
        }
        fetch(url, options)
            .then(function () {
                console.log("creado")
                alert("Grabado")
            })
            .then(function () {
                window.location.href = "Glosario.html";
            })
            .catch(err => {
                //this.errored = true
                alert("Error al grabar" )
                console.error(err);
            }) 
    }
}

