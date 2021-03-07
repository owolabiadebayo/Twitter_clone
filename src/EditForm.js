import React, {useState,useEffect} from 'react'
import './Tweet.css'


const EditFormUser = ({setEditing,setCurrentUser,updateUser}) => {


  const [user2, setUser2] = useState(setCurrentUser)
console.log(user2);
  useEffect(() => {
    setUser2(setCurrentUser)
    
  }, [setCurrentUser])
  
  const initialFormState = { 
    message: "",
    username: "AnonymousUser",
    name:"Anonymous"
  };
  const [user,setUser] = useState(initialFormState)

const handleChange = (e) => {
  setUser({name: user.name, username: user.username, [e.target.id]: e.target.value})
}
const handleSubmit = (e) =>{
  e.preventDefault()

  updateUser(user2.id,user2)
}

  return (  <div className="row">
  <div className="col s12 m10 18">
    <form onSubmit={handleSubmit}>
        <input type='text'  id="message"  value={user2.message} onChange={handleChange}/>
        <button type="submit" className="btn waves-effect waves-light">Update  <i className="fa fa-edit"></i></button>


      <button  onClick={() => setEditing(false)} className="btn red waves-effect waves-light">
        Cancel <i className="fa fa-remove"></i>
      </button>
    </form>
  </div>
</div> );
}
 
export default EditFormUser;