import {ChooseCard, SelectButton, ResultCard} from '../../StyledComponent'

const GameResultView = props => {
  const {userChoice, randomSelect, result, restart} = props
  const playAgain = () => {
    restart()
  }
  return (
    <ChooseCard>
      <SelectButton>
        <h1>You</h1>
        <img
          src={userChoice[0].imageUrl}
          alt="your choice"
          className="result-img"
        />
      </SelectButton>
      <SelectButton>
        <h1>Opponent</h1>
        <img
          src={randomSelect.imageUrl}
          alt="opponent choice"
          className="result-img"
        />
      </SelectButton>
      <ResultCard>
        <p>{result}</p>
        <button onClick={playAgain} className="play-again-btn" type="button">
          PLAY AGAIN
        </button>
      </ResultCard>
    </ChooseCard>
  )
}
export default GameResultView
