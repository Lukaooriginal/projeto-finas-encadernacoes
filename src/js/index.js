/*
O que precisamos fazer? - quando clicar no botão do livro na lista, temos que marcar o botão como selecionado e mostrar o personagem

     OBJETIVO 1 - quando cliccar no botão do livro na lista, marcar o botao como selecionado
            passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um dele
            passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
            passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
            
     OBJETIVO 2 - quando clicar no botão do livro mostrar as informações do livro
            passo 1 - pegar os livros no JS pra poder mostrar ou esconder ele
            passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
            passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
*/


const botoes = document.querySelectorAll('.botao')


const livros = document.querySelectorAll(".livro");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselcionarBotao();
        desselecionarLivro();

        botao.classList.add("selecionado");
        livros[indice].classList.add("selecionado");
    });
});

function desselecionarLivro() {
    const livroSelecionado = document.querySelector(".livro.selecionado");
    livroSelecionado.classList.remove("selecionado");
}

function desselcionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
