import { obtenerMaxMinArray } from "./libreria.js";

const ARRAY = document.getElementById("array");
const CALCULAR = document.getElementById("calcular");
const RESULTADO = document.getElementById("resultado");

const procesarMaxMinArray = () => {
    const valorTexto = ARRAY.value.trim();

    if (!valorTexto) {
        if (RESULTADO) {
            RESULTADO.innerHTML = `<p class="text-rose-400 italic text-sm">Por favor, introduce una lista de números válidos</p>`;
        }
        return;
    }

    const arrayNumeros = valorTexto
        .split(",")
        .map((elemento) => elemento.trim())
        .filter((elemento) => elemento !== "" && !isNaN(elemento))
        .map(Number);

    if (arrayNumeros.length === 0) {
        if (RESULTADO) {
            RESULTADO.innerHTML = `<p class="text-rose-400 italic text-sm">Asegúrate de escribir números válidos separados por comas (ej: 1, 4, 99)</p>`;
        }
        return;
    }

    const resultadoFinal = obtenerMaxMinArray(arrayNumeros);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-2 w-full text-center font-mono">
                <p class="text-gray-400 font-sans text-sm">Resultado obtenido [Máx, Mín]:</p>
                <div class="text-3xl font-bold text-[#00FFD1] mt-2 tracking-wide">
                    [ ${resultadoFinal.join(", ")} ]
                </div>
            </div>
        `;
    }
};

if (CALCULAR) {
    CALCULAR.addEventListener("click", procesarMaxMinArray);
}

if (ARRAY) {
    ARRAY.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarMaxMinArray();
        }
    });
}
