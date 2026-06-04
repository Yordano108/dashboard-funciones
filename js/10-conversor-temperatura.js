import { convertirTemperatura } from "./libreria.js";

const GRADOS = document.getElementById("grados");
const UNIDAD = document.getElementById("unidad");
const CONVERTIR = document.getElementById("convertir");
const RESULTADO = document.getElementById("resultado");

const procesarConversion = () => {
    const gradosUsuario = parseFloat(GRADOS.value);
    const unidadUsuario = UNIDAD.value;

    if (isNaN(gradosUsuario)) {
        if (RESULTADO)
            RESULTADO.innerHTML = `<p class="text-gray-500 italic">Por favor, introduce un valor numérico.</p>`;
        return;
    }

    const resultadoTexto = convertirTemperatura(gradosUsuario, unidadUsuario);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-2 w-full text-center font-mono">
                <p class="text-gray-400 font-sans text-sm">Resultado de la conversión:</p>
                <div class="text-3xl font-bold text-[#00FFD1] mt-2 tracking-wide">
                    ${resultadoTexto}
                </div>
            </div>
        `;
    }
};

if (CONVERTIR) {
    CONVERTIR.addEventListener("click", procesarConversion);
}

if (GRADOS) {
    GRADOS.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarConversion();
        }
    });
}
