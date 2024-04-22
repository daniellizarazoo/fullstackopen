import { useState } from "react";

const Titles = ({text}) => <h1>{text}</h1>
const Buttons = ({text,onClick}) => {
  console.log("BUTTON CLLICKED")
  return(
    <button onClick={onClick}>{text}</button>
  )
}
const Texts = (props) => <p>{props.text}</p>

const App = () =>{
  const [selected, setSelected] = useState(0)

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'Esto es aleatorio',
    'Gracias Dios por encargarte de todas mis necesidades',
    'Hay caminos que parecen derechos al hombre, más su fin es camino de muerde. Proverbios 16:25',
    'Santificalos en tu verdad, tu palabra es verdad. Juan 17:17',
    'La luz resplandeció en las tinieblas y las tinieblas no prevalecieron. Juan 1:5',
    'Así como Moisés levantó la serpiente en el desierto, así también es necesario que el hijo del hombre sea levanta. Juan 3:14',
    'Estád siempre gozosos 1 Tesalonicenses 5:16'
  ]

  const handleNextAnecdote = () =>{
    setSelected(Math.floor(Math.random() * 9))
  }

  return(
  <div>
    <Titles text="Anécdotas:"/>
    <Buttons text="Siguiente anecdota" onClick={handleNextAnecdote}/>
    <Texts text ={anecdotes[selected]}/>
  </div>
  

  )
}

export default App