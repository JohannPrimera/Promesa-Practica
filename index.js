//Probabilidad de error en el pedido = 50%
const probabilidad = () => {
    return Math.random() < 0.4;
}

const pedidoContainer = document.getElementById('lista-pedidos');
const btnIniciar = document.getElementById('btn-iniciar');

function mostrarMensaje(mensaje, tipo = '') {
    const p = document.createElement('p');
    p.textContent = mensaje;
    p.classList.add('mensaje');
    if (tipo) p.classList.add(tipo);
    pedidoContainer.appendChild(p);
}

//funcion de pedidos
function ordenarHamburguesa(producto) {
    return new Promise((resolve, reject) => {
        mostrarMensaje(`Ordenando: ${producto}...`);
        console.log(`Ordenando: ${producto}`);
        setTimeout(() => {
            if (producto === "Smash Burger") {
                resolve("Una Smash Burger 🍔");
            } else {
                reject("Este producto no está disponible");
            }
        }, 2000);
    });
}

function ordenarBebida(producto) {
    return new Promise((resolve, reject) => {
        mostrarMensaje(`Ordenando: ${producto}...`);
        console.log(`Ordenando: ${producto}`);
        setTimeout(() => {
            if (producto === "Coke") {
                resolve("Una Coke 🥤");
            } else {
                reject("Este producto no está disponible");
            }
        }, 2000);
    });
}

function ordenarAcompanamiento(producto) {
    return new Promise((resolve, reject) => {
        mostrarMensaje(`Ordenando: ${producto}...`);
        console.log(`Ordenando: ${producto}`);
        setTimeout(() => {
            if (producto === "Papitas Fritas") {
                resolve("Unas Papitas Fritas 🍟");
            } else {
                reject("Este producto no está disponible");
            }
        }, 2000);
    });
}


//funcion para iniciar pedido
function procesarPedido(respuesta) {
    return new Promise(resolve => {
        mostrarMensaje("Procesando Orden...");
        console.log("Procesando Orden...");
        mostrarMensaje(`Su orden es: "${respuesta}"`, 'success');
        console.log(`Su orden es: "${respuesta}"`);
        setTimeout(() => {
            resolve("Orden Completa, ¡Buen provecho!");
        }, 3000);
    });
}


//Aqui se esta realizando los pedidos pero utilizando el metodo async -  await
async function realizarPedido(hamburguesa, bebida, acompanamiento) {
    // Limpiar contenedor
    pedidoContainer.innerHTML = '';
    btnIniciar.disabled = true;
    btnIniciar.textContent = "Procesando...";

    try {
        const respuestaHamburguesa = await ordenarHamburguesa(hamburguesa);
        console.log("Respuesta recibida: " + respuestaHamburguesa);
        const hamburguesaProcesada = await procesarPedido(respuestaHamburguesa);
        console.log(hamburguesaProcesada);
        mostrarMensaje(hamburguesaProcesada, 'success');

        const respuestaBebida = await ordenarBebida(bebida);
        console.log("Respuesta recibida: " + respuestaBebida);
        const bebidaProcesada = await procesarPedido(respuestaBebida);
        console.log(bebidaProcesada);
        mostrarMensaje(bebidaProcesada, 'success');

        const respuestaAcompanamiento = await ordenarAcompanamiento(acompanamiento);
        console.log("Respuesta recibida: " + respuestaAcompanamiento);
        const acompanamientoProcesado = await procesarPedido(respuestaAcompanamiento);
        console.log(acompanamientoProcesado);
        mostrarMensaje(acompanamientoProcesado, 'success');

    } catch (error) {
        console.log(error);
        mostrarMensaje(`Error: ${error}`, 'error');
    } finally {
        btnIniciar.disabled = false;
        btnIniciar.textContent = "Iniciar Orden";
    }
}

btnIniciar.addEventListener('click', () => {
    realizarPedido("Smash Burger", "Coke", "Papitas Fritas");
});
