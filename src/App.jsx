const Header = (props) =>{
  const course_name=props.course
  return(
    <h1>{course_name}</h1>
  )
}

const Content = (props) =>{
  console.log(props.part[0].name,'NAME');
  console.log(props.part[0].exercises,'EXCERSICES');
  return (
    
    <>
    
    <Part part={props.part[0].name} nex={props.part[0].exercises}/>
    <Part part={props.part[1].name} nex={props.part[1].exercises}/>
    <Part part={props.part[2].name} nex={props.part[2].exercises}/>
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
    <p>Number of excercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  
  const course = 'Half stack app development'
  const parts = [
    {name:'Fundamentals of React', exercises:10},
    {name:'Ussing props to pass data', exercises:7},
    {name:'State of a component', exercises:14}
  ]
  

  

  return(
    <div>
    <Header course={course}/>
    <Content part={parts}/>
    <Total parts={parts}/>
    </div>
  )
}


export default App