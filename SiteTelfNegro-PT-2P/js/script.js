function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Esconde todas as seções
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block'; // Mostra a seção selecionada

    hideInitialScreen(); // Esconde a tela inicial
    hidePresentationMessage(); // Esconde a mensagem de apresentação
}

function hideInitialScreen() {
    const initialScreen = document.getElementById('initialScreen');
    initialScreen.style.display = 'none'; // Esconde a tela inicial
}

function hidePresentationMessage() {
    const presentationMessage = document.getElementById('presentationMessage');
    if (presentationMessage) {
        presentationMessage.style.display = 'none'; // Esconde a mensagem de apresentação, se existir
    }
}

function toggleDisplay(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none' || !element.style.display) {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Novas funções para as ações
function toggleMainActions() {
    const mainActions = document.getElementById('main-actions');
    const secondaryActions = document.getElementById('secondary-actions');
    mainActions.style.display = mainActions.style.display === 'none' ? 'block' : 'none';
    secondaryActions.style.display = 'none'; // Esconde a seção de ações secundárias
}

function toggleSecondaryActions() {
    const mainActions = document.getElementById('main-actions');
    const secondaryActions = document.getElementById('secondary-actions');
    secondaryActions.style.display = secondaryActions.style.display === 'none' ? 'block' : 'none';
    mainActions.style.display = 'none'; // Esconde a seção de ações principais
}

// Ajustes para os botões de ações
document.querySelector('button[onclick="toggleDisplay(\'main-actions\')"]').onclick = toggleMainActions;
document.querySelector('button[onclick="toggleDisplay(\'secondary-actions\')"]').onclick = toggleSecondaryActions;

function rate(category, rating) {
    alert(`Você avaliou a ${category} com ${rating} estrelas!`);
}
