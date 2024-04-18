const Header = (props) =>{
  const course_name=props.course
  return(
    <h1>{course_name}</h1>
  )
}

const Content = (props) =>{

  return (
    <>
    <p>{props.c1} {props.n1}</p>
    <p>{props.c2} {props.n2}</p>
    <p>{props.c3} {props.n3}</p>
    </>
  )

}

const Total = (props) => {
  return(
    <p>Number of excercises {props.e1 + props.e2 + props.e3}</p>
  )
}

const App = () => {
  
  const course = 'Half stack app development'
  const part1 = 'Fundamentals of React'
  const excercises1= 10
  const part2 = 'Using props to pass data'
  const excercises2=7
  const part3 = 'State of a component'
  const excercises3 = 14

  return(
    <div>
    <Header course={course}/>
    <Content c1={part1} n1={excercises1} c2={part2} n2={excercises2} c3={part3} n3={excercises3}/>
    <Total e1={excercises1} e2={excercises2} e3={excercises3}/>
    </div>
  )
}


export default App