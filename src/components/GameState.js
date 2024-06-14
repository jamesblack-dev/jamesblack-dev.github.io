import GameBoard from "./GameBoard";
import GameHeader from "./GameHeader";
import { useState } from "react";

export default function GameState() {
    const getNewGameState = () => Array(3).fill(null).map(() => Array(3).fill(undefined));
    const [currentPiece, setCurrentPiece] = useState("X");
    const [gameState, setGameState] = useState(getNewGameState());
    const [gameInProgress, setGameInProgress] = useState(true);
    const [winsState, setWinsState] = useState({ "X": 0, "O": 0 });

    function updateGameState(selectedRow, selectedColumn) {
        // -1 to normalise for arrays
        let update = [...gameState];
        update[selectedRow - 1][selectedColumn - 1] = currentPiece;
        setGameState(update);

        if (hasWon(selectedRow, selectedColumn)) {
            setGameInProgress(false);
            endGame();
            var newWinsState = { ...winsState };
            newWinsState[currentPiece] = newWinsState[currentPiece] + 1;
            setWinsState(newWinsState);
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

    function endGame() {

    }

    function onClickNewGame() {
        setGameState(getNewGameState());
        setCurrentPiece("X");
        setGameInProgress(true);
    }

    return (
        <>
            <div>
                <div>
                    <div>
                        <GameHeader gameInProgress={gameInProgress} currentPiece={currentPiece} />
                        {gameInProgress ?
                            <GameBoard
                                updateGameState={updateGameState}
                                pieceInPlay={currentPiece}
                                canPlay={canPlay} />
                            : <button onClick={onClickNewGame}>New Game?</button>
                        }
                    </div>
                    <div className="score-board">
                        <table>
                            <thead>

                                <tr>
                                    <th>X</th>
                                    <th>Y</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>{winsState["X"]}</td>
                                    <td>{winsState["O"]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}