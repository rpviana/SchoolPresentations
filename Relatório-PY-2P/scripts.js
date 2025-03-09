function copyCode() {
    const codeBlock = document.getElementById('code-block');
    const range = document.createRange();
    range.selectNode(codeBlock);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand('copy');
        alert('Código copiado com sucesso!');
    } catch (err) {
        alert('Erro ao copiar código.');
    }

    selection.removeAllRanges();
}

document.addEventListener("DOMContentLoaded", () => {
    // Botão de cópia
    document.querySelectorAll(".copy-btn").forEach(button => {
        button.addEventListener("click", () => {
            const codeBlock = button.previousElementSibling;
            if (codeBlock) {
                const range = document.createRange();
                range.selectNodeContents(codeBlock);
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);

                try {
                    document.execCommand("copy");
                    selection.removeAllRanges();
                    button.textContent = "Copiado!";
                    setTimeout(() => {
                        button.textContent = "Copiar";
                    }, 2000);
                } catch (err) {
                    console.error("Erro ao copiar código: ", err);
                }
            }
        });
    });

    // Efeitos dinâmicos nos botões
    document.querySelectorAll(".nav-button").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.2s";
        });

        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Botões de voltar
    const backButton = document.querySelector(".back-btn");
    if (backButton) {
        backButton.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
});
