

import * as utilidades from './utilidades';

import '../scss/commonSCSS/estilo.scss';


let {log, dir, table, timeEnd, time} = console;

const contenedor = document.querySelector("#container"),
    imgCanvas = document.querySelector(".imgCanvas"),
    imgContainer = document.querySelector("#imgContainer"),
    linkDescarga = document.querySelector("#imgContainer a"),
    descargaPDF = document.querySelector(".btnContainer");

let {
    Highcharts,
    configuracion1,
    configuracion2,
    configuracion3,
    configuracion4,
    _func,
    ObjGrafico
} = utilidades;



document.addEventListener('DOMContentLoaded', function () {

    /* -------------------------------------------------
    -------------------------------------------------
    CHART1
    ------------------------------------------------- */
    let myChart1 = new ObjGrafico("container1", "bar", configuracion1);

    /* -------------------------------------------------
    -------------------------------------------------
    CHART2
    ------------------------------------------------- */

    let myChart2 = new ObjGrafico("container2", "column", configuracion2);

    /* -------------------------------------------------
    -------------------------------------------------
    CHART3
    ------------------------------------------------- */

    let myChart3 = new ObjGrafico("container3", "pie", configuracion3);

    /* -------------------------------------------------
    -------------------------------------------------
    CHART4
    ------------------------------------------------- */

    var myChart4 = Highcharts.chart('container4', configuracion4);



    document.querySelector(".btn").addEventListener("click", function (e) {

   

            _func(contenedor,
                 imgCanvas,
                  imgContainer,
                   linkDescarga,
                    descargaPDF);



    })

});
