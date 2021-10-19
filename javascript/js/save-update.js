//----------------------------------------------

//Funções que o usuário dá trigger quando clicar em algum botão

//----------------------------------------------

const url = new URLSearchParams(location.search)
const urlGuid = url.get("guid")

//----------------------------------------------

//função que verifica se o formulário está preenchido corretamente
var button = document.getElementById("savechang")
async function save() {
     if (inputVerify()) {
          if (location.search === ''){
               await userService.add()
               .then(res => res)
                    .catch(rej => console.log(rej));
               window.location = "list.html";
          } else{
               saveUpdate(urlGuid)
               window.location = "list.html";
          }
     } else {
          alert("Please verify your inputs!")
     }
} button.addEventListener("click", save)


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

async function getExistentInfo() {
     var userToBeUpdated = await userService.searchById(urlGuid)
     .then(res => res.json())
     .catch(rej => console.log(rej))

     console.log(userToBeUpdated)
     
     var birthday = userToBeUpdated.birthday.split("/", 3)
     
     document.getElementById("firstName").value = userToBeUpdated.nameUser;
     document.getElementById("lastName").value = userToBeUpdated.surname;
     document.getElementById("passport").value = userToBeUpdated.passport;
     document.getElementById("email").value = userToBeUpdated.email;
     document.getElementById("phone").value = userToBeUpdated.phone;
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

//----------------------------------------------

if (location.search != ''){
     getExistentInfo()
}