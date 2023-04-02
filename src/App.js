import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Get from './Get';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';

function App() {
  return (
    <div>
      <header>
        <h1>HOME</h1>
        <a href="/" target='_self'>Home</a><br></br>
        <a href="/get" target='_self'>List</a><br></br>
        <a href="/create" target='_self'>Create</a><br></br>
        <a href="/update" target='_self'>Update</a><br></br>
        <a href="/delete" target='_self'>Delete</a><br></br>
        <BrowserRouter>
           <Route component = { Get } exact path="/get"/>
           <Route component = { Create } exact path="/create"/>
           <Route component = { Update } exact path="/update"/>
           <Route component = { Delete } exact path="/delete"/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
