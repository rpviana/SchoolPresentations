document.addEventListener('DOMContentLoaded', function() {
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Fecha todos os outros conteúdos de acordeão antes de abrir o clicado
            accordionBtns.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    otherBtn.classList.remove('active');
                    otherBtn.nextElementSibling.style.display = 'none';

                    // Fechar sub-botões também
                    const subAccordionBtns = otherBtn.nextElementSibling.querySelectorAll('.sub-accordion-btn');
                    subAccordionBtns.forEach(subBtn => {
                        subBtn.classList.remove('active');
                        subBtn.nextElementSibling.style.display = 'none';
                    });
                }
            });

            // Alterna a classe 'active' para destacar o botão clicado
            btn.classList.toggle('active');

            // Encontra o próximo elemento .accordion-content
            const accordionContent = btn.nextElementSibling;

            // Fecha a .accordion-content se estiver aberta; abre se estiver fechada
            if (accordionContent.style.display === 'block') {
                accordionContent.style.display = 'none';

                // Fechar sub-botões também
                const subAccordionBtns = accordionContent.querySelectorAll('.sub-accordion-btn');
                subAccordionBtns.forEach(subBtn => {
                    subBtn.classList.remove('active');
                    subBtn.nextElementSibling.style.display = 'none';
                });
            } else {
                accordionContent.style.display = 'block';
            }
        });

        // Event listener para os sub-botões
        const subAccordionBtns = btn.nextElementSibling.querySelectorAll('.sub-accordion-btn');
        subAccordionBtns.forEach(subBtn => {
            subBtn.addEventListener('click', function() {
                // Fecha todos os outros sub-botões antes de abrir o clicado
                subAccordionBtns.forEach(otherSubBtn => {
                    if (otherSubBtn !== subBtn) {
                        otherSubBtn.classList.remove('active');
                        otherSubBtn.nextElementSibling.style.display = 'none';
                    }
                });

                // Alterna a classe 'active' para destacar o sub-botão clicado
                subBtn.classList.toggle('active');

                // Encontra o próximo elemento .sub-accordion-content
                const subAccordionContent = subBtn.nextElementSibling;

                // Fecha a .sub-accordion-content se estiver aberta; abre se estiver fechada
                if (subAccordionContent.style.display === 'block') {
                    subAccordionContent.style.display = 'none';
                } else {
                    subAccordionContent.style.display = 'block';
                }
            });
        });
    });
});


