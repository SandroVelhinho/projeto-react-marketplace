import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

export function CreateAccount() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (user.password === user.confirmpassword) {
      await createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(console.log("user created"))
        .catch(() => console.log("Something wrong"));
    } else {
      alert("You need to confirm your password");
    }
  };

  return (
    <div>
      <form>
        <label>Email:</label>
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <label>Password:</label>
        <input
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <label>Confirm Password:</label>
        <input
          onChange={(e) =>
            setUser({ ...user, confirmpassword: e.target.value })
          }
        ></input>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}
