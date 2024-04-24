const TotalCourses = ({courses}) => {
    const total = courses.parts.reduce((sum,exer)=> sum + exer.exercises,0)
    return (
        <p>Total number of exercises {total}</p>
    )
}   

const CourseName = ({courses}) =>{
    
    const mappin = courses.map(course => (
    <div key={course.id}>
        <h2 >Course: {course.name}</h2>
        <ul>
            {course.parts.map(part => 
            <li key={part.id}>{part.name} Ex:{part.exercises}</li>)}
        </ul>
        <TotalCourses courses={course}/>
    </div>
))
    return mappin
}

const Course = ({courses}) => {
    
    return (
    <div>
        <CourseName courses={courses}/>
    </div>
    )
}

export default Course