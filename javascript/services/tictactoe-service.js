myurl = 'https://localhost:5001/api/gameController/'

const tictactoeService =
{
    // GET
    getBoard() {

        const tempGame = (res, rej) => {
            fetch(myurl, {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
        })
            .then(res)
            .catch(rej)
        }

        return new Promise(tempGame)
    },

    // GET
    getWinner() {
        const tempGame = (res, rej) => {
            fetch(myurl+`${winner}`, {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
        })
            .then(res)
            .catch(rej)
        }

        return new Promise(tempGame)
    },

    // PUT
    botPlays () {
        const tempGame = (res, rej) => {
            fetch(myurl, {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then(res)
            .catch(rej)}
        return new Promise(tempGame)
    },

    // PUT
    playerPlays (i, j, userInfo) {
            
        var plays = {
            line:i,
            column: j,
            content: userInfo
        }

        const tempGame = (res, rej) => {
            fetch(myurl+`${userInfo}`, {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(plays)
        })
            .then(res)
            .catch(rej)
        }
        return new Promise(tempGame)
    },

    // DELETE
    newGame() {
        
        if (window.confirm("Do you really want to start a new game?")) {
            const tempGame = (res, rej) => {
                fetch(myurl, {
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                },
            })
                .then(res)
                .catch(rej)
            }
    
            return new Promise(tempGame)
        }
    }

}