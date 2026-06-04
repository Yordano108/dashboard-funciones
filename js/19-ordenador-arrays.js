import { ordenarArrayBidireccional } from "./libreria.js";

const ARRAY = document.getElementById("array");
const ORDENAR = document.getElementById("ordenar");
const RESULTADO = document.getElementById("resultado");

const procesarOrdenacion = () => {
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

    const { asc, desc } = ordenarArrayBidireccional(arrayNumeros);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-3 w-full font-mono text-center">
                <p class="text-gray-400 font-sans text-sm">Resultado:</p>
                <div class="flex flex-col gap-3 sm:flex-row sm:justify-around items-center mt-1">
                    <div class="flex flex-col gap-1">
                        <span class="text-xs uppercase text-gray-400 font-sans">Ascendente</span>
                        <span class="text-lg font-bold text-[#00FFD1]">[ ${asc.join(", ")} ]</span>
                    </div>
                    <div class="hidden sm:block h-8 w-[1px] bg-[#0E8388]/40"></div>
                    <div class="flex flex-col gap-1">
                        <span class="text-xs uppercase text-gray-400 font-sans">Descendente</span>
                        <span class="text-lg font-bold text-[#00FFD1]">[ ${desc.join(", ")} ]</span>
                    </div>
                </div>
            </div>
        `;
    }
};

if (ORDENAR) {
    ORDENAR.addEventListener("click", procesarOrdenacion);
}

if (ARRAY) {
    ARRAY.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarOrdenacion();
        }
    });
}
