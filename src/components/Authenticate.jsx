import { useState } from "react";


export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  async function handleClick() {
    //console.log("it fires");
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate", 
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        }
      )
      const result = await response.json();
      setSuccessMessage(result.message);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="auth">
      <h2>Authenicate!</h2>
      {successMessage && <p>{successMessage} </p>}
      {error && <p>{error} Something is wrong! </p>}
      <button onClick={handleClick} >Authenticate Token! </button>
    </div>
  );
}