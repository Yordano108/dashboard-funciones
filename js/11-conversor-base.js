import { convertirBase } from "./libreria.js";

const NUMERO = document.getElementById("numero");
const TIPO = document.getElementById("tipo");
const CONVERTIR = document.getElementById("convertir");
const RESULTADO = document.getElementById("resultado");

const procesarConversion = () => {
    const numeroUsuario = NUMERO.value.trim();
    const tipoConversion = TIPO.value;

    if (!numeroUsuario) {
        if (RESULTADO)
            RESULTADO.innerHTML = `<p class="text-gray-500 italic">Por favor, introduce un número.</p>`;
        return;
    }

    if (tipoConversion === "B2D" && /[^01]/.test(numeroUsuario)) {
        if (RESULTADO)
            RESULTADO.innerHTML = `<p class="text-rose-400 italic text-sm">Un número binario solo puede contener 0s y 1s</p>`;
        return;
    }

    if (
        tipoConversion === "D2B" &&
        (isNaN(numeroUsuario) || parseInt(numeroUsuario, 10) < 0)
    ) {
        if (RESULTADO)
            RESULTADO.innerHTML = `<p class="text-rose-400 italic text-sm">Introduce un número decimal entero positivo</p>`;
        return;
    }

    const resultadoFinal = convertirBase(numeroUsuario, tipoConversion);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-2 w-full text-center font-mono">
                <p class="text-gray-400 font-sans text-sm">Resultado obtenido:</p>
                <div class="text-3xl font-bold text-[#00FFD1] mt-2 tracking-wide">
                    ${resultadoFinal}
                </div>
            </div>
        `;
    }
};

if (CONVERTIR) {
    CONVERTIR.addEventListener("click", procesarConversion);
}

if (NUMERO) {
    NUMERO.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarConversion();
        }
    });
}
