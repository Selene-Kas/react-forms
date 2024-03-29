import { useState } from "react"

export default function SignUpForm({setToken}) {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if(password.length < 8) {
      setError(username + ' your ( Password ) must be 8 characters')
    }
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST" ,
        body: JSON.stringify({username, password}),
      });
      const result = await response.json();
      setToken(result.token);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
    setUsername(" ");
    setPassword(" ");
  }

  return (
  <>
  <div className="sign">
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    
    <form onSubmit={handleSubmit}>
      <label>
        Username: 
        <input value={username} 
        onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password: 
        <input value={password} 
        onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
    </div>
  </>
  );
}