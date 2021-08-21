const tableBody = document.getElementById('tableBody');

function tableFill(){
    allUsers = userService.listAll();
    console.log(allUsers)
    let userInfo = '';
    allUsers.map(user => {
        userInfo += `
        <tr>
            <td class="col">${allUsers.indexOf(user)}</td>
            <td class="col">
                <div class="img-left"><img class="statusIcon" src="../imagens/user.png"></div>
                <div class="nome">${user.name}</div>
            </td>
            <td class="col">${user.birthday}</td>
            <td class="col">User</td>
            <td class="col"><i class="bi bi-record-fill active-user"></i> Active</td>
            <td class="col">
                <button class="action"><i class="bi bi-gear-fill cog" onclick = "userService.update(${user.idUser})"></i></button>
                <button class="action"><i class="bi bi-x-circle-fill redX" onclick = "userService.delete(${user.idUser})"></i></button>
            </td>
        </tr>
        `;
    });
    console.log("entrooooo")
    tableBody.innerHTML = userInfo;
    console.log(userInfo)
}