import { useState, useEffect } from "react"
import Note from './components/Note'
import Probando from "./components/Probando"
import Blog from "./components/Blogs"
import Titles from "./components/Titles"
import Form from "./components/Form"
import Notification from "./components/Notifications"
import blogsapi from "./services/blogsapi"
import loginService from "./services/loginService"
import Togglable from "./components/Togglable"

const App = () => {
  const [loginVisible,setLoginVisible] = useState(false)
  const [user,setUser] = useState(null)
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [errorMessage,setErrorMessage] = useState(null)
  const [blogs,setBlogs] = useState([])
  const [toCreateBlog,setToCreateBlog] = useState({
    title:"",
    author:"",
    url:"",
    likes:0
  })
  const [rememberMe,setRememberMe] = useState(false)
  
  const addNote = (noteObject) => {
    console.log("Note Object>>>", noteObject);
  }

  const noteForm = () =>{
    return(
      <Togglable buttonLabel='new note'>
      <Probando createNote={addNote}/>
    </Togglable>
    )
  }

  useEffect(()=>{
    const fetchBlogs = async () =>{
      try{
        const blogs = await blogsapi.getBlogsByUser()
        if(blogs==401){
          setErrorMessage("You must log in again")
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000);
          window.localStorage.clear()
          sessionStorage.clear()
          setUser(null)
          setBlogs([])
        }else{
          setBlogs(blogs)
        }
      } catch (error){
        throw(error)
      }
    }
    if(user){fetchBlogs()}
  },[user])

  useEffect(()=>{
    let userToken = ""
    if(sessionStorage.token){
      userToken = sessionStorage.token
      setUser(userToken)
      blogsapi.setToken(userToken)
    }else if(localStorage.token){
      userToken = localStorage.token
      setUser(userToken)
      blogsapi.setToken(userToken)
    }
  },[])

  const handleSubmitForm = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.login({username,password})
      setUser(user.token)
      blogsapi.setToken(user.token)
      setUsername("")
      setPassword("")
      !rememberMe ? sessionStorage.setItem('token', user.token) : window.localStorage.setItem('token',user.token)

    }catch (exception){
      setErrorMessage("Wrong credentials")
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000);
    }
  }

  const loginForm = () => {
    return(
      <>
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
    <label>
      <input type="checkbox" checked={rememberMe} onChange={(event) =>{setRememberMe(event.target.checked)}}/>
      remember me?
    </label>
    </>
    )
  }

  const handleLogout = () => {
    setUser(null)
    setBlogs([])
    window.localStorage.clear()
    sessionStorage.clear()
  }

  const createNewBlog = ()=>{
    return(
     <Form
     labels = {["Title","Author","Url","Likes"]}
     inputs = {[{
        placeholder: "Title",
        value: toCreateBlog.title,
        onChange: (event) =>{setToCreateBlog({...toCreateBlog,title:event.target.value})}
     },
    {
      placeholder: "Author",
      value: toCreateBlog.author,
      onChange: (event) =>{setToCreateBlog({...toCreateBlog,author:event.target.value})} 
    },
    {
      placeholder: "Url",
      value: toCreateBlog.url,
      onChange: (event) =>{setToCreateBlog({...toCreateBlog,url:event.target.value})}
    },
    {
      placeholder: "Likes",
      value: toCreateBlog.likes,
      onChange: (event) =>{setToCreateBlog({...toCreateBlog,likes:event.target.value})}
    }
  ]}
    onClick={handleCreateNewBlog}
     />
    )
  }

  const handleCreateNewBlog = (event)=> {
    event.preventDefault()
    const fetchBlogsWhenCreated= async()=>{
      await blogsapi.create(toCreateBlog)
      const data = await blogsapi.getBlogsByUser()
      setBlogs(data)
    }
    fetchBlogsWhenCreated()
  }

  const addNewBLog = () => {
    <Togglable>
      
    </Togglable>
  }

  return(
    <div>
      <Titles title="BLOGS" h={1}/>
      <Notification message={errorMessage}/>
      {user==null && loginForm()}
      {user!=null && ( // Use !== for comparison
        <button style={{ backgroundColor: 'red', color: 'white' }} onClick={handleLogout}>
          LogOut
        </button>
    )}
      {user!=null && createNewBlog()}
      <Blog blogs={blogs}/>
      {noteForm()}
    </div>
  )

}

export default App;