import React, { useState } from 'react'
import "./TweetInput.css";

const AddTweet =(props) => {
 const initialFormState = { 
    message: "",
    username: "AnonymousUser",
    name:"Anonymous"
  };
  const [user,setUser] = useState(initialFormState)

 const handleSubmit = (e) => {
    e.preventDefault()
    props.addTweet(user);
  }
 
  const handleChange = (e) => { 
    console.log(e.target.value);
    setUser({name: user.name, username: user.username, [e.target.id]: e.target.value})
  }
  
   
    return (   
      <div className="row">
        <div className="col s12 m10 18">
          <form onSubmit={handleSubmit}>
          <input type='text'  id="message"  value={user.message} onChange={handleChange}/>
            <button type="submit" className="btn waves-effect waves-light">
              Post <i className="fa fa-paper"></i>
            </button>
          </form>
        </div>
      </div>
    );
}

export default AddTweet;
