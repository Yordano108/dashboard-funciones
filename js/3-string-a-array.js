import { separarTexto } from "./libreria.js";

const TEXTO = document.getElementById("texto");
const SEPARADOR = document.getElementById("separador");
const SEPARAR = document.getElementById("separar");
const RESULTADO = document.getElementById("resultado");

const procesarSeparacion = () => {
    const textoUsuario = TEXTO.value.trim();

    let separadorUsuario = SEPARADOR.value.trim().toLowerCase();

    if (separadorUsuario === "guion") separadorUsuario = "-";
    else if (separadorUsuario === "coma") separadorUsuario = ",";
    else if (separadorUsuario === "barra") separadorUsuario = "/";
    else if (separadorUsuario === "" || separadorUsuario === "espacio")
        separadorUsuario = " ";

    if (!textoUsuario) {
        if (RESULTADO)
            RESULTADO.innerHTML = `<p class="text-gray-500 italic">Por favor, ingresa un texto válido.</p>`;
        return;
    }

    if (!textoUsuario.includes(" ")) {
        if (RESULTADO) {
            RESULTADO.innerHTML = `
                <p class="text-amber-400 text-sm">
                    Para separar palabras, escribe una frase que contenga espacios. Ej: "hola que tal"
                </p>
            `;
        }
        return;
    }

    const textoTransformado = separarTexto(textoUsuario, separadorUsuario);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-2 w-full text-left font-mono">
                <p class="text-gray-400 font-sans"><span class="text-[#00FFD1]">Texto original:</span> "${textoUsuario}"</p>
                <p class="text-gray-400 font-sans"><span class="text-[#00FFD1]">Conector aplicado:</span> "${separadorUsuario === " " ? "[Espacio]" : separadorUsuario}"</p>
                <div class="text-xl font-bold text-white font-sans mt-2">
                    Texto Resultado: 
                    <span class="text-[#00FFD1] block font-mono bg-black/40 p-3 rounded-xl mt-1 text-lg break-all">
                        ${textoTransformado}
                    </span>
                </div>
            </div>
        `;
    }
};

if (SEPARAR) {
    SEPARAR.addEventListener("click", procesarSeparacion);
}

[TEXTO, SEPARADOR].forEach((input) => {
    if (input) {
        input.addEventListener("keypress", (evento) => {
            if (evento.key === "Enter") {
                procesarSeparacion();
            }
        });
    }
});
