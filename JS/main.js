const { createApp } = Vue  //creo un objeto VUE llamdo createApp

  createApp({
    data() {
      return {
        number:0,
        url:'./.vscode/glosario.json',
        conceptos:[],
        error:false,
        nroerror:0,
        cargando:true
        
      } 
    },
    methods: {
      fetchData(url) {

          fetch(url)
              .then(response => response.json())
              .then(data => { 
                this.conceptos=data
                this.cargando=false
                 }
              )
              .catch(error=>{
                console.log("error"+error)
                this.error=true
                this.nroerror=error
              }
              )
      }
    },
    created(){

      this.fetchData(this.url) 
    } 

  }).mount('#app')

 
