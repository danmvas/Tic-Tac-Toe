//----------------------------------------------

//Funções que o usuário dá trigger quando clicar em algum botão

//----------------------------------------------

if (location.search != ''){
     onClickUpdate()
}

//----------------------------------------------

//função que verifica se o formulário está preenchido corretamente
var button = document.getElementById("savechang")
function onSaveChangesClick() {
     if (inputVerify()) {
          if (location.search === ''){
               userService.add();
               window.location = "../html/userManagement.html";
          } else{
               var url = new URLSearchParams(location.search)
               var urlGuid = url.get("id")
               saveUpdate(urlGuid)
               window.location = "../html/userManagement.html";
          }
     } else {
          alert("Please verify your inputs!")
     }
} button.addEventListener("click", onSaveChangesClick)


function inputVerify() {

     var firstName = document.getElementById("firstName").value;
     var lastName = document.getElementById("lastName").value;
     var email = document.getElementById("email").value;
     var phone = document.getElementById("phone").value;
     var day = document.getElementById("day").value;
     var month = document.getElementById("month").value;

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

function onClickUpdate() {
     var url = new URLSearchParams(location.search)
     var urlGuid = url.get("id")

     tempUserList = JSON.parse(localStorage.getItem("users"))
     var updateIndex = tempUserList.findIndex(users => users.id == urlGuid)

     var tempUser = tempUserList[updateIndex]

     var fullName = tempUser.name.split(" ", 2)
     var birthday = tempUser.birthday.split("/", 3)

     document.getElementById("firstName").value = fullName[0];
     document.getElementById("lastName").value = fullName[1];
     document.getElementById("passport").value = tempUser.passport;
     document.getElementById("email").value = tempUser.email;
     document.getElementById("phone").value = tempUser.phone;
     document.getElementById("day").value = birthday[0];
     document.getElementById("month").value = birthday[1];
     document.getElementById("year").value = birthday[2];
     
}

function saveUpdate(urlGuid){
     var url = new URLSearchParams(location.search)
     var urlGuid = url.get("id")

     var updateIndex = tempUserList.findIndex(users => users.id == urlGuid)
     var editedUser = tempUserList[updateIndex]
     console.log(editedUser)
     
     editedUser.name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value
     editedUser.passport = document.getElementById("passport").value
     editedUser.email = document.getElementById("email").value
     editedUser.phone = document.getElementById("phone").value
     editedUser.birthday = document.getElementById("day").value + "/" + document.getElementById("month").value + "/" + document.getElementById("year").value

     tempUserList[updateIndex] = editedUser

     localStorage.setItem("users", JSON.stringify(tempUserList))

}

//----------------------------------------------

function getGUID(userObject, tableIndex){
     return getId = userObject[tableIndex].id
}