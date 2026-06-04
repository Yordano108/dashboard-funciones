import { eliminarPatron } from "./libreria.js";

const TEXTO = document.getElementById("texto");
const PATRON = document.getElementById("patron");
const ELIMINAR = document.getElementById("eliminar");
const RESULTADO = document.getElementById("resultado");

const procesarEliminacion = () => {
    const textoUsuario = TEXTO.value.trim();
    const patronUsuario = PATRON.value;

    if (!textoUsuario || patronUsuario === "") {
        if (RESULTADO)
            RESULTADO.innerHTML = `<p class="text-gray-500 italic">Por favor, rellena ambos campos para proceder</p>`;
        return;
    }

    const textoLimpio = eliminarPatron(textoUsuario, patronUsuario);

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-2 w-full text-left font-mono">
                <p class="text-gray-400 font-sans"><span class="text-[#00FFD1]">Texto original:</span> "${textoUsuario}"</p>
                <p class="text-gray-400 font-sans"><span class="text-[#00FFD1]">Patrón removido:</span> "${patronUsuario}"</p>
                <div class="text-xl font-bold text-white font-sans mt-2">
                    Texto Resultado: 
                    <span class="text-[#00FFD1] block font-mono bg-black/40 p-3 rounded-xl mt-1 text-lg break-all">
                        "${textoLimpio}"
                    </span>
                </div>
            </div>
        `;
    }
};

if (ELIMINAR) {
    ELIMINAR.addEventListener("click", procesarEliminacion);
}

[TEXTO, PATRON].forEach((input) => {
    if (input) {
        input.addEventListener("keypress", (evento) => {
            if (evento.key === "Enter") {
                procesarEliminacion();
            }
        });
    }
});
