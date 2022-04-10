import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

var loginFailed: boolean = false;

function validatePassword(passwordHash: number, username: string) {
  console.log('Stored password', parseInt(localStorage.getItem(username)!));
  console.log('Given password', passwordHash);
  if (!localStorage.getItem(username)! || passwordHash === parseInt(localStorage.getItem(username)!)) {
    return true;
  }
  return false;
}

function hash(password: string) {
  let char;
  let hash=0;
  for (let i=0; i<password.length; i++) {
    char = password.charCodeAt(0);
    hash += char;
  }
  console.log("hash is",hash);
  hash*=81;
  hash = hash % 255;
  console.log("now it is",hash);
  return hash;
  // const passwordHash = require('password-hash');
  // const hash = passwordHash.generate(password);
  // return hash;
}

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordHash, setPasswordHash] = useState(0);
  useEffect( () => {
    setUsername("");
    setPassword("");
  }, []);

  return (
  <div className="App">
    <header className="App-header">
      <label>
        Log in here
      </label>
      <form>
        <label>
          Username: <br></br>
          <input type="text" name="username" value={username} onInput={(e) => { 
              setUsername((e.target as HTMLInputElement).value)
              }}/>
        </label>
        <br></br>
        <label>
          Password: <br></br>
          <input type="password" name="password" value={password} onInput={(e) => {
              setPassword((e.target as HTMLInputElement).value)
              }}/>
        </label>
        <br></br>
        <input type="submit" value="Submit" onClick={(event) => {
          event.preventDefault();
          // setPasswordHash(hash(password));
          let hashed = hash(password);
          if(validatePassword(hashed, username)) {
            setUsername(username); 
            localStorage.setItem('username', username);
            console.log('setting hash to', hashed);
            localStorage.setItem(username, ""+hashed);
            navigate('/mainPage');
           } else { 
             loginFailed = true;
            //  setUsername("");
             setPassword("");
            //  localStorage.setItem('username', "");
           }
        }} />
      </form>
      {loginFailed? 
      <p className="error">Login failed, please try again</p>
    : null}
    </header>
  </div>
  );
}

export default Login;