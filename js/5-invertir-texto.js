import { invertirTexto } from "./libreria.js";

const TEXTO = document.getElementById("texto");
const INVERTIR = document.getElementById("invertir");
const RESULTADO = document.getElementById("resultado");

const procesarInversion = () => {
    const textoUsuario = TEXTO.value.trim();

    if (!textoUsuario) {
        if (RESULTADO)
            RESULTADO.innerHTML = `<p class="text-gray-500 italic">Por favor, escribe algo para poder invertirlo</p>`;
        return;
    }

    const textoInvertido = invertirTexto(textoUsuario);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-2 w-full text-left font-mono">
                <p class="text-gray-400 font-sans"><span class="text-[#00FFD1]">Texto original:</span> "${textoUsuario}"</p>
                <div class="text-xl font-bold text-white font-sans mt-2">
                    Texto Invertido: 
                    <span class="text-[#00FFD1] block font-mono bg-black/40 p-3 rounded-xl mt-1 text-lg break-all">
                        "${textoInvertido}"
                    </span>
                </div>
            </div>
        `;
    }
};

if (INVERTIR) {
    INVERTIR.addEventListener("click", procesarInversion);
}

if (TEXTO) {
    TEXTO.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarInversion();
        }
    });
}
