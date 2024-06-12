import { useState, useEffect } from "react"
import Note from './components/Note'
import Blog from "./components/Blogs"
import Titles from "./components/Titles"
import Form from "./components/Form"
import Notification from "./components/Notifications"
import blogsapi from "./services/blogsapi"
import loginService from "./services/loginService"

const App = () => {
const [user,setUser] = useState(null)
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [errorMessage,setErrorMessage] = useState(null)
const [blogs,setBlogs] = useState([])
const [title,setTitle] = useState("")
const [author,setAuthor] = useState("")
const [url,setUrl] = useState("")
const [likes,setLikes] = useState("")

useEffect(()=>{
  const fetchBlogs = async () =>{
    try{
      const blogs = await blogsapi.getBlogsByUser()
      console.log(blogs);
      setBlogs(blogs)
    } catch (error){
      throw(error)
    }
  }
  if(user){fetchBlogs()}
  
},[user])

const handleSubmitForm = async (event) => {
  event.preventDefault()
  try{
    const user = await loginService.login({username,password})
    setUser(user.token)
    blogsapi.setToken(user.token)
    setUsername("")
    setPassword("")
  }catch (exception){
    setErrorMessage("Wrong credentials")
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000);
  }
}

  const loginForm = () => {
    return(
      <Form 
      labels={["Username","Password"]}
      inputs={[
        {
          placeholder: "username or email",
          value: username,
          onChange: (event) =>{setUsername(event.target.value)}
        },
        {
          type:"password",
          placeholder: "password",
          value: password,
          onChange: (event) =>{setPassword(event.target.value)}
        }
      ]}
      onClick = {handleSubmitForm}
    />
    )
  }

  const createNewBlog = ()=>{
    <Form
      labels={["Title","Author","Url","Likes"]}
      inputs={[
        {

        }
      ]}
    />
  }

return(
  <div>
    <Titles title="BLOGS" h={1}/>
    <Notification message={errorMessage}/>
    {user==null && loginForm()}
    <Blog blogs={blogs}/>

  </div>
)

}

export default App;