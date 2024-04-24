// import logo from './logo.svg';
import './App.css';
import Sidebar from "./Sidebar.js";
import Feed from './Feed.js';
import Widgets from "./Widgets.js"

function App() {
  return (
    //BEM
    <div className="app">
      {/* <h1>Making TYD, Rn working on a twitter clone</h1> */}
      <Sidebar/>
      {/* Feed */}
      <Feed/>
      {/* widgets*/}
      <Widgets/>
    </div>
  );
}

export default App;
