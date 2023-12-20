import "./App.css";
import Main from "./components/main";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default App;
