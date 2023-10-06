var botoes = document.querySelectorAll('.botao')

const personagens = document.querySelectorAll(".personagem")


botoes.forEach((botao, indice) =>{
    botao.addEventListener('click', ()=>{
        unselect_button()
        unselect_character()

        botao.classList.add("selecionado")
        personagens[indice].classList.add("selecionado")
    })
})

function unselect_character() {
    const characterSelected = document.querySelector(".personagem.selecionado")
    characterSelected.classList.remove("selecionado")
}

function unselect_button() {
    const btnSelected = document.querySelector(".botao.selecionado")
    btnSelected.classList.remove("selecionado")
}

