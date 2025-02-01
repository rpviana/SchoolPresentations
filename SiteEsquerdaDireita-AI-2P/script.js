function showDetails(side) {
    const detailsPage = document.getElementById("details-page");
    const detailsTitle = document.getElementById("details-title");
  
    detailsPage.style.display = "block";
  
    if (side === "left") {
      detailsTitle.textContent = "A Esquerda";
    } else if (side === "right") {
      detailsTitle.textContent = "A Direita";
    }
  }
  
  function hideDetails() {
    document.getElementById("details-page").style.display = "none";
    document.getElementById("info-content").innerHTML = "";
  }
  

    function showInfo(topic) {
      const infoContent = document.getElementById("info-content");
      let content = '';
  
      if (topic === 'history') {
        content = `
            <p><strong>História e Origens:</strong></p>
            <p><strong>Na Esquerda:</strong> A Esquerda surgiu durante a Revolução Francesa, defendendo a igualdade e a luta contra privilégios de classe.</p>
            <p><strong>Na Direita:</strong> A Direita desenvolveu-se como uma resposta à busca por ordem e tradição, influenciada por pensadores como Edmund Burke, que defendia a preservação das instituições sociais existentes.</p>
        `;
    } else if (topic === 'characteristics') {
        content = `
            <p><strong>Principais Características:</strong></p>
            <p><strong>Na Esquerda:</strong> A Esquerda prioriza a busca pela igualdade econômica e social, promove a justiça distributiva e inclusão.</p>
            <p><strong>Na Direita:</strong> A Direita valoriza a liberdade individual, a responsabilidade pessoal e a meritocracia, defendendo a importância de preservar tradições e instituições para manter a ordem social.</p>
        `;
    } else if (topic === 'state-role') {
        content = `
            <p><strong>Visões sobre o Papel do Estado:</strong></p>
            <p><strong>Na Esquerda:</strong> A Esquerda defende um papel ativo do Estado na garantia do bem-estar social, com intervenções em saúde e educação.</p>
            <p><strong>Na Direita:</strong> A Direita favorece um Estado mais limitado, enfatizando a importância da economia privada e da responsabilidade individual na busca pelo progresso.</p>
        `;
    } else if (topic === 'economic-policies') {
        content = `
            <p><strong>Políticas Econômicas:</strong></p>
            <p><strong>Na Esquerda:</strong> As políticas da Esquerda frequentemente incluem a redistribuição de riqueza por meio de impostos progressivos e aumento do salário mínimo.</p>
            <p><strong>Na Direita:</strong> A Direita defende políticas de livre mercado e promove privatizações e incentivos ao empreendedorismo como meios para impulsionar o crescimento econômico.</p>
        `;
    } else if (topic === 'social-rights') {
        content = `
            <p><strong>Perspectiva sobre Direitos Sociais e Civis:</strong></p>
            <p><strong>Na Esquerda:</strong> A Esquerda é conhecida por sua defesa dos direitos das minorias e igualdade de gênero, além da promoção dos direitos LGBTQ+.</p>
            <p><strong>Na Direita:</strong> A Direita valoriza a liberdade de expressão e os valores tradicionais, frequentemente enfatizando a importância da família e a do patriotismo.</p>
        `;
    } else if (topic === 'environmental-views') {
        content = `
            <p><strong>Posição em Relação ao Meio Ambiente:</strong></p>
            <p><strong>Na Esquerda:</strong> A Esquerda tende a apoiar políticas ambientais rigorosas, buscando a sustentabilidade e a transição para energias renováveis.</p>
            <p><strong>Na Direita:</strong> A Direita pode ser mais cautelosa em relação à regulamentação ambiental, priorizando a economia e incentivando iniciativas privadas para a sustentabilidade.</p>
        `;
    }
  
    infoContent.innerHTML = content;
  }
  

  