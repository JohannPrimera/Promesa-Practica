//promesas en Javascript

//selector
// const info = document.querySelector("#info");

//Probabilidad de error en el pedido = 50%
const probabilidad = () => {
    return Math.random() < 0.4;
}

//Promesas
const ordenandoBebida = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (probabilidad()) {
            resolve('Promesa cumplida');
        } else {
            reject('Promesa no cumplida');
        }
    }, 1000);
});

// const ordenandoSnack = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (false) {
//             resolve('Promesa cumplida');
//         } else {
//             reject('Promesa no cumplida');
//         }
//     }, 2000);
// });

const promesaCumplida = (valor) => {
    console.log(valor);
};
const promesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
};

const todoOk = (valor) => {
    console.log("Todo Ok: ", valor);
}

const todoMal = (valor) => {
    console.log("Todo Mal: ", valor);
}

// ordenandoBebida
// .then(todoOk)
// .catch(todoMal)

// ordenandoSnack
// .then(todoOk)
// .catch(todoMal)

// const manejoPedidos = () => {
//     if (probabilidad()) {
//         ordenandoBebida
//         .then(todoOk)
//         .catch(todoMal)
//         ordenandoSnack
//         .then(todoOk)
//         .catch(todoMal)

//     } else {
//         console.log("No se puede realizar el pedido. Intenta nuevamente")
//     }
// }

//la funcion contiene codigo asinconico - async
async function manejoPedidosV2() {

    //try - intenta ejecutar codifo asincrono y obtener el resolve
    try {

        // se espera la ejecucion del codigo asincrono - async
        const bebida = await ordenandoBebida;
        console.log(bebida);

        // catch - captura los errores
} catch (error) {
    console.log(error);
}
}

manejoPedidosV2();


