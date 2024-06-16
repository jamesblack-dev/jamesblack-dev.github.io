export default function GameHeader(props) {
    return <h1>{props.gameInProgress ? "Player turn: " + props.currentPlayer : props.gameEndMessage}</h1>
}