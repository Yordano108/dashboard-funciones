import { contarPalabra } from "./libreria.js";

const TEXTO = document.getElementById("texto");
const PALABRA = document.getElementById("palabra");
const CONTAR = document.getElementById("contar");
const RESULTADO = document.getElementById("resultado");

const procesarConteo = () => {
    const textoUsuario = TEXTO.value.trim();
    const palabraUsuario = PALABRA.value.trim();

    if (!textoUsuario || !palabraUsuario) {
        if (RESULTADO)
            RESULTADO.innerHTML = `<p class="text-gray-500 italic">Por favor, rellena ambos campos para buscar</p>`;
        return;
    }

    const totalRepeticiones = contarPalabra(
        textoUsuario.toLowerCase(),
        palabraUsuario.toLowerCase(),
    );

    if (RESULTADO) {
        RESULTADO.innerHTML = `
            <div class="flex flex-col gap-2 w-full text-left font-mono">
                <p class="text-gray-400 font-sans"><span class="text-[#00FFD1]">Palabra buscada:</span> "${palabraUsuario}"</p>
                <div class="text-xl font-bold text-white font-sans mt-2">
                    Total de repeticiones: 
                    <span class="text-[#00FFD1] block font-mono bg-black/40 p-3 rounded-xl mt-1 text-2xl font-black text-center">
                        ${totalRepeticiones} ${totalRepeticiones === 1 ? "vez" : "veces"}
                    </span>
                </div>
            </div>
        `;
    }
};

if (CONTAR) {
    CONTAR.addEventListener("click", procesarConteo);
}

if (PALABRA) {
    PALABRA.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarConteo();
        }
    });
}
