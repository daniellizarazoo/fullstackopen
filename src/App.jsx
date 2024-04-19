const Header = (props) =>{
  const course_name=props.course
  return(
    <h1>{course_name}</h1>
  )
}

const Content = (props) =>{
  return (
    <>
    <Part part={props.c1} nex={props.n1}/>
    <Part part={props.c2} nex={props.n2}/>
    <Part part={props.c3} nex={props.n3}/>
    </>
  )
}

const Part = (props)=>{
  return(
    <p>{props.part} {props.nex}</p>
  )
}

const Total = (props) => {
  return(
    <p>Number of excercises {props.e1 + props.e2 + props.e3}</p>
  )
}

const App = () => {
  
  const course = 'Half stack app development'
  const part1 = {name:'Fundamentals of React', exercises:10}
  const part2 = {name:'Ussing props to pass data', exercises:7}
  const part3 = {name:'State of a component', exercises:14}
  

  return(
    <div>
    <Header course={course}/>
    <Content c1={part1.name} n1={part1.exercises} c2={part2.name} n2={part2.exercises} c3={part3.name} n3={part3.exercises}/>
    <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises}/>
    </div>
  )
}


export default App