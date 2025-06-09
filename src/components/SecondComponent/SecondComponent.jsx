import FirstComponent from "../FirstComponent/FirstComponent";

function SecondComponent({ parent, day }) {
  return (
    <>
      <p>Evo nas dvoje sjedimo ovdje a danas je {day}</p>
      <FirstComponent random={parent} />
    </>
  );
}

export default SecondComponent;
