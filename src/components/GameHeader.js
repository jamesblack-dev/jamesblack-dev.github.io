export default function GameHeader(props) {
    return <h1>{props.gameInProgress ? "Player turn: " + props.currentPlayer : "The winner is: " + props.currentPlayer}</h1>
}