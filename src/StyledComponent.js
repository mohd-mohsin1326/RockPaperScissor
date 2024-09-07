import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  font-family: 'Roboto';
  background-color: #223a5f;
  color: #ffffff;
  padding-top: 50px;
  padding-right: 50px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const ResultContainer = styled.div`
  height: 30vh;
  width: 80%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  background-color: transparent;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Heading = styled.h1`
  color: ${props => (props.outline ? '#223a5f' : '#ffffff')};
  font-family: 'Bree Serif';
  font-size: 20px;
`

export const ScoreCard = styled.div`
  height: 20vh;
  width: 15%;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #223a5f;
`
export const Button = styled.button`
  background-color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 12px;
  padding-left: 12px;
  color: #223a5f;
  font-family: 'Bree Serif';
  border: none;
  border-radius: 5px;
`
export const ChooseCard = styled.div`
  min-height: 50vh;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 50px;
`
export const RulesBtnCard = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
export const SelectButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  color: #fff;
`
export const Image = styled.img`
  height: 150px;
  width: 150px;
`
export const ResultCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: 'Roboto';
`
export const Pragraph = styled.p`
  font-family: ${props => (props.outline ? 'Roboto' : 'Bree Serif')};
  font-size: 18px;
  color: #223a5f;
  font-weight: bold;
`
export const TitleCard = styled.div`
  width: 100px;
`
