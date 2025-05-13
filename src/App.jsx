import "./App.css";
import Moles from "./Components/Moles";

function App() {
  return (
    <>
      <div className="body">
        <div className="title">Whac A Mole</div>

        <div className="moles">
          <Moles />
        </div>
      </div>
    </>
  );
}

export default App;
