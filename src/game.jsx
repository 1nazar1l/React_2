import "./Game.css"

function Game(props){
    const percentage = Math.round(props.step/props.questions.length*100)
    return(
        <div>
            <div style={{width: "100%",backgroundColor: 'grey'}} className="progress">
                <div style={{width: `${percentage}%`}}className="progress__inner"></div>
            </div>
            <h1>{props.question.title}</h1>
            <ul>
                {props.question.variants.map((item, index) => (
                    <li key={index} onClick={() => props. handleClick(index)}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Game