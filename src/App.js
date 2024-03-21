import { db, auth } from './firebase';
import { CreateAccount } from './Comp/CreateAccount';
import { Login } from './Comp/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <CreateAccount />
      <h1>login</h1>
      <Login />
      
    </div>
  );
}

export default App;
