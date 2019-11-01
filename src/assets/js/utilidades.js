import Highcharts from 'highcharts';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// OBJETO GRAFICO CONSTRUCTOR

let ObjGrafico = function (contenedor, tipo = "line", configuracion) {

    this.contenedor = contenedor;
    this.tipo = tipo;
    this.configuracion = configuracion;

    return Highcharts.chart(this.contenedor, {
        chart: {
            type: this.tipo
        },
        title: {
            text: this.configuracion.title.text
        },
        xAxis: {
            categories: this.configuracion.xAxis.categories
        },
        yAxis: {
            title: {
                text: this.configuracion.yAxis.text
            }
        },
        series: this.configuracion.series,

        exporting: {
            buttons: {
                contextButton: {
                    enabled: false
                }
            }
        }
    })

}

/* -------------------------------------------------
    -------------------------------------------------
        CONFIGURACION CHART 1
    ------------------------------------------------- */

let configuracion1 = {
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [
        {
            name: 'Jane',
            data: [1, 2, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }
    ]
};

/* -------------------------------------------------
-------------------------------------------------
    CONFIGURACION CHART 2
------------------------------------------------- */

let configuracion2 = {
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [
        {
            name: 'Jane',
            data: [1, 3, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }
    ]
};

/* -------------------------------------------------
-------------------------------------------------
    CONFIGURACION CHART 3
------------------------------------------------- */

let configuracion3 = {
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [
        {
            name: 'Jane',
            data: [1, 3, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }
    ]

};

/* -------------------------------------------------
-------------------------------------------------
    CONFIGURACION CHART 4
------------------------------------------------- */

let configuracion4 = {
    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [
        {
            name: 'Installation',
            data: [
                43934,
                52503,
                57177,
                69658,
                97031,
                119931,
                137133,
                154175
            ]
        }, {
            name: 'Manufacturing',
            data: [
                24916,
                24064,
                29742,
                29851,
                32490,
                30282,
                38121,
                40434
            ]
        }, {
            name: 'Sales & Distribution',
            data: [
                11744,
                17722,
                16005,
                19771,
                20185,
                24377,
                32147,
                39387
            ]
        }, {
            name: 'Project Development',
            data: [
                null,
                null,
                7988,
                12169,
                15112,
                22452,
                34400,
                34227
            ]
        }, {
            name: 'Other',
            data: [
                12908,
                5948,
                8105,
                11248,
                8989,
                11816,
                18274,
                18111
            ]
        }
    ],

    responsive: {
        rules: [
            {
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }
        ]
    }
};

/*  ----------------------------------------------------------------------------
 * ---------------
FUNCIONALIDAD PARA CREAR CANVAS E IMAGEN DEL CONTAINER
------
 * -----------------------------------------------------------------------------
 * --------- 
 */

function _func(contenedor, imgCanvas, imgContainer, linkDescarga, descargaPDF) {
    html2canvas(contenedor, {
        width: contenedor
            .getBoundingClientRect()
            .width - 10,
        height: contenedor
            .getBoundingClientRect()
            .height + 50,
        x: contenedor
            .getBoundingClientRect()
            .x + 10,
        y: 0,
        backgroundColor: null
    })
        .then(function (canvas) {

            let imgData = canvas.toDataURL();
            imgCanvas.src = imgData;
            linkDescarga.href = imgData;

            imgContainer.style.display = "flex";
            descargaPDF.style.marginBottom = "none";


            document
                .body
                .appendChild(canvas);
            var pdf = new jsPDF('a', 'mm', 'a4');

            let pagina = canvas.toDataURL('image/jpeg', 1.0);

            return {pdf: pdf, pagina: pagina}

        })
        .then(function (doc) {

            doc
                .pdf
                .addImage(doc.pagina, 'JPEG', 5, 5, 200, 0);

            doc
                .pdf
                .save("export.pdf");

            document.documentElement.scrollTop = 1010;

        })

}

export {
    Highcharts,
    configuracion1,
    configuracion2,
    configuracion3,
    configuracion4,
    _func,
    ObjGrafico
}

fetch('http://api.icndb.com/jokes/random/10')
    .then(req => req.json())
    .then(resp => {
        console.log(resp.value);

    })