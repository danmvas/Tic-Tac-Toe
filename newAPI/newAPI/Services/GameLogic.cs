using newAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace newAPI.Services
{
    public class GameLogic
    {
        public string s = null;

        public Game actualGame = new();

        public static bool Equals3(string a, string b, string c)
        {
            if (a == b && b == c && a != "")
            {
                return true;
            }

            else return false;
        }

        static double Minimax(string[,] board, int depth, bool isMaximizingPlayer)
        {

            if (isMaximizingPlayer)
            {
                double bestScore = Double.NegativeInfinity;
                for (int i = 0; i < 3; i++)
                {
                    for (int j = 0; j < 3; j++)
                    {
                        if (string.IsNullOrEmpty(board[i, j]))
                        {
                            var score = Minimax(board, depth + 1, false);
                            bestScore = Math.Max(score, bestScore);
                        }
                    }
                }
                return bestScore;
            }

            else
            {
                double bestScore = Double.PositiveInfinity;
                for (int i = 0; i < 3; i++)
                {
                    for (int j = 0; j < 3; j++)
                    {
                        if (string.IsNullOrEmpty(board[i, j]))
                        {
                            var score = Minimax(board, depth + 1, true);
                            bestScore = Math.Min(score, bestScore);
                        }
                    }
                }
                return bestScore;
            }
        }

        public string BestMove()
        {

            // começa na jogada do bot e termina trocando pro jogador
            double bestScore = double.NegativeInfinity;

            int[] move = new int[2];

            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    // checa se o lugar tá disponível
                    if (string.IsNullOrEmpty(actualGame.board[i, j]))
                    {
                        var score = Minimax(actualGame.board, 0, false);
                        if (score > bestScore)
                        {
                            bestScore = score;
                            move[0] = i;
                            move[1] = j;
                        }
                    }
                }
            }

            string v = actualGame.board[move[0], move[1]];
            return v;
        }

        public string ChecksWinner(string[,] board)
        {
            string winner = null;

            // horizontal
            for (int i = 0; i < 3; i++)
            {
                if (Equals3(board[i, 0], board[i, 1], board[i, 2]))
                {
                    winner = board[i, 0];
                }
            }

            // vertical
            for (int i = 0; i < 3; i++)
            {
                if (Equals3(board[0, i], board[1, i], board[2, i]))
                {
                    winner = board[0, i];
                }
            }

            // diagonal
            if (Equals3(board[0, 0], board[1, 1], board[2, 2]))
            {
                winner = board[0, 0];
            }
            if (Equals3(board[2, 0], board[1, 1], board[0, 2]))
            {
                winner = board[2, 0];
            }

            int openSpots = 0;
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    if (string.IsNullOrEmpty(board[i, j]))
                    {
                        openSpots++;
                    }
                }
            }

            if (winner == null && openSpots == 0)
            {
                return "tie";
            }
            else
            {
                return winner;
            }
        }
    }
}
