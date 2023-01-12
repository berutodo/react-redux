import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchToken } from './store/login';
import { useState } from 'react';

function App() {
  const state = useSelector(state => state);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  function handleSubmit(event){
    event.preventDefault()
    dispatch(fetchToken({username, password}))
  }
  return (
    <div className="App">
       <h1>{state.login.data?.user_display_name}</h1> 
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario: {username}</label>
        <input id='username' type="text" onChange={(e) => setUsername(e.target.value) }/>
        <label htmlFor="password">Senha: {password}</label>
        <input id='password' type="password" onChange={(e) => setPassword(e.target.value) }/>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  )
}

export default App
