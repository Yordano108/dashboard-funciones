import { contarCaracteres } from "./libreria.js";

const TEXTO = document.getElementById("texto");
const CONTAR = document.getElementById("contar");
const RESULTADO = document.getElementById("resultado");

const procesarConteo = () => {
    const textoUsuario = TEXTO.value;

    const totalCaracteres = contarCaracteres(textoUsuario);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-2 w-full text-left">
                <p class="text-gray-400"><span class="text-[#00FFD1]">Tu texto:</span> "${textoUsuario || " "}"</p>
                <p class="text-xl font-bold text-white">
                    Total de caracteres: <span class="text-[#00FFD1] text-2xl">${totalCaracteres}</span>
                </p>
            </div>
        `;

        RESULTADO.classList.remove("italic", "text-gray-500");
    }
};

if (CONTAR) {
    CONTAR.addEventListener("click", procesarConteo);
}

if (TEXTO) {
    TEXTO.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarConteo();
        }
    });
}
