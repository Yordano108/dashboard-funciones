import { elevarArrayAlCuadrado } from "./libreria.js";

const ARRAY = document.getElementById("array");
const CALCULAR = document.getElementById("calcular");
const RESULTADO = document.getElementById("resultado");

const procesarArrayCuadrado = () => {
    const valorInput = ARRAY.value.trim();

    if (!valorInput) {
        if (RESULTADO) {
            RESULTADO.innerHTML = `<p class="text-rose-400 italic text-sm">Por favor, introduce una lista de números válidos</p>`;
        }
        return;
    }

    const arrayNumeros = valorInput
        .split(",")
        .map((elemento) => elemento.trim())
        .filter((elemento) => elemento !== "" && !isNaN(elemento))
        .map(Number);

    if (arrayNumeros.length === 0) {
        if (RESULTADO) {
            RESULTADO.innerHTML = `<p class="text-rose-400 italic text-sm">Asegúrate de escribir números válidos separados por comas (ej: 1, 4, 5).</p>`;
        }
        return;
    }

    const resultadoFinal = elevarArrayAlCuadrado(arrayNumeros);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-2 w-full text-center font-mono">
                <p class="text-gray-400 font-sans text-sm">Resultado:</p>
                <div class="text-2xl font-bold text-[#00FFD1] mt-2 tracking-wide">
                    [ ${resultadoFinal.join(", ")} ]
                </div>
            </div>
        `;
    }
};

if (CALCULAR) {
    CALCULAR.addEventListener("click", procesarArrayCuadrado);
}

if (ARRAY) {
    ARRAY.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarArrayCuadrado();
        }
    });
}
