import { validarNombrePropio } from "./libreria.js";

const NOMBRE_USUARIO = document.getElementById("nombre-usuario");
const VALIDAR = document.getElementById("validar");
const RESULTADO = document.getElementById("resultado");

const procesarValidacion = () => {
    const entradaTexto = NOMBRE_USUARIO.value.trim();

    if (!entradaTexto) {
        if (RESULTADO) {
            RESULTADO.innerHTML = `<p class="text-rose-400 italic text-sm">Por favor, escribe un nombre antes de pulsar validar.</p>`;
        }
        return;
    }

    const esValido = validarNombrePropio(entradaTexto);

    if (RESULTADO) {
        if (esValido) {
            RESULTADO.innerHTML = `
                <div class="flex flex-col gap-2 w-full text-center font-mono">
                    <p class="text-gray-400 font-sans text-sm">Estado de la validación:</p>
                    <div class="text-2xl font-bold text-[#00FFD1] mt-1 tracking-wide uppercase">
                        Nombre Válido
                    </div>
                </div>
            `;
        } else {
            RESULTADO.innerHTML = `
                <div class="flex flex-col gap-2 w-full text-center font-mono">
                    <p class="text-gray-400 font-sans text-sm">Estado de la validación:</p>
                    <div class="text-2xl font-bold text-rose-400 mt-1 tracking-wide uppercase">
                        Nombre No Válido
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Recuerda: No se permiten números ni caracteres especiales aparte del apóstrofe</p>
                </div>
            `;
        }
    }
};

if (VALIDAR) {
    VALIDAR.addEventListener("click", procesarValidacion);
}

if (NOMBRE_USUARIO) {
    NOMBRE_USUARIO.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarValidacion();
        }
    });
}
