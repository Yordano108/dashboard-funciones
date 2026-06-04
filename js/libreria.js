/**
 * Cuenta únicamente los caracteres alfanuméricos (letras y números),
 * ignorando espacios, comas, puntos y símbolos
 * @param {string} texto - La cadena de texto que se va a evaluar
 * @returns {number} El número total de letras y números encontrados
 */
export const contarCaracteres = (texto) => {
    if (typeof texto !== "string") return 0;

    // [^...] significa: "Borra todo lo que NO sea lo siguiente"
    // a-z A-Z : Letras inglesas
    // 0-9     : Números
    // áéíóúÁÉÍÓÚñÑ : Letras con acentos y la eñe
    // la 'g' hace que se aplique a todo el texto
    const soloAlfanumericos = texto.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]/g, "");

    // Devolvemos la longitud del texto filtrado
    return soloAlfanumericos.length;
};

/**
 * Recorta un texto devolviendo la cantidad de caracteres alfanuméricos indicada (ignora espacios y símbolos en el conteo)
 * @param {string} texto - La cadena de texto a recortar
 * @param {number} longitud - El número de letras/números que se desean conservar
 * @returns {string} El fragmento de texto recortado y limpio
 */
export const recortarTexto = (texto, longitud) => {
    if (typeof texto !== "string") return "";

    // 1. Filtramos para quedarnos solo con letras y números
    const soloAlfanumericos = texto.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]/g, "");

    // 2. Convertimos a número absoluto: si es -5 se transforma en 5 de forma segura
    const longitudSegura = Math.abs(Number(longitud)) || 0;

    // 3. Recortamos sobre la cadena ya limpia usando el valor positivo
    return soloAlfanumericos.slice(0, longitudSegura);
};

/**
 * Toma un texto con palabras separadas por espacios y reemplaza esos espacios por el carácter elegido.
 * @param {string} texto - El texto original con espacios (ej. "hola que tal")
 * @param {string} separador - El carácter que unirá las palabras (ej. "-")
 * @returns {string} El texto con las palabras unidas por el nuevo separador
 */
export const separarTexto = (texto, separador) => {
    if (typeof texto !== "string" || texto.trim() === "") return "";

    // Dividimos el texto por sus espacios, limpiamos huecos vacíos y lo unimos con el nuevo carácter
    return texto
        .split(" ")
        .filter((palabra) => palabra.trim() !== "")
        .join(separador);
};

/**
 * Repite un texto una cantidad determinada de veces, separados por un espacio.
 * @param {string} texto - El texto que se va a repetir.
 * @param {number} veces - Cantidad de veces a repetir.
 * @returns {string} El texto repetido X veces.
 */
export const repetirTexto = (texto, veces) => {
    if (typeof texto !== "string" || veces <= 0) return "";

    // Añadimos un espacio al final del texto, lo repetimos y limpiamos el último espacio suelto
    return `${texto} `.repeat(veces).trim();
};

/**
 * Invierte una cadena de texto de atrás hacia adelante de forma exacta.
 * @param {string} texto - El texto original a invertir.
 * @returns {string} El texto completamente invertido.
 */
export const invertirTexto = (texto) => {
    if (typeof texto !== "string") return "";

    // Convertimos a array, invertimos las posiciones y volvemos a unir como string
    return texto.split("").reverse().join("");
};

/**
 * Cuenta cuántas veces se repite una palabra específica dentro de una cadena de texto.
 * @param {string} texto - El texto completo donde buscar.
 * @param {string} palabra - La palabra objetivo a contabilizar.
 * @returns {number} El número total de veces que aparece la palabra.
 */
export const contarPalabra = (texto, palabra) => {
    if (
        typeof texto !== "string" ||
        typeof palabra !== "string" ||
        palabra === ""
    )
        return 0;

    // Rompemos el texto usando la palabra como separador y restamos 1 al total de fragmentos
    return texto.split(palabra).length - 1;
};

/**
 * Evalúa si una cadena de texto es un palíndromo, ignorando mayúsculas y espacios.
 * @param {string} texto - La palabra o frase a evaluar.
 * @returns {boolean} True si es palíndromo, false si no lo es.
 */
export const esPalindromo = (texto) => {
    if (typeof texto !== "string" || texto.trim() === "") return false;

    // Preparamos el texto: pasamos a minúsculas y eliminamos todos los espacios en blanco
    const textoLimpio = texto.toLowerCase().replaceAll(" ", "");

    // Invertimos el texto limpio usando el truco de separar, voltear y unir
    const textoInvertido = textoLimpio.split("").reverse().join("");

    // Comparamos el original limpio contra el invertido
    return textoLimpio === textoInvertido;
};

