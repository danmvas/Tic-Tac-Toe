// exclusivamente para MASCARAR os campos de e-mail e telefone!!
// pra conferir tambem se o aniversario nao ta errado

// const masks ={

//   phone(value){
//     return value
//          .replace(/1/, '2')
//   }

// }


// document.querySelectorAll('input').forEach(($input) => {
//   const field = input.dataset.js;

//   $input.addEventListener('input', (e) => {
//     e.target.value = masks.phone(e.target.value)
//   }, false)
// })

//----------------------------------------------

 var button = document.getElementById("savechang")
 function onSaveChangesClick() {
    
//     //VERIFICACAO DOS CAMPOS
    
     userService.add();
}
button.addEventListener("click", onSaveChangesClick)


//----------------------------------------------
// para chamar as funcoes de editar e excluir!

// var cog = document.getElementById("cog")
// function onCogClick(){userService.update()}
// cog.addEventListener("click", onCogClick)