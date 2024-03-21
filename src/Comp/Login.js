import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [visible, setVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        console.log("sucesso");
        setVisible(true);
      })
      .catch(() => console.log("creadenciais incorretas"));
  };
  return (
    <div>
      <form>
        <label>Email:</label>
        <input onChange={(e) => setEmail(e.target.value)}></input>
        <label>Password</label>
        <input onChange={(e) => setPass(e.target.value)}></input>
        <button onClick={onSubmit}>Submit</button>
      </form>
      {visible ? <h1>true</h1> : <h1>false</h1>}
    </div>
  );
}
