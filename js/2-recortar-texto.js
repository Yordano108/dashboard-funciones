import { recortarTexto } from "./libreria.js";

const TEXTO = document.getElementById("texto");
const LONGITUD = document.getElementById("longitud");
const RECORTAR = document.getElementById("recortar");
const RESULTADO = document.getElementById("resultado");

const procesarRecorte = () => {
    const textoUsuario = TEXTO.value;
    const longitudUsuario = LONGITUD.value;

    const textoFinal = recortarTexto(textoUsuario, longitudUsuario);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-2 w-full text-left">
                <p class="text-gray-400"><span class="text-[#00FFD1]">Texto original:</span> "${textoUsuario || " "}"</p>
                <p class="text-xl font-bold text-white">
                    Resultado: <span class="text-[#00FFD1] font-mono">"${textoFinal}"</span>
                </p>
            </div>
        `;
        RESULTADO.classList.remove("italic", "text-gray-500");
    }
};

if (RECORTAR) {
    RECORTAR.addEventListener("click", procesarRecorte);
}

[TEXTO, LONGITUD].forEach((input) => {
    if (input) {
        input.addEventListener("keypress", (evento) => {
            if (evento.key === "Enter") {
                procesarRecorte();
            }
        });
    }
});
