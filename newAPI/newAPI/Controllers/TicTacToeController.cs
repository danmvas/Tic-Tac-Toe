using Microsoft.AspNetCore.Mvc;
using System;
using newAPI.Model;
using newAPI.Services;

namespace newAPI.Controllers
{

    [Route("api/gameController")]
    [ApiController]
    public class TicTacToeController : ControllerBase
    {
        public Game actualGame = new();

        // get pra pegar a representação da matriz
        [HttpGet()]
        public string[,] ActualBoard()
        {
            // o index no array de jogos é pra ser aumentado toda vez!
            return actualGame.board;
        }

        [HttpGet("{Winner}")]
        public string Winner()
        {
            var winner = new GameLogic();
            return winner.ChecksWinner(actualGame.board);
        }

        [HttpPut]
        public ActionResult BotMove()
        {
            GameLogic bestMove = new GameLogic();
            bestMove.BestMove();
            return Ok();
        }

        [HttpPut("{Player}")]
        public ActionResult UserMove(Player player)
        {
            actualGame.board[player.line, player.column] = player.content;
            return Ok();
        }

        [HttpDelete]
        public ActionResult DeleteBoard()
        {
            Array.Clear(actualGame.board, 0, actualGame.board.Length);
            return Ok();
        }

    }

}