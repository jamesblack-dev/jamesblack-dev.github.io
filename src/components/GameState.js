import GameBoard from "./GameBoard";
import GameHeader from "./GameHeader";
import ScoreBoard from "./ScoreBoard";
import LoadNames from "./LoadNames";
import { useState } from "react";

export default function GameState() {
    const getNewGameState = () => Array(3).fill(null).map(() => Array(3).fill(undefined));
    const [currentPiece, setCurrentPiece] = useState("X");
    const [gameState, setGameState] = useState(getNewGameState());
    const [gameInProgress, setGameInProgress] = useState(true);
    const [scoreBoard, setScoreBoard] = useState(null);
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [endGameMessage, setEndGameMessage] = useState("");

    function updateGameState(selectedRow, selectedColumn) {
        // -1 to normalise for arrays
        let update = [...gameState];
        update[selectedRow - 1][selectedColumn - 1] = currentPiece;
        setGameState(update);

        if (hasWon(selectedRow, selectedColumn)) {
            setGameInProgress(false);

            var newScore = { ...scoreBoard };
            newScore[currentPiece].score = newScore[currentPiece].score + 1;
            setScoreBoard(newScore);
            setEndGameMessage("The winner is: " + scoreBoard[currentPiece].playerName);
            return;
        }

        if (isDraw()) {
            setGameInProgress(false);
            setEndGameMessage("No winner this time. Try again.");
            return;
        }

        let newPiece = currentPiece === "X" ? "O" : "X";
        setCurrentPiece(newPiece);
    }

    function canPlay(row, column) {
        let existingValue = gameState[row - 1][column - 1];
        return existingValue === undefined;
    }

    function hasWon(selectedRow, selectedColumn) {
        // normalised
        const rowIndex = selectedRow - 1;
        const columnIndex = selectedColumn - 1;
        // accumulator
        const accumulatorFunc = (accumulator, currentValue) => { return accumulator && currentValue === currentPiece }

        // check winning row
        const rowValues = gameState[rowIndex];
        if (rowValues.reduce(accumulatorFunc, true)) { return true; }

        // check winning column
        const columnValues = [gameState[0][columnIndex], gameState[1][columnIndex], gameState[2][columnIndex]];
        if (columnValues.reduce(accumulatorFunc, true)) { return true; }

        // check winning diagonals
        const leftToRightDescDiagValues = [gameState[0][0], gameState[1][1], gameState[2][2]];
        if (leftToRightDescDiagValues.reduce(accumulatorFunc, true)) { return true; }

        const leftToRightAscDiagValues = [gameState[2][0], gameState[1][1], gameState[0][2]];
        if (leftToRightAscDiagValues.reduce(accumulatorFunc, true)) { return true; }

        return false;
    }

    function isDraw() {
        let isFullyPopulated = true;
        gameState.forEach((row) => {
            var reduced = row.reduce((previous, current) => {
                return ((current)? true : false) && previous
            },
                true);
            isFullyPopulated = isFullyPopulated && reduced;
        });

        return isFullyPopulated;
    }

    function onClickEnd() {
        setCurrentPiece("X");
        setGameState(getNewGameState());
        setGameInProgress(true);
        setScoreBoard(null);
        setPlayer1("");
        setPlayer2("");
    }

    function onClickNewGame() {
        setGameState(getNewGameState());
        setGameInProgress(true);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setScoreBoard(
            {
                "X": {
                    playerName: player1,
                    score: 0
                },
                "O": {
                    playerName: player2,
                    score: 0
                }
            });
    }

    return (
        <>
            {scoreBoard ?
                <>
                    <GameHeader
                        gameInProgress={gameInProgress}
                        currentPlayer={scoreBoard[currentPiece].playerName}
                        gameEndMessage={endGameMessage}
                    />
                    <GameBoard
                        gameInProgress={gameInProgress}
                        updateGameState={updateGameState}
                        pieceInPlay={currentPiece}
                        canPlay={canPlay}
                        onClickNewGame={onClickNewGame}
                        onClickEnd={onClickEnd} />
                    <ScoreBoard scoreBoard={scoreBoard} />
                </>
                : <LoadNames
                    handleSubmit={handleSubmit}
                    player1={player1}
                    player2={player2}
                    setPlayer1={setPlayer1}
                    setPlayer2={setPlayer2}
                />
            }
        </>
    )
}