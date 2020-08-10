/*Passos a serem feitos*/
//1: Procurar o botão de Adicionar Novo Horário
document.querySelector("#add-time")
.addEventListener('click', clonefield)
//2: Quando clicar no botão, deve executar uma ação
function clonefield(){
    //que campo devo duplicar?
    const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true) 
    
    //limpar os campos. Quais campos?
    const fields = newfieldContainer.querySelectorAll('input')
    //para cada campo limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    
    //    2.2: Colocar na página, onde?
    document.querySelector('#schedule-items').appendChild(newfieldContainer)

}





