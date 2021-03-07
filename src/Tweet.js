import React,{useState} from "react";
import "./Tweet.css";
import Pic from "./img/1.jpg";


const Tweet = ({ tweets,deleteUsers,editForm }) => {
  const {id,username,message,name} = tweets 
  
  const initialState = {
    isLightTheme: true,
    light: {syntax: '#000', ui:"#ddd"},
    green: {syntax: '#00FF00', ui:"#ddd"},
    blue: {syntax: '#0000FF', ui:"#333"},
    red: {syntax: '#FF0000', ui:"#333"}
  }
  const initialState1 = {
    isLightTheme1: true,
    light: {syntax: '#000', ui:"#ddd"},
    green: {syntax: '#00FF00', ui:"#ddd"},
    blue: {syntax: '#0000FF', ui:"#333"},
    red: {syntax: '#FF0000', ui:"#333"}
  }
  const initialState2 = {
    isLightTheme2: true,
    light: {syntax: '#000', ui:"#ddd"},
    green: {syntax: '#00FF00', ui:"#ddd"},
    blue: {syntax: '#0000FF', ui:"#333"},
    red: {syntax: '#FF0000', ui:"#333"}
  }

  const [color, setColor] = useState(initialState)
  const changeBackground = () => {
      setColor({isLightTheme:!isLightTheme})
  }
  const [color1, setColor1] = useState(initialState1)
  const changeBackground1 = () => {
      setColor1({isLightTheme1:!isLightTheme1})
  }
  const [color2, setColor2] = useState(initialState2)
  const changeBackground2 = () => {
      setColor2({isLightTheme2:!isLightTheme2})
  }
  const {isLightTheme} = color 
  const {isLightTheme1} = color1 
  const {isLightTheme2} = color2 

  const theme1 = isLightTheme ? initialState.light : initialState.green
  const theme2 = isLightTheme1 ? initialState.light : initialState.red
  const theme3 = isLightTheme2 ? initialState.light : initialState.blue
  console.log(theme1)

  return (
    <div className="row">
      <div className="col s12 m10 l8">
        <ul className="collection">
          <li className="collection-item avatar">
            <img src={Pic} alt="" className="circle" />
            <span className="title">
              {username}@{name}
            </span>
            <blockquote>{message}</blockquote>
            <span onClick={changeBackground}><i className="fa fa-comments icon" style={{color: theme1.syntax}}></i></span>
            <span onClick={changeBackground1}><i className="fa fa-retweet icon1" style={{color: theme2.syntax}}></i></span>
            <span onClick={changeBackground2}><i className="fa fa-heart icon2" style={{color: theme3.syntax}}></i></span>
            <span id='hello' onClick={() => editForm(tweets,id)}><i className="fa fa-edit icon2"></i></span>
            <span id='hello' onClick={() => deleteUsers(id)}><i className='fa fa-trash'></i></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tweet;
