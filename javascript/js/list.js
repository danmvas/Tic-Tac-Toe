//----------------------------------------------

// tabela a ser inserida e editada

//----------------------------------------------

const tableBody = document.getElementById('tableBody');

async function deleteUser(idUser){
    await userService.delete(idUser)
        .then(res => res)
        .catch(rej => rej)
    tableFill()
}

async function updateUser(idUser) {
    if (window.confirm("Do you really want to edit this user?")) {
        window.location.href = `form.html?guid=${idUser}`
    }
}

async function tableFill(){
    allUsers = await userService.listAll() // await = força a função async a esperar dar o return na promise
        .then(res => res.json())
        .catch(rej => console.log(rej));
    console.log(allUsers);
    let userInfo = '';
    allUsers.map(user => {
        newId = user.id
        userInfo += `
        <tr>
            <td class="col">${allUsers.indexOf(user)+1}</td>
            <td class="col">
                <div class="img-left"><img class="statusIcon" src="imagens/user.png"></div>
                <div class="nome">${user.nameUser} ${user.surname}</div>
            </td>
            <td class="col">${user.birthday}</td>
            <td class="col">User</td>
            <td class="col"><i class="bi bi-record-fill active-user"></i> Active</td>
            <td class="col">
                <button class="action"><i class="bi bi-gear-fill cog" onclick = "updateUser('${user.id}')"></i></button>
                <button class="action"><i class="bi bi-x-circle-fill redX" onclick = "deleteUser('${user.id}')"></i></button>
            </td>
        </tr>
        `;
    });
    
    tableBody.innerHTML = userInfo;
}