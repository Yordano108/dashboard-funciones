import { clasificarParesImpares } from "./libreria.js";

const ARRAY = document.getElementById("array");
const CLASIFICAR = document.getElementById("clasificar");
const RESULTADO = document.getElementById("resultado");

const procesarClasificacion = () => {
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

    const { pares, impares } = clasificarParesImpares(arrayNumeros);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-3 w-full font-mono text-center">
                <p class="text-gray-400 font-sans text-sm">Clasificación completada:</p>
                <div class="flex justify-around items-center mt-1">
                    <div class="flex flex-col gap-1">
                        <span class="text-xs uppercase text-gray-400 font-sans">Pares</span>
                        <span class="text-xl font-black text-[#00FFD1]">[ ${pares.join(", ")} ]</span>
                    </div>
                    <div class="h-8 w-[1px] bg-[#0E8388]/40"></div>
                    <div class="flex flex-col gap-1">
                        <span class="text-xs uppercase text-gray-400 font-sans">Impares</span>
                        <span class="text-xl font-black text-[#00FFD1]">[ ${impares.join(", ")} ]</span>
                    </div>
                </div>
            </div>
        `;
    }
};

if (CLASIFICAR) {
    CLASIFICAR.addEventListener("click", procesarClasificacion);
}

if (ARRAY) {
    ARRAY.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarClasificacion();
        }
    });
}
