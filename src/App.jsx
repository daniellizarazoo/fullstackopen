const Header = (props) =>{
  const course_name=props.course.name
  return(
    <h1>{course_name}</h1>
  )
}

const Content = (props) =>{
  
  return (
    
    <>
    
    <Part part={props.part.parts[0].name} nex={props.part.parts[0].exercises}/>
    <Part part={props.part.parts[1].name} nex={props.part.parts[1].exercises}/>
    <Part part={props.part.parts[2].name} nex={props.part.parts[2].exercises}/>
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
    <p>Number of excercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
  )
}

const App = () => {
  
  const course = {
    name: 'Half stack app development',
    parts : [
      {name:'Fundamentals of React', exercises:10},
      {name:'Ussing props to pass data', exercises:7},
      {name:'State of a component', exercises:14}
            ]
    }
  

  

  return(
    <div>
    <Header course={course}/>
    <Content part={course}/>
    <Total parts={course}/>
    </div>
  )
}


export default App