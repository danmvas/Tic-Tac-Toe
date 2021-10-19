myurl = 'https://localhost:5001/api/Crud/'

const userService =
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

    // PUT
    update(userInfo) {
            
            var users = {
                nameUser: firstName.value,
                surname: lastName.value,
                passport: passport.value,
                email: email.value,
                phone: phone.value,
                birthday: day.value + "/" + month.value + "/" + year.value
            }
    
            fetch(myurl+`${userInfo}`, {
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(users)
            })
                .then(res => res)
                .catch(error => console.log(error))

            return new Promise(tempUserList)
    },

    // DELETE
    delete(userInfo) {
        
        if (window.confirm("Do you really want to delete this user?")) {
            const tempUserList = (res, rej) => {
                fetch(myurl+`${userInfo}`, {
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                },
            })
                .then(res)
                .catch(rej)
            }
    
            return new Promise(tempUserList)
        }
    },

    generateGUID() {

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

}