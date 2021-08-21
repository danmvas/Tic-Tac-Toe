const userService =
{
    searchById(idUser) {
        var tempUserList;

        tempUserList = JSON.parse(localStorage.getItem("users"));

        if (tempUserList.length == 0) {
            alert("There is no user with this ID");
        } else {
            return tempUserList.filter(user => user.idUser === idUser);
        }
    },

    listAll() {
        var tempUserList;

        // if (localStorage.getItem("userList") == null) {
        //     tempUserList = [];
        // }
        // else {
            tempUserList = JSON.parse(localStorage.getItem("users"));
        //}

        return tempUserList;
    },

    add(){
        console.log("aeeeeeee")
        var users = JSON.parse(localStorage.getItem('users') || '[]');
        console.log("vai pro  push")
        users.push({
            id: this.generateGUID(),
            name: firstName.value + " " + lastName.value,
            passport: passport.value,
            email: email.value,
            phone: phone.value,
            birthday: day.value + "/" + month.value + "/" + year.value
          }
        );console.log("passou do push")
        localStorage.setItem('users', JSON.stringify(users));
        console.log("finalzito")
      },

    update() {
        tempUser = this.searchById(idUser);

        tempUser.name = document.getElementById("firstName").value;
        tempUser.lastName = document.getElementById("lastName").value;
        tempUser.passport = document.getElementById("passport").value;
        tempUser.email = document.getElementById("email").value;
        tempUser.phone = document.getElementById("phone").value;
        tempUser.day = document.getElementById("day").value;
        tempUser.month = document.getElementById("month").value;
        tempUser.year = document.getElementById("year").value;

        tempUserList = JSON.parse(localStorage.getItem("users"));

        updateIndex = tempUserList.findIndex(user => user.idUser === tempUser.idUser)
        tempUserList[updateIndex] = tempUser;

        localStorage.setItem("users", JSON.stringify(tempUserList));
    },

    delete(idUser) {
        tempUser = this.searchById(idUser);

        tempUserList = JSON.parse(localStorage.getItem("users"));
        deleteIndex = tempUserList.findIndex(user => user.idUser === tempUser.idUser)

        tempUserList.splice(deleteIndex,1);

        localStorage.setItem("users", JSON.stringify(tempUserList));
        tableFill()
    },

    generateGUID(){

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
    }

}