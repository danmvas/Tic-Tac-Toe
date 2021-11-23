// função de clique na tela
// a cada clique, faz, nessa ordem:
// atualiza o put da matriz do jogador
// faz o valor associado ao jogador aparecer na caixinha
// tornar caixinha indisponivel
// chama a função de conferir vencedor { se tiver vencedor, anunciar, senão, paciencia }
// bot joga
// faz o valor associado ao bot aparecer na caixinha
// tornar caixinha indisponivel
// chama a função d conferir vencedor de novo

async function gaming(i, j, player, box) {

    await tictactoeService.playerPlays(i,j, player)
    box.textContent = player
    // tornar caixinha indispoivel
    await winner()
    await tictactoeService.botPlays()
    box.textContent = bot
    // tornar caixinha indispoivel
    await winner()

}