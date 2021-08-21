class Usuario {
  constructor(idUser, name, lastName, email, passport, phone, day, month, year,) {
    this.idUser = idUser;
    this.name = name;
    this.lastName = lastName;
    this.passport = passport;
    this.email = email;
    this.phone = phone;
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

function saveChanges() {

  //função que gera um identificador GUID
  var idUser = generateGUID();

  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var passport = document.getElementById("passport").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;

  tempUser = new User(idUser, name, lastName, passport, email, phone, day, month, year);
  
  localStorage.setItem('namePerson', name);
  localStorage.setItem('lastNamePerson', lastName);
  localStorage.setItem('day', day);
  localStorage.setItem('month', month);
  localStorage.setItem('year', year);
  localStorage.setItem('passport', passport);

  if (localStorage.getItem("updateUser")) {
    window.location.href = "../html/userManagement.html";
  }

  if (name && role && password && status != 0 && day != 0 && month != 0 && year != 0 && localStorage.getItem('imageUrl')) {
    window.location.href = "../html/userManagement.html";
  }
  else {
    alert("Please fill all the ");
  }

  for (var i = 0; i < inputs.length; i++) {
    checkInputs(inputs[i]);
  }
  for (var i = 0; i < selects.length; i++) {
    checkSelects(selects[i]);
  }
}


const tBody = document.getElementById('corpoTabela');

function salvarConteudoStorage() {
  let arraycadastro = [];

  if (localStorage.getItem('dados') != null) {
    arraycadastro = JSON.parse(localStorage.getItem('dados'));
  } else {
    arraycadastro;
  }

  var nome = document.getElementById("fnome").value;
  var email = document.getElementById("femail").value;
  var imagem = document.getElementById("imagem").value;
  var repositorio = document.getElementById("repositorio").value;


  var info = {
    nome,
    email,
    imagem,
    repositorio
  };

  arraycadastro.push(info);
  var infoJson = JSON.stringify(arraycadastro);
  localStorage.setItem("dados", infoJson);

  buscarConteudo();
}
