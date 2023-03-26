import { Route, BrowserRouter } from "react-router-dom";
import App from './App';
import Get from './Get.js';
import Create from './Creat.js'

function Menu() {
  return (
    <div>
      <header>
        <a href="/" target='_blank'>Home</a>
        <a href="/get" target='_blank'>List</a>
        <a href="/create" target='_blank'>Create</a>
        <BrowserRouter>
           <Route component = { App } exact path="/"/>
           <Route component = { Get } exact path="/get"/>
           <Route component = { Create } exact path="/create"/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default Menu;
