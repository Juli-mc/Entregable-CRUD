import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import UsersList from './UsersList';
import UsersForm from './UsersForm';

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null)
  
  useEffect(() =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res =>setUsers(res.data))
  }, [])
  
  const getUser= () =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res =>setUsers(res.data))
  }
  const deleteUser = (id) =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    alert(id)
  }
  const selectUser = user =>{
    setUserSelected(user)
  }
  const deselectUser = () => setUserSelected(null)
  console.log(users)


  return (
    <div className="App">
      <div className='title'>
        <h1>Public API from Academlo</h1>
      </div>
      <div className='Header'>
      <img className='front' src="./users.gif" alt="" srcset="" width="20%"/>
      </div>
      <UsersForm getUser={getUser} userSelected={userSelected} deselectUser={deselectUser} deleteUser={deleteUser}/>
      <UsersList users={users} selectUser={selectUser} deleteUser={deleteUser}/>
    </div>
  )
}

export default App
