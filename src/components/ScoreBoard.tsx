export default function ScoreBoard(props) {
    return (
        <div className="score-board">
            <table>
                <thead>
                    <tr>
                        <th>{props.scoreBoard["X"].playerName}</th>
                        <th>{props.scoreBoard["O"].playerName}</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>{props.scoreBoard["X"].score}</td>
                        <td>{props.scoreBoard["O"].score}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}