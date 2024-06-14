export default function GameHeader(props) {
    return <h1>{props.gameInProgress ? "Piece in Play: " + props.currentPiece : "The winner is: " + props.currentPiece}</h1>
}