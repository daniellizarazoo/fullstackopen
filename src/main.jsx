import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes = [
    {
        content: 'HTML is easy', id: 1, important : true
    },
    {
        content: 'Browser can execute only javascript', id: 2, important : false
    },
    {
        content: 'GET and POST are the most important HTTP methods', id: 3, important : true
    },
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)



