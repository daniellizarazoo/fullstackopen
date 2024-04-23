import { useState } from "react";

// COMPONENTES
const Titles = ({text}) => <h1>{text}</h1>

const Buttons = ({text,onClick}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}
const Texts = (props) => <p>{props.text}</p>

const MostVotes = ({votes,anecdotes}) => {
  const maximo = Math.max(...votes)
  const indiceMaximo = votes.indexOf(maximo)
  if (maximo<1){
    return(
      <p> Aun no se registran votos</p>
    )
  }
  else{
    return(
      <Texts text ={`${anecdotes[indiceMaximo]} has ${maximo}`}/>
    )
  }
}

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
  const [votes, setVotes] = useState([...Array(anecdotes.length)].fill(0))

  const handleNextAnecdote = () =>{
    setSelected(Math.floor(Math.random() * 9))
  }

  const handleVotes = () => {
    const actualVotes= [...votes]
    actualVotes[selected]+=1
    setVotes(actualVotes)
  }

  return(
  <div>
    <Titles text="Anecdote of the day:"/>
    <Texts text ={anecdotes[selected]}/>
    <Buttons text="Siguiente anecdota" onClick={handleNextAnecdote}/>
    <Buttons text="Votar" onClick={handleVotes}/>
    <Texts text ={`Votos: ${votes[selected]}`}/>
    <Titles text="Anecdote wiht most votes:"/>
    <MostVotes votes={votes} anecdotes={anecdotes}/>
  </div>
  

  )
}

export default App