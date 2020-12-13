
import {  Switch, Route, Redirect } from "react-router-dom";
import React,{useState} from 'react';
import LoginForm from './LoginForm';

function App()
{
    const adminUser = {
        
            email:"hruday@gmail.com",
            password: "hruday123"
           
    }

    const [user,setUser] = useState ({name: "", email: ""});
    const [error, setError]= useState("");


const Login = details =>{
console.log(details);

if(details.email == adminUser.email && details.password == adminUser.password){
    setUser({
        name:details.name,
        email:details.email
    });
}else {
     
    setError('Details do not matched');
 } 
}

const Logout = () =>{
   setUser ({name: "", email: ""});

}

    return(

            <div className= "App">
        {(user.email != "")? (
            <div className="welcome">
            <h1>Thanks For Logging In!  <span>{user.name}</span></h1>
            <button id="kya2"onClick={Logout}>Logout</button>
            </div>

        ) : (
            <LoginForm Login={Login} error={error}/>
        )}


            </div>
             );      

}

export default App;