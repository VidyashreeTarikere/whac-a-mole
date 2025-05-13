import "./App.css";
import Moles from "./Components/Moles";
import Background from "./assets/Background.png";

function App() {
  return (
    <>
      <div
        className="body"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="title">Whac A Mole</div>

        <div className="moles">
          <Moles />
        </div>
      </div>
    </>
  );
}

export default App;
