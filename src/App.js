import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {Component} from 'react'
import {
  MainContainer,
  ResultContainer,
  Heading,
  ScoreCard,
  Button,
  ChooseCard,
  RulesBtnCard,
  SelectButton,
  TitleCard,
  Pragraph,
  Image,
} from './StyledComponent'
import GameResultView from './components/GameResultView'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    isChoosen: false,
    userChoice: [],
    randomSelect: [],
    result: '',
  }

  // Corrected method to handle user choice
  choosedByUser = id => {
    const randomNum = Math.floor(Math.random() * choicesList.length)
    const sortedChoice = choicesList.filter(each => each.id === id)
    const randomChoice = choicesList[randomNum]
    this.setState({
      isChoosen: true,
      userChoice: sortedChoice,
      randomSelect: randomChoice,
    })
    const choosendId = sortedChoice[0].id
    const randomNumId = randomChoice.id
    if (choosendId === 'PAPER' && randomNumId === 'ROCK') {
      this.setState(prevState => ({
        ...prevState,
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (choosendId === 'SCISSORS' && randomNumId === 'ROCK') {
      this.setState(prevState => ({
        ...prevState,
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (choosendId === 'ROCK' && randomNumId === 'PAPER') {
      this.setState(prevState => ({
        ...prevState,
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (choosendId === 'SCISSORS' && randomNumId === 'PAPER') {
      this.setState(prevState => ({
        ...prevState,
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (choosendId === 'ROCK' && randomNumId === 'SCISSORS') {
      this.setState(prevState => ({
        ...prevState,
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (choosendId === 'PAPER' && randomNumId === 'SCISSORS') {
      this.setState(prevState => ({
        ...prevState,
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else {
      this.setState({result: 'IT IS DRAW'})
    }
  }

  playAgain = () => {
    this.setState({isChoosen: false})
  }

  render() {
    const {score, isChoosen, userChoice, randomSelect, result} = this.state
    return (
      <MainContainer>
        <ResultContainer>
          <TitleCard>
            <Heading>ROCK PAPER SCISSORS</Heading>
          </TitleCard>
          <ScoreCard>
            <Pragraph>Score</Pragraph>
            <Pragraph outline>{score}</Pragraph>
          </ScoreCard>
        </ResultContainer>
        {isChoosen ? (
          <GameResultView
            userChoice={userChoice}
            randomSelect={randomSelect}
            result={result}
            restart={this.playAgain}
          />
        ) : (
          <ChooseCard>
            <SelectButton data-testid="rockButton">
              <Image
                src={choicesList[0].imageUrl}
                alt={choicesList[0].id}
                onClick={() => this.choosedByUser(choicesList[0].id)}
              />
            </SelectButton>
            <SelectButton data-testid="scissorsButton">
              <Image
                src={choicesList[1].imageUrl}
                alt={choicesList[1].id}
                onClick={() => this.choosedByUser(choicesList[1].id)}
              />
            </SelectButton>
            <SelectButton data-testid="paperButton">
              <Image
                src={choicesList[2].imageUrl}
                alt={choicesList[2].id}
                onClick={() => this.choosedByUser(choicesList[2].id)}
              />
            </SelectButton>
          </ChooseCard>
        )}
        <RulesBtnCard>
          <Popup modal trigger={<Button type="button">RULES</Button>}>
            {close => (
              <div className="popup-content">
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <RiCloseLine className="cross-btn-style" />
                </button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="rules-img-style"
                />
              </div>
            )}
          </Popup>
        </RulesBtnCard>
      </MainContainer>
    )
  }
}

export default App
