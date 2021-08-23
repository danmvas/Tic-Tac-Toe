// class Usuario {
//   constructor(idUser, name, lastName, email, passport, phone, day, month, year,) {
//     this.idUser = idUser
//     this.name = name
//     this.lastName = lastName
//     this.passport = passport
//     this.email = email
//     this.phone = phone
//     this.day = day
//     this.month = month
//     this.year = year
//   }
// }

// function saveChanges() {

//   //função que gera um identificador GUID
//   var idUser = generateGUID()

//   var name = document.getElementById("name").value
//   var lastName = document.getElementById("lastName").value
//   var passport = document.getElementById("passport").value
//   var email = document.getElementById("email").value
//   var phone = document.getElementById("phone").value
//   var day = document.getElementById("day").value
//   var month = document.getElementById("month").value
//   var year = document.getElementById("year").value

//   tempUser = new User(idUser, name, lastName, passport, email, phone, day, month, year)
  
//   localStorage.setItem('namePerson', name)
//   localStorage.setItem('lastNamePerson', lastName)
//   localStorage.setItem('day', day)
//   localStorage.setItem('month', month)
//   localStorage.setItem('year', year)
//   localStorage.setItem('passport', passport)

//   if (localStorage.getItem("updateUser")) {
//     window.location.href = "../html/userManagement.html"
//   }

//   if (name && role && password && status != 0 && day != 0 && month != 0 && year != 0 && localStorage.getItem('imageUrl')) {
//     window.location.href = "../html/userManagement.html"
//   }
//   else {
//     alert("Please fill all the ")
//   }

//   for (var i = 0 i < inputs.length i++) {
//     checkInputs(inputs[i])
//   }
//   for (var i = 0 i < selects.length i++) {
//     checkSelects(selects[i])
//   }
// }


// const tBody = document.getElementById('corpoTabela')

// function salvarConteudoStorage() {
//   let arraycadastro = []

//   if (localStorage.getItem('dados') != null) {
//     arraycadastro = JSON.parse(localStorage.getItem('dados'))
//   } else {
//     arraycadastro
//   }

//   var nome = document.getElementById("fnome").value
//   var email = document.getElementById("femail").value
//   var imagem = document.getElementById("imagem").value
//   var repositorio = document.getElementById("repositorio").value


//   var info = {
//     nome,
//     email,
//     imagem,
//     repositorio
//   }

//   arraycadastro.push(info)
//   var infoJson = JSON.stringify(arraycadastro)
//   localStorage.setItem("dados", infoJson)

//   buscarConteudo()
// }

//----------------------------------------------

// tabela a ser inserida e editada



//----------------------------------------------

//Funções que o usuário dá trigger quando clicar em algum botão

//----------------------------------------------

//função que verifica se o formulário está preenchido corretamente
var button = document.getElementById("savechang")
function onSaveChangesClick() {
     if (inputVerify()) {
          userService.add()
          window.location = "../html/userManagement.html"
     } else {
          alert("Please verify your inputs!")
     }
} button.addEventListener("click", onSaveChangesClick)


function inputVerify() {

     var firstName = document.getElementById("firstName").value
     var lastName = document.getElementById("lastName").value
     var email = document.getElementById("email").value
     var phone = document.getElementById("phone").value
     var day = document.getElementById("day").value
     var month = document.getElementById("month").value

     var mailRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+(?:.[a-zA-Z]+)$/
     // var phoneRegex = /[(]^[0-9][)]+@[0-9][-]^[0-9])$/

     if (firstName.length === 0) {
          return false
     } else if (lastName.length === 0) {
          return false
     } else if (!mailRegex.test(email)) {
          return false
          // }else if (!phoneRegex.test(phone)) {
          //       return false
     } else if (month === 'February') {
          if (day === 30 || day === 31) {
               return false
          }
     } else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
          if (day === 31) {
               return false
          }
     } else {
          return true
     }
}

//----------------------------------------------

// mascara do telefone pra deixar belissimo
const masks = {
     phone(value) {
          return value
               .replace(/\D/g, '')
               .replace(/(\d{2})(\d)/, '($1) $2')
               .replace(/(\d{4})(\d)/, '$1-$2')
               .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
               .replace(/(-\d{4})\d+?$/, '$1')
     }
}

document.querySelectorAll('input').forEach(($input) => {
     const field = $input.dataset.js

     $input.addEventListener('input', (e) => {
          e.target.value = masks[field](e.target.value)
     }, false)
})

//----------------------------------------------

//função que preenche os campos do formulário com as informações
//já existentes
function onClickUpdate(idUser) {
     var tempUser = userService.searchById(idUser)
     
     tempUser.name = document.getElementById("firstName").value
     tempUser.lastName = document.getElementById("lastName").value
     tempUser.passport = document.getElementById("passport").value
     tempUser.email = document.getElementById("email").value
     tempUser.phone = document.getElementById("phone").value
     tempUser.day = document.getElementById("day").value
     tempUser.month = document.getElementById("month").value
     tempUser.year = document.getElementById("year").value
     
}
     // users.splice(tempUserList.findIndex(user => user.idUser === tempUser.idUser), 1, {
     //      id: idUser,
     //      name: firstName.value + " " + lastName.value,
     //      passport: passport.value,
     //      email: email.value,
     //      phone: phone.value,
     //      birthday: day.value + "/" + month.value + "/" + year.value
     //    }) localStorage.setItem('listUser', JSON.stringify(users))


     //    tempUserList = JSON.parse(localStorage.getItem("users"))

     //    updateIndex = tempUserList.findIndex(user => user.idUser === tempUser.idUser)
     //    tempUserList[updateIndex] = tempUser

     // updateIndex = 
     // tempUserList[updateIndex] = tempUser
