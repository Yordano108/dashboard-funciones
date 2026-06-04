import { calcularPromedioArray } from "./libreria.js";

const ARRAY = document.getElementById("array");
const CALCULAR = document.getElementById("calcular");
const RESULTADO = document.getElementById("resultado");

const procesarPromedio = () => {
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
            RESULTADO.innerHTML = `<p class="text-rose-400 italic text-sm">Asegúrate de escribir números válidos separados por comas</p>`;
        }
        return;
    }

    const promedioFinal = calcularPromedioArray(arrayNumeros);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-2 w-full text-center font-mono">
                <p class="text-gray-400 font-sans text-sm">Promedio obtenido:</p>
                <div class="text-4xl font-black text-[#00FFD1] mt-2 tracking-wide">
                    ${promedioFinal}
                </div>
            </div>
        `;
    }
};

if (CALCULAR) {
    CALCULAR.addEventListener("click", procesarPromedio);
}

if (ARRAY) {
    ARRAY.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarPromedio();
        }
    });
}
