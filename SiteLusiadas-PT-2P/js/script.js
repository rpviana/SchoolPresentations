function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    hideInitialScreen(); // Adicionada para esconder a tela inicial
}

function toggleDisplay(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none' || !element.style.display) {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function showIntro(topic) {
    const introContent = document.getElementById(`intro${capitalizeFirstLetter(topic)}`);
    if (introContent.style.display === 'none' || !introContent.style.display) {
        introContent.style.display = 'block';
    } else {
        introContent.style.display = 'none';
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function hideInitialScreen() {
    const initialScreen = document.getElementById('initialScreen');
    initialScreen.style.display = 'none';
}

function showConclusion() {
    showSection('conclusion');
}
