import { useState } from "react";

const Display = ({counter}) => <div>Valor total {counter}</div>

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>

const Titles = ({title}) => <h1>{title}</h1>

const Statistics = ({text,counter}) => <p>{text} {counter}</p>

const App = () =>{

  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  const [value, setValue] = useState(10)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1 
    setLeft(updatedLeft)
    setTotal(updatedLeft+right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setTotal(left+right)
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left+updatedRight)
  }

  const handleClick = (name) => () => console.log('Hello',name)
  
  const handleSetValue = (newValue) => () => {
    const oldValue = value
    console.log("Valor a cambiar es " , oldValue, "valor a setear es ", newValue)
    setValue(newValue)
  }

  const setToValue = (newValue) => ()=> {
    console.log('value now', newValue)
    setValue(newValue)
  }

  const handleGood = () => {
    const newValue = good+1
    setGood(newValue)
  }

  const handleNeutral = () => {
    const newValue = neutral+1
    setNeutral(newValue)
  }

  const handleBad = () => {
    const newValue = bad+1
    setBad(newValue)
  }

  return(
    <div>
      <Titles title="give feedback"/>
      <Button text="good" onClick={handleGood}/>
      <Button text="neutral" onClick={handleNeutral}/>
      <Button text="bad" onClick={handleBad}/>
      <Titles title="statistics"/>
      <Statistics text="good" counter={good}/>
      <Statistics text="neutral" counter={neutral}/>
      <Statistics text="bad" counter={bad}/>
    </div>
  )
}

const History = (props) =>{
  
  if (props.allClicks.length==0){
    return(
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  else{
    return(
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>)
  }
}


export default App