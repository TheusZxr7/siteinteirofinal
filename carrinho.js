let total = 0;

function adicionarAoCarrinho() {
    const filmeSelect = document.getElementById('filme');
    const filmeOption = filmeSelect.options[filmeSelect.selectedIndex];
    const tempoSelect = document.getElementById('tempo');
    const qualidadeSelect = document.getElementById('qualidade');

    const filmeNome = filmeOption.text;
    const preco = parseFloat(filmeOption.getAttribute('data-preco'));
    const imgSrc = filmeOption.getAttribute('data-img');
    const tempo = tempoSelect.value;
    const qualidade = qualidadeSelect.value;

    if (!tempo || !qualidade) {
        alert("Por favor, selecione o tempo de aluguel e a qualidade.");
        return;
    }

    total += preco;
    document.getElementById('total').textContent = `Total Final: R$ ${total.toFixed(2)}`;

    const li = document.createElement('li');
    li.innerHTML = `
        <img src="${imgSrc}" alt="${filmeNome}" style="width: 100px; height: auto;">
        <p>${filmeNome}</p>
        <label>Qualidade: 
            <select onchange="atualizarItem(this)">
                <option value="720p" ${qualidade === '720p' ? 'selected' : ''}>720p</option>
                <option value="1080p" ${qualidade === '1080p' ? 'selected' : ''}>1080p</option>
                <option value="4K" ${qualidade === '4K' ? 'selected' : ''}>4K</option>
            </select>
        </label>
        <label>Tempo: 
            <select onchange="atualizarItem(this)">
                <option value="1" ${tempo === '1' ? 'selected' : ''}>1 Dia</option>
                <option value="7" ${tempo === '7' ? 'selected' : ''}>7 Dias</option>
                <option value="30" ${tempo === '30' ? 'selected' : ''}>30 Dias</option>
            </select>
        </label>
        <button onclick="removerItem(this, ${preco})">Remover</button>
    `;
    document.getElementById('itensCarrinho').appendChild(li);
}

function atualizarItem(select) {
    alert("Item atualizado no carrinho!");
}

function removerItem(button, preco) {
    total -= preco;
    document.getElementById('total').textContent = `Total Final: R$ ${total.toFixed(2)}`;
    button.parentElement.remove();
}