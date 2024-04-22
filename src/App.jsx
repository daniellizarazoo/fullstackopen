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
  const [average, setAverage] = useState(0)
  const [sumatoria, setSumatoria] = useState(0)
  const [positiveAverage,setPositiveAverage]= useState(0)

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
    const lastTotal = total
    setTotal(lastTotal+1)
    funAverage(1,lastTotal+1)
    promediadorPositivo(newValue,lastTotal+1)
  }

  const handleNeutral = () => {
    const newValue = neutral+1
    setNeutral(newValue)
    const lastTotal = total
    setTotal(lastTotal+1)
    funAverage(0,lastTotal+1)
    promediadorPositivo(good,lastTotal+1)
  }

  const handleBad = () => {
    const newValue = bad+1
    setBad(newValue)
    const lastTotal = total
    setTotal(lastTotal+1)
    funAverage(-1,lastTotal+1)
    promediadorPositivo(good,lastTotal+1)
  }

  const funAverage = (num,total) => {
    const lastSum = sumatoria
    const newValue = num + lastSum
    setSumatoria(newValue)
    const newAverage = total > 0 ? newValue / total : 0;
    setAverage(newAverage)
  }

  const promediadorPositivo = (num, total) =>{
    console.log("NUMERO DE POSITIVOS", num)
    console.log("total ", total);
    const newAverage = total > 0 ? num / total : 0;
    setPositiveAverage(newAverage)
  }

  return(
    <div>
      <Titles title="give feedback"/>
      <Button text="good" onClick={handleGood}/>
      <Button text="neutral" onClick={handleNeutral}/>
      <Button text="bad" onClick={handleBad}/>
      <Titles title="statistics"/>
      <Statistics text="good  " counter={good}/>
      <Statistics text="neutral  " counter={neutral}/>
      <Statistics text="bad  " counter={bad}/>
      <Statistics text="Total :" counter={total}/>
      <Statistics text="Average :" counter={average}/>
      <Statistics text="Positive average :" counter={positiveAverage}/>
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