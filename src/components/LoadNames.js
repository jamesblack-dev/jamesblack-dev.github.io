export default function LoadNames(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="player1">Player 1 Name (Crosses):</label>
                <input
                    value={props.player1}
                    onChange={(e) => props.setPlayer1(e.target.value)}
                    name="player1"
                    type="text" ></input>
            </div>
            <div>
                <label htmlFor="player2">Player 2 Name (Noughts):</label>
                <input
                    value={props.player2}
                    onChange={(e) => props.setPlayer2(e.target.value)}
                    name="player2"
                    type="text"></input>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}