import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";



function Temppassword() {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const nav = useNavigate();


  let handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:8001/forgot' , {
      username: username,
      email: email,
     }).then((res)=>{
         console.log(res);
            nav("/resetconfirmed");
}).catch((error) => {
 console.log(error)
});
     }

  return (
    <div>Reset to temporary password
    <form onSubmit={handleSubmit}>
         
              <br/>
    
              <TextField
              id="outlined-static"
              label="Username"
    
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
              
              <br />
    
              <TextField
              id="outlined-static"
              label="Email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
    
              <br />
              <Button type="submit"  variant='outlined'
      sx={{ color: 'black', backgroundColor: 'white', borderColor: 'purple' }}>Submit</Button>
              
            </form>
        </div>
  )
}

export default Temppassword