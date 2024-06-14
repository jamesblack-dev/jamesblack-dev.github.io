export default function ScoreBoard(props) {
    return (
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
                        <td>{props.scoreBoard["X"]}</td>
                        <td>{props.scoreBoard["O"]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}