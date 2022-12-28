if (document.getElementById("app")) {
    const { createApp } = Vue
 
    createApp({
        data() {
            return {
                conceptos: [],
                errored: false,
                loading: true,
                //Variables agregadas
                admin:false,
                view:false,
                //url: "http://localhost:5000/glosario"
                url:"https://matiaslasorsa.pythonanywhere.com/glosario"
                }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => {return response.json()})
                    .then(data => {
                        this.conceptos = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(concepto) {
                //const url = 'http://localhost:5000/glosario/' + concepto;
                const url = "https://matiaslasorsa.pythonanywhere.com/glosario/" + concepto;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }
        },
        created() {
            this.fetchData(this.url)
        }
    }).mount('#app')
}