/**
 * Elmina un patrón de texto específico dentro de un string.
 * @param {string} texto - El texto base.
 * @param {string} patron - El fragmento o caracteres a borrar.
 * @returns {string} El texto modificado sin el patrón especificado.
 */
export const eliminarPatron = (texto, patron) => {
    if (typeof texto !== "string" || typeof patron !== "string") return "";

    // Reemplazamos globalmente el patrón por un string vacío
    return texto.replaceAll(patron, "");
};

/**
 * Genera un número entero aleatorio entre un rango determinado.
 * @param {number} min - El límite inferior del rango.
 * @param {number} max - El límite superior del rango.
 * @returns {number} Un número entero aleatorio.
 */
export const obtenerAleatorio = (min, max) => {
    // Forzamos que los parámetros sean tratados como números enteros
    const limiteInferior = Math.ceil(min);
    const limiteSuperior = Math.floor(max);

    // Aplicamos la fórmula matemática de dispersión con Math.random
    return (
        Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) +
        limiteInferior
    );
};

/**
 * Convierte grados Celsius a Fahrenheit y viceversa.
 * @param {number} grados - El valor numérico de la temperatura.
 * @param {string} unidad - La unidad de origen ("C" para Celsius, "F" para Fahrenheit).
 * @returns {string} El resultado formateado con su unidad correspondiente.
 */
export const convertirTemperatura = (grados, unidad) => {
    if (typeof grados !== "number") return "";

    if (unidad === "C") {
        // Fórmula de Celsius a Fahrenheit
        const fahrenheit = grados * 1.8 + 32;
        // Si el número tiene decimales complejos lo reducimos a 1 decimal, si es entero lo dejamos limpio
        const resultadoFinal = Number.isInteger(fahrenheit)
            ? fahrenheit
            : fahrenheit.toFixed(1);
        return `${resultadoFinal}°F`;
    }

    if (unidad === "F") {
        // Fórmula de Fahrenheit a Celsius
        const celsius = (grados - 32) / 1.8;
        const resultadoFinal = Number.isInteger(celsius)
            ? celsius
            : celsius.toFixed(1);
        return `${resultadoFinal}°C`;
    }

    return "Unidad no válida";
};

/**
 * Convierte números de base binaria a decimal y viceversa de forma exacta.
 * @param {string|number} numero - El número a convertir (como string o number).
 * @param {string} tipo - "B2D" (Binario a Decimal) o "D2B" (Decimal a Binario).
 * @returns {string} El resultado con la base de destino indicada.
 */
export const convertirBase = (numero, tipo) => {
    if (tipo === "B2D") {
        // Pasamos el string binario a un entero decimal usando base 2
        const decimal = parseInt(numero, 2);
        return `${decimal} base 10`;
    }

    if (tipo === "D2B") {
        // Convertimos el número decimal a su representación binaria string usando .toString(2)
        const binario = parseInt(numero, 10).toString(2);
        return `${binario} base 2`;
    }

    return "Conversión no soportada";
};

/**
 * Determina cuántos años exactos han transcurrido desde una fecha válida hasta el día de hoy.
 * @param {Date} fecha - El objeto de tipo Date a evaluar.
 * @returns {number|string} El número total de años transcurridos o un mensaje de error controlado.
 */
export const calcularAniosTranscurridos = (fecha) => {
    if (!(fecha instanceof Date) || isNaN(fecha.getTime())) {
        return "Fecha no válida";
    }

    const hoy = new Date();
    let anios = hoy.getFullYear() - fecha.getFullYear();

    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesCumple = fecha.getMonth();
    const diaCumple = fecha.getDate();

    // Si aún no se ha alcanzado el mes de cumpleaños, o si estamos en el mismo mes pero el día no ha llegado
    if (
        mesActual < mesCumple ||
        (mesActual === mesCumple && diaActual < diaCumple)
    ) {
        anios--;
    }

    return anios;
};

/**
 * Cuenta el número de vocales y consonantes en una cadena de texto.
 * @param {string} texto - La cadena de texto a evaluar.
 * @returns {object} Un objeto con el conteo de { vocales, consonantes } o ceros si no es válido.
 */
export const contarVocalesConsonantes = (texto) => {
    if (typeof texto !== "string" || texto.trim() === "")
        return { vocales: 0, consonantes: 0 };

    // Pasamos a minúsculas para unificar la evaluación
    const textoLimpio = texto.toLowerCase();

    let vocales = 0;
    let consonantes = 0;

    // Recorremos cada carácter del texto limpio
    for (let caracter of textoLimpio) {
        // Evaluamos si es una vocal (incluye tildes corrientes)
        if (/[aeiouáéíóúü]/.test(caracter)) {
            vocales++;
        }
        // Evaluamos si es una consonante (letras de la 'a' a la 'z' excluyendo vocales, e incluyendo la 'ñ')
        else if (/[a-zñ]/.test(caracter)) {
            consonantes++;
        }
    }

    return { vocales, consonantes };
};

