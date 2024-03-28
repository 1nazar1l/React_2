

function Result(props) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"></img>
            <h2>
              Вы отгадали {props.correct} ответа из {props.questions.length}
            </h2>
            <button>
              Попробовать снова
            </button>
        </div>
    )
}

export default Result;