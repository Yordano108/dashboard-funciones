import { obtenerAleatorio } from "./libreria.js";

const GENERAR = document.getElementById("generar");
const RESULTADO = document.getElementById("resultado");

const procesarAleatorio = () => {
    const MIN = 501;
    const MAX = 600;

    const numeroSuerte = obtenerAleatorio(MIN, MAX);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-1 w-full text-center font-mono">
                <p class="text-gray-400 font-sans text-sm">Número obtenido:</p>
                <div class="text-5xl font-black text-[#00FFD1] mt-2 tracking-wider animate-pulse">
                    ${numeroSuerte}
                </div>
            </div>
        `;
    }
};

if (GENERAR) {
    GENERAR.addEventListener("click", procesarAleatorio);
}
