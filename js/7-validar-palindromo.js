import { esPalindromo } from "./libreria.js";

const TEXTO = document.getElementById("texto");
const VALIDAR = document.getElementById("validar");
const RESULTADO = document.getElementById("resultado");

const procesarValidacion = () => {
    const textoUsuario = TEXTO.value.trim();

    if (!textoUsuario) {
        if (RESULTADO)
            RESULTADO.innerHTML = `<p class="text-gray-500 italic">Por favor, escribe una palabra o frase</p>`;
        return;
    }

    const resultadoValidacion = esPalindromo(textoUsuario);

    if (RESULTADO) {
        const claseColor = resultadoValidacion
            ? "text-[#00FFD1] bg-[#00FFD1]/10 border-[#00FFD1]"
            : "text-rose-400 bg-rose-500/10 border-rose-500/30";
        const mensaje = resultadoValidacion
            ? `¡Confirmado! El texto "${textoUsuario}" sí es un palíndromo`
            : `El texto "${textoUsuario}" no es un palíndromo`;

        RESULTADO.innerHTML = `
            <div class="w-full p-4 rounded-xl border ${claseColor} text-center text-lg font-sans">
                ${mensaje}
            </div>
        `;
    }
};

if (VALIDAR) {
    VALIDAR.addEventListener("click", procesarValidacion);
}

if (TEXTO) {
    TEXTO.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarValidacion();
        }
    });
}
