import { useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
export const socket = io("http://localhost:8080");

const useTicTacToe = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [room, setRoom] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    if (!userId) {
      const newUserId = Date.now().toString();
      localStorage.setItem("userId", newUserId);
      setUserId(newUserId);
    }
  }, [userId]);

  useEffect(() => {
    // Listen for game state updates
    socket.on("gameState", (game) => {
      setBoard(game.board);
      setCurrentPlayer(game.currentPlayer);
      setWinner(game.winner);
    });

    // Listen for game start event
    socket.on("gameStart", (game) => {
      setIsGameStarted(true);
      setBoard(game.board);
      setCurrentPlayer(game.currentPlayer);
    });

    // Listen for game over event
    socket.on("gameOver", (result) => {
      setWinner(result.winner);
      setIsGameStarted(false);
    });

    // Clean up event listeners
    return () => {
      socket.off("gameState");
      socket.off("gameStart");
      socket.off("gameOver");
    };
  }, [socket]);

  const createRoom = () => {
    socket.emit("createRoom");
    socket.on("roomCreated", ({ roomId }) => {
      setRoom(roomId);
      // localStorage.setItem("roomId", roomId);
      navigate({
        to: `/multiplayer/${roomId}`
      });
    });
  };

  const joinRoom = (roomId: string) => {
    socket.emit("joinRoom", { userId, roomId });
  };

  const makeMove = (index: number) => {
    if (!room || board[index] || winner) return;
    socket.emit("makeMove", { roomId: room, index });
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setIsGameStarted(false);
  };

  return {
    userId,
    room,
    board,
    currentPlayer,
    winner,
    isGameStarted,
    createRoom,
    joinRoom,
    makeMove,
    resetGame
  };
};

// Helper function to calculate the winner
const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6] // Diagonals
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default useTicTacToe;
