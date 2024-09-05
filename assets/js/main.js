const delay = (duration) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, duration * 1000);
    })
}

const saludar = (persona) => {
    return new Promise(async (res, rej) => {
        if(persona.nombre && persona.apellido) {
            await delay(4)
            res(`Hola ${persona.nombre} ${persona.apellido}`)
        } else {
            rej("No es posible saludar, faltan datos"+ JSON.stringify(persona))
        }
    })
}

const personas = [
    { nombre: "Luisa", apellido: "Jimenez"},
    { nombre: "José", apellido: "Morales"},
    { nombre: "Luis", apellido: "Roa"},
    { nombre: "Pedro", apellido: "González"},
    { nombre: "Pablo", apellido: "Rojas"},
    { nombre: "Juan"},
    { nombre: "María", apellido: "Pérez"},
];

// Ejemplo de llamado a la función saludar con callback. Caso de error
// saludar(personas[5])
//     .then(response => console.log(response))
//     .catch(err => console.log(`Error: ${err}`))
//     .finally(() => console.log("Finally caso de error"));

// Ejemplo de llamado a la función saludar con callback. Caso exitoso
// saludar(personas[0])
//     .then(response => console.log(response))
//     .catch(err => console.log(`Error: ${err}`))
//     .finally(() => console.log("Finally caso exitoso"));




(async() => { //Ejemplo de función autoejecutable
    // Ejemplo proceso síncrono
    // Ejemplo con catch
    // for (const persona of personas) {
    //     const saludo = await saludar(persona).catch(err => console.log(err))
    //     console.log(saludo);
    // }

    // Ejemplo proceso síncrono
    // Ejemplo con Try Catch   
    // for (const persona of personas) {
    //     try {
    //         console.log(persona);
    //         const saludo = await saludar(persona)
    //         console.log(saludo);
    //     } catch (error) {
    //         console.log(`Error: ${error}`);
    //     }   
    // }


    // Ejemplo proceso asíncrono
    const promesas = []
    for (const persona of personas) {
        const saludo = saludar(persona)
        promesas.push(saludo)
    }

    // Promise.all(promesas)
    //     .then(resp => console.log(resp)) //Caso exitoso
    //     .catch(err => console.log(`Error: ${err}`)) //Caso de error

    // Promise.allSettled(promesas).then(resp => console.log(resp))

    try {
        const respuestas = await Promise.all(promesas)
        console.log("respuestas", respuestas);
    } catch (error) {
        console.log("Error", error);
    }
    
    
})()