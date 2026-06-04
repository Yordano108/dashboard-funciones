import { validarEmail } from "./libreria.js";

const EMAIL = document.getElementById("email");
const VALIDAR = document.getElementById("validar");
const RESULTADO = document.getElementById("resultado");

const procesarValidacionEmail = () => {
    const entradaEmail = EMAIL.value.trim();

    if (!entradaEmail) {
        if (RESULTADO) {
            RESULTADO.innerHTML = `<p class="text-rose-400 italic text-sm">Por favor, escribe un email antes de pulsar validar</p>`;
        }
        return;
    }

    const esValido = validarEmail(entradaEmail);

    if (RESULTADO) {
        if (esValido) {
            RESULTADO.innerHTML = `
                <div class="flex flex-col gap-2 w-full text-center font-mono">
                    <p class="text-gray-400 font-sans text-sm">Estado del correo:</p>
                    <div class="text-2xl font-bold text-[#00FFD1] mt-1 tracking-wide uppercase">
                        Email Válido
                    </div>
                </div>
            `;
        } else {
            RESULTADO.innerHTML = `
                <div class="flex flex-col gap-2 w-full text-center font-mono">
                    <p class="text-gray-400 font-sans text-sm">Estado del correo:</p>
                    <div class="text-2xl font-bold text-rose-400 mt-1 tracking-wide uppercase">
                    Formato Erróneo
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Asegúrate de incluir el carácter '@' y una extensión válida (ej. .com, .es)</p>
                </div>
            `;
        }
    }
};

if (VALIDAR) {
    VALIDAR.addEventListener("click", procesarValidacionEmail);
}

if (EMAIL) {
    EMAIL.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarValidacionEmail();
        }
    });
}
