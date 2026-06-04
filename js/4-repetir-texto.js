import { repetirTexto } from "./libreria.js";

const TEXTO = document.getElementById("texto");
const VECES = document.getElementById("veces");
const REPETIR = document.getElementById("repetir");
const RESULTADO = document.getElementById("resultado");

const procesarRepeticion = () => {
    const textoUsuario = TEXTO.value.trim();
    const vecesUsuario = parseInt(VECES.value, 10);

    if (!textoUsuario || isNaN(vecesUsuario)) {
        if (RESULTADO)
            RESULTADO.innerHTML = `<p class="text-gray-500 italic">Por favor, rellena ambos campos correctamente</p>`;
        return;
    }

    if (vecesUsuario <= 0) {
        if (RESULTADO)
            RESULTADO.innerHTML = `<p class="text-amber-400 italic text-sm">El número de veces debe ser mayor a 0</p>`;
        return;
    }

    const textoFinal = repetirTexto(textoUsuario, vecesUsuario);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-2 w-full text-left font-mono">
                <p class="text-gray-400 font-sans"><span class="text-[#00FFD1]">Texto base:</span> "${textoUsuario}"</p>
                <p class="text-gray-400 font-sans"><span class="text-[#00FFD1]">Repeticiones:</span> ${vecesUsuario} veces</p>
                <div class="text-xl font-bold text-white font-sans mt-2">
                    Resultado: 
                    <span class="text-[#00FFD1] block font-mono bg-black/40 p-3 rounded-xl mt-1 text-base break-all max-h-[200px] overflow-y-auto">
                        ${textoFinal}
                    </span>
                </div>
            </div>
        `;
    }
};

if (REPETIR) {
    REPETIR.addEventListener("click", procesarRepeticion);
}

[TEXTO, VECES].forEach((input) => {
    if (input) {
        input.addEventListener("keypress", (evento) => {
            if (evento.key === "Enter") {
                procesarRepeticion();
            }
        });
    }
});
