//----------------------------------------------

// tabela a ser inserida e editada

//----------------------------------------------
const tableBody = document.getElementById('tableBody');

function tableFill(){
    allUsers = userService.listAll();
    let userInfo = '';
    allUsers.map(user => {
        newId = user.id
        userInfo += `
        <tr>
            <td class="col">${allUsers.indexOf(user)+1}</td>
            <td class="col">
                <div class="img-left"><img class="statusIcon" src="../imagens/user.png"></div>
                <div class="nome">${user.name}</div>
            </td>
            <td class="col">${user.birthday}</td>
            <td class="col">User</td>
            <td class="col"><i class="bi bi-record-fill active-user"></i> Active</td>
            <td class="col">
                <button class="action"><i class="bi bi-gear-fill cog" onclick = "userService.update(allUsers, ${allUsers.indexOf(user)})"></i></button>
                <button class="action"><i class="bi bi-x-circle-fill redX" onclick = "userService.delete(allUsers, ${allUsers.indexOf(user)})"></i></button>
            </td>
        </tr>
        `;
    });
    
    tableBody.innerHTML = userInfo;
}