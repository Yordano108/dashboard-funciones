import { eliminarDuplicadosArray } from "./libreria.js";

const ARRAY = document.getElementById("array");
const LIMPIAR = document.getElementById("limpiar");
const RESULTADO = document.getElementById("resultado");

const procesarLimpiezaDuplicados = () => {
    const valorTexto = ARRAY.value.trim();

    if (!valorTexto) {
        if (RESULTADO) {
            RESULTADO.innerHTML = `<p class="text-rose-400 italic text-sm">Por favor, introduce una lista de elementos</p>`;
        }
        return;
    }

    const arrayElementos = valorTexto
        .split(",")
        .map((elemento) => elemento.trim())
        .filter((elemento) => elemento !== "")
        .map((elemento) => {
            if (elemento.toLowerCase() === "true") return true;
            if (elemento.toLowerCase() === "false") return false;

            if (
                (elemento.startsWith("'") && elemento.endsWith("'")) ||
                (elemento.startsWith('"') && elemento.endsWith('"'))
            ) {
                return elemento.slice(1, -1);
            }

            if (!isNaN(elemento)) return Number(elemento);

            return elemento;
        });

    const resultadoFinal = eliminarDuplicadosArray(arrayElementos);

    if (RESULTADO) {
        const vistaFormateada = resultadoFinal
            .map((el) => (typeof el === "string" ? `"${el}"` : el))
            .join(", ");

        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-2 w-full text-center font-mono">
                <p class="text-gray-400 font-sans text-sm">Resultado:</p>
                <div class="text-2xl font-bold text-[#00FFD1] mt-2 tracking-wide">
                    [ ${vistaFormateada} ]
                </div>
            </div>
        `;
    }
};

if (LIMPIAR) {
    LIMPIAR.addEventListener("click", procesarLimpiezaDuplicados);
}

if (ARRAY) {
    ARRAY.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarLimpiezaDuplicados();
        }
    });
}
