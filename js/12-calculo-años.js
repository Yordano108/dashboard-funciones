import { calcularAniosTranscurridos } from "./libreria.js";

const FECHA = document.getElementById("fecha");
const CALCULAR = document.getElementById("calcular");
const RESULTADO = document.getElementById("resultado");

const procesarCalculoEdad = () => {
    const valorFecha = FECHA.value;

    if (!valorFecha) {
        if (RESULTADO) {
            RESULTADO.innerHTML = `<p class="text-rose-400 italic text-sm">Por favor, introduce una fecha válida utilizando el selector</p>`;
        }
        return;
    }

    const [anio, mes, dia] = valorFecha.split("-").map(Number);
    const fechaObjeto = new Date(anio, mes - 1, dia);

    const resultadoFinal = calcularAniosTranscurridos(fechaObjeto);

    if (RESULTADO) {
        if (resultadoFinal < 0) {
            RESULTADO.innerHTML = `<p class="text-[#00FFD1] italic text-sm">Te adelantaste un poco XD</p>`;
            return;
        }

        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-2 w-full text-center font-mono">
                <p class="text-gray-400 font-sans text-sm">Tiempo transcurrido hasta hoy:</p>
                <div class="text-3xl font-bold text-[#00FFD1] mt-2 tracking-wide">
                    ${resultadoFinal} años
                </div>
            </div>
        `;
    }
};

if (CALCULAR) {
    CALCULAR.addEventListener("click", procesarCalculoEdad);
}

if (FECHA) {
    FECHA.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarCalculoEdad();
        }
    });
}
