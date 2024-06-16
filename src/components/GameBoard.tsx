export default function GameBoard(props) {
    const gridCss = {
        width: "50px",
        height: "50px",
    }
    function handleClick(e, row, column) {
        if (!props.canPlay(row, column)) return;
        props.updateGameState(row, column);
        const h1 = document.createElement("h1");
        h1.innerText = props.pieceInPlay;
        e.target.appendChild(h1);
    }
    return (
        <>
            <div className="container">
                {props.gameInProgress ?
                    <>
                        <div className="row">
                            <div style={gridCss} className="column col-4" onClick={(e) => handleClick(e, 1, 1)}></div>
                            <div style={gridCss} className="column col-4" onClick={(e) => handleClick(e, 1, 2)}></div>
                            <div style={gridCss} className="column col-4" onClick={(e) => handleClick(e, 1, 3)}></div>
                        </div>
                        <div className="row">
                            <div style={gridCss} className="column col-4" onClick={(e) => handleClick(e, 2, 1)}></div>
                            <div style={gridCss} className="column col-4" onClick={(e) => handleClick(e, 2, 2)}></div>
                            <div style={gridCss} className="column col-4" onClick={(e) => handleClick(e, 2, 3)}></div>
                        </div>
                        <div className="row">
                            <div style={gridCss} className="column col-4" onClick={(e) => handleClick(e, 3, 1)}></div>
                            <div style={gridCss} className="column col-4" onClick={(e) => handleClick(e, 3, 2)}></div>
                            <div style={gridCss} className="column col-4" onClick={(e) => handleClick(e, 3, 3)}></div>
                        </div>
                    </>

                    :
                    <div>
                        <button onClick={props.onClickNewGame}>Another Round?</button>
                        <button onClick={props.onClickEnd}>End?</button>
                    </div>
                }
            </div>

        </>
    )
}