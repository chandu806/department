import logo from './logo.svg';
import './App.css';
import { Todo } from './Components/Todo';
import { Depart } from './Components/Depart';
import {Role} from './Components/Role'

function App() {
  return (
    <div className="App">
      <Todo />
      <Role />
      {/* <Depart /> */}
    </div>
  );
}

export default App;
