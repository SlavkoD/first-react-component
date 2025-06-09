import logo from "./logo.svg";
import "./App.css";
import FuncComponent from "./components/FuncComponent/FuncComponent";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import SecondComponent from "./components/SecondComponent/SecondComponent";
import SecondClassComponent from "./components/SecondClassComponent/SecondClassComponent";

function App() {
  return (
    <>
      <FuncComponent name="Slavko" />
      <ClassComponent number="10" text="bla bla" />
      <SecondComponent parent="Dolazim s vrha" day="Ponedjeljak" />
      <SecondClassComponent title="Naslov iz App" year="2025" />
    </>
  );
}

export default App;
