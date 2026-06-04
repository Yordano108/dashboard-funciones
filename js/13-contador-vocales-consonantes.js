import { contarVocalesConsonantes } from "./libreria.js";

const TEXTO = document.getElementById("texto");
const CONTAR = document.getElementById("contar");
const RESULTADO = document.getElementById("resultado");

const procesarConteoLetras = () => {
    const cadenaUsuario = TEXTO.value.trim();

    if (!cadenaUsuario) {
        if (RESULTADO) {
            RESULTADO.innerHTML = `<p class="text-rose-400 italic text-sm">Por favor, introduce un texto para poder realizar el conteo.</p>`;
        }
        return;
    }

    const { vocales, consonantes } = contarVocalesConsonantes(cadenaUsuario);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-3 w-full font-mono text-center">
                <p class="text-gray-400 font-sans text-sm">Análisis de la cadena:</p>
                <div class="flex justify-around items-center mt-1">
                    <div class="flex flex-col gap-1">
                        <span class="text-xs uppercase text-gray-400 font-sans">Vocales</span>
                        <span class="text-4xl font-black text-[#00FFD1]">${vocales}</span>
                    </div>
                    <div class="h-8 w-[1px] bg-[#0E8388]/40"></div>
                    <div class="flex flex-col gap-1">
                        <span class="text-xs uppercase text-gray-400 font-sans">Consonantes</span>
                        <span class="text-4xl font-black text-[#00FFD1]">${consonantes}</span>
                    </div>
                </div>
            </div>
        `;
    }
};

if (CONTAR) {
    CONTAR.addEventListener("click", procesarConteoLetras);
}

if (TEXTO) {
    TEXTO.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarConteoLetras();
        }
    });
}
