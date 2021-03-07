import React, {useState}from 'react'
import Navbar from './Navbar'
import Tweetlist from './TweetList'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddTweet from './Tweetinput'
import EditUserForm from './EditForm'

import './app.css'

const App = () => {

  const initialState = {
    isLightTheme: true,
    light: {syntax: '#555', ui:"#ddd", bg:"#eee"},
    dark: {syntax: '#555', ui:"#333", bg:"#012"}
  }

  const [color, setColor] = useState(initialState)
  const changeBackground = () => {
      setColor({isLightTheme:!isLightTheme})
  }
  const {isLightTheme} = color 

  const theme = isLightTheme ? initialState.light : initialState.dark
  console.log(theme)

  const userData = [
    {id: 1, name: 'Tania', username: 'Tania1234', message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. '},
    {id: 2, name: 'Adebayo', username: 'Adebayo30p', message:'Leo a diam sollicitudin tempor id. A lacus vestibulum sed arcu non odio euismod lacinia. In tellus integer feugiat scelerisque. Feugiat in fermentum posuere urna nec tincidunt praesent. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. '},
    {id: 3, name: 'Talan', username: 'Tani%234', message:' Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Eros donec ac odio tempor orci dapibus ultrices. Elementum nibh tellus molestie nunc. Et magnis dis parturient montes nascetur. Est placerat in egestas erat imperdiet. Consequat interdum varius sit amet mattis vulputate enim.'},
  ]

  const initialFormState = { id: null, name: '', username: '' }
  const [users, setUsers] = useState(userData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)


  const addTweet = (user) => {
    console.log(user);
    user.id = users.lenght + 1
    setUsers([...users,user])
  }
  const deleteUsers = (id) => {
    console.log(id)
    setUsers(users.filter((user) => user.id !== id))
  }

  const editForm = (user) => {
    console.log(user);
    setEditing(true); 
    setCurrentUser({ id: user.id, name: user.name,message: user.message, username: user.username })
  }
  const updateUser = (id,user2) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? user2 : user)))
  }

  
  return ( <Router>
    <div className="container" style={{background: theme.bg,color:theme.syntax}}>
    <div className='darkmode' onClick={changeBackground}>
                <a
                  href="#null"
                  className="tooltipped btn-floating btn-small black darken-4"
                  data-tooltip="night mode"
                >
                  <i className="fa fa-moon-o"></i>
                </a>
    </div>
    <Switch>
    <Route path='/'>
    <Navbar/>
    {editing ? (<EditUserForm updateUser={updateUser} setCurrentUser={currentUser} setEditing={setEditing}/> ): (<AddTweet addTweet={addTweet}/>)}
    <Tweetlist tweet={users} editForm={editForm} deleteUsers={deleteUsers}/>
    </Route>
    </Switch>
  </div> 
  </Router>);
}
 
export default App;
