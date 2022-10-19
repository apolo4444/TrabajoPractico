
const glosario=[
    {
        concepto:"Abierto (sistema)",
        definicion:"Sistema que permite la entrada y salida de materia y energia"
    },
    {
        concepto:"Abiótico",
        definicion:"Relación con el ambiente fisicoquímico (no biológico) del medio"
    },
    {
        concepto:"Aclimatacion",
        definicion:"Proceso de ajuste fisiológico de un organismo a nuevas condiciones ambientales"
    },
    {
        concepto:"Actividad industrial",
        definicion:"Aquella que compone la economía de una nación"
    },
    {
        concepto:"Acuicultura",
        definicion:"tecnica de cultivo de plantas y animales acuaticos"
    },
    
    {
        concepto:"Adaptacion",
        definicion:"Cambio evolutivo que ocurre en una población como producto de la acción de la selección natural"
    }
    // {
    //     "concepto":"Abierto (sistema)",
    //     "definicion":"Sistema que permite la entrada y salida de materia y energia"
    // },
    // {
    //     "concepto":"Abiótico",
    //     "definicion":"Relación con el ambiente fisicoquímico (no biológico) del medio"
    // },
    // {
    //     "concepto":"Abierto (sistema)",
    //     "definicion":"Sistema que permite la entrada y salida de materia y energia"
    // },
    // {
    //     "concepto":"Abiótico",
    //     "definicion":"Relación con el ambiente fisicoquímico (no biológico) del medio"
    // },
    // {
    //     "concepto":"Abierto (sistema)",
    //     "definicion":"Sistema que permite la entrada y salida de materia y energia"
    // },
    // {
    //     "concepto":"Abiótico",
    //     "definicion":"Relación con el ambiente fisicoquímico (no biológico) del medio"
    // },
    // {
    //     "concepto":"Abierto (sistema)",
    //     "definicion":"Sistema que permite la entrada y salida de materia y energia"
    // },
    // {
    //     "concepto":"Abiótico",
    //     "definicion":"Relación con el ambiente fisicoquímico (no biológico) del medio"
    // },
];


var table=``;

    for( let concepto of glosario){
        table+=`<tr><td>${concepto.concepto}</td><td>${concepto.definicion}</td></tr> <br>`;
    }
    document.getElementById("glosario").innerHTML=table;





