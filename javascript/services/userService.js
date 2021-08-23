const userService =
{
    searchById(idUser) {
        var tempUserList;

        tempUserList = JSON.parse(localStorage.getItem("users"));

        if (tempUserList.length == 0) {
            alert("There is no user with this ID");
        } else {
            return tempUserList.find(user => user.idUser === idUser);
        }
    },

    listAll() {
        var tempUserList;

        tempUserList = JSON.parse(localStorage.getItem("users"));

        return tempUserList;
    },

    add() {
        var users = JSON.parse(localStorage.getItem('users') || '[]');

        users.push({
            id: this.generateGUID(),
            name: firstName.value + " " + lastName.value,
            passport: passport.value,
            email: email.value,
            phone: phone.value,
            birthday: day.value + "/" + month.value + "/" + year.value
        }); localStorage.setItem('users', JSON.stringify(users));
    },

    update(userObject, tableIndex) {
        
        if (window.confirm("Do you really want to edit this user?")) {  
            var tempUser = getGUID(userObject, tableIndex)
            window.location.href = '../html/form.html?id=' + tempUser
        }
        
    },

    delete(userObject, tableIndex) {
        if (window.confirm("Do you really want to delete this user?")) {
            var tempUser = getGUID(userObject, tableIndex)
            console.log(tempUser)
            
            tempUserList = JSON.parse(localStorage.getItem("users"));
            deleteIndex = tempUserList.findIndex(users => users.id == tempUser)

            tempUserList.splice(deleteIndex, 1);

            localStorage.setItem("users", JSON.stringify(tempUserList))
            tableFill()
        }
    },

    generateGUID() {

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

}