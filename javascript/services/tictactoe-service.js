myurl = 'https://localhost:5001/api/Crud/'

const tictactoeService =
{

    //GET BY ID
    searchById(userInfo) {

        const tempUserList = (res, rej) => {
            fetch(myurl+`${userInfo}`, {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
        })
            .then(res)
            .catch(rej)
        }

        return new Promise(tempUserList)
    },

    // GET ALL
    listAll() {
        const tempUserList = (res, rej) => {
            fetch(myurl, {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
        })
            .then(res)
            .catch(rej)
        }

        return new Promise(tempUserList)

    },

    // POST
    add() {
        var users = {
            id: this.generateGUID(),
            nameUser: firstName.value,
            surname: lastName.value,
            passport: passport.value,
            email: email.value,
            phone: phone.value,
            birthday: day.value + "/" + month.value + "/" + year.value
        }

        const tempUserList = (res, rej) => {
            fetch(myurl, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res)
            .catch(rej)
        }
        
        return new Promise(tempUserList)
    },

}