/**
 * Valida si un texto es un nombre propio aceptable (solo letras, espacios y apóstrofes).
 * @param {string} texto - El nombre que se va a evaluar.
 * @returns {boolean} True si el nombre es válido, False en caso contrario.
 */
export const validarNombrePropio = (texto) => {
    if (typeof texto !== "string" || texto.trim() === "") return false;

    // ^ y $ aseguran que evalúe TODO el texto de inicio a fin.
    // a-zA-ZáéíóúÁÉÍÓÚñÑüÜ : Abanico completo de letras en español.
    // \s : Permite espacios intermedios.
    // '  : Permite el apóstrofe.
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s']+$/;

    return regexNombre.test(texto);
};

/**
 * Valida si una cadena de texto tiene el formato correcto de un correo electrónico.
 * @param {string} texto - El email que se va a evaluar.
 * @returns {boolean} True si el formato es correcto, False en caso contrario.
 */
export const validarEmail = (texto) => {
    if (typeof texto !== "string" || texto.trim() === "") return false;

    // Expresión regular estándar para comprobar la estructura de un correo
    // [a-z0-9_.-]+       : Nombre de usuario (letras, números, guiones, puntos)
    // @                  : Debe contener obligatoriamente el arroba
    // [a-z0-9.-]+        : Proveedor del dominio
    // \.[a-z]{2,6}       : Extensión final (de 2 a 6 letras de longitud, ej: .com, .es, .media)
    const regexEmail = /^[a-z0-9_.-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i;

    return regexEmail.test(texto.trim());
};

/**
 * Toma un array numérico y devuelve un nuevo array con cada elemento elevado al cuadrado.
 * @param {number[]} arr - El array de números a procesar.
 * @returns {number[]} Un nuevo array con los resultados obtenidos.
 */
export const elevarArrayAlCuadrado = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return [];

    // .map() recorre el array original y genera uno nuevo aplicando la potencia Math.pow o el operador **
    return arr.map((num) => num ** 2);
};

/**
 * Obtiene el valor máximo y mínimo de un array numérico devolviendo un nuevo array [max, min].
 * @param {number[]} arr - El array de números a evaluar.
 * @returns {number[]} Un array con dos posiciones: [máximo, mínimo].
 */
export const obtenerMaxMinArray = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return [];

    // Retornamos directamente la estructura [max, min] solicitada
    return [Math.max(...arr), Math.min(...arr)];
};

/**
 * Clasifica un array de números en un objeto con dos arreglos: pares e impares.
 * @param {number[]} arr - El array numérico a evaluar.
 * @returns {object} Un objeto con la estructura { pares: [], impares: [] }.
 */
export const clasificarParesImpares = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0)
        return { pares: [], impares: [] };

    return arr.reduce(
        (acumulador, num) => {
            // Si el residuo es 0 va a pares, si no va a impares
            if (num % 2 === 0) {
                acumulador.pares.push(num);
            } else {
                acumulador.impares.push(num);
            }
            return acumulador;
        },
        { pares: [], impares: [] },
    ); // Objeto inicial con los dos arrays vacíos
};

/**
 * Toma un array de números y devuelve un objeto con dos arrays ordenados: uno ascendente y otro descendiente.
 * Hace una única ordenación en memoria para mejorar el rendimiento.
 * @param {number[]} arr - El array numérico a ordenar.
 * @returns {object} Un objeto con la estructura { asc: [], desc: [] }.
 */
export const ordenarArrayBidireccional = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return { asc: [], desc: [] };

    // 1. Clonamos y ordenamos una Sola Vez (Ascendente) -> Complejidad O(n log n)
    const asc = [...arr].sort((a, b) => a - b);

    // 2. Creamos el descendente invirtiendo el que ya está ordenado -> Complejidad O(n) mucho más rápido
    const desc = [...asc].reverse();

    return { asc, desc };
};

/**
 * Elimina todos los elementos duplicados de un array utilizando la estructura de datos Set.
 * @param {Array} arr - El array con elementos repetidos.
 * @returns {Array} Un nuevo array con elementos únicos conservando su tipo.
 */
export const eliminarDuplicadosArray = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return [];

    // new Set(arr) elimina duplicados en O(n). El operador [...] lo reconvierte a array.
    return [...new Set(arr)];
};

/**
 * Calcula el promedio de un array de números.
 * @param {number[]} arr - El array numérico a evaluar.
 * @returns {number} El resultado del promedio obtenido.
 */
export const calcularPromedioArray = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return 0;

    // .reduce() suma todos los elementos; luego dividimos por el total de números (arr.length)
    const sumaTotal = arr.reduce((acumulador, num) => acumulador + num, 0);

    return sumaTotal / arr.length;
};
