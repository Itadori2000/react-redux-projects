import Titles from "./components/Titles";
import "./App.css";
import SimpleCRUD from "./components/UseState/SimpleCRUD"
import Clock from "./components/Hooks/UseEffect/Clock";
import Button from "./components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTrash } from "@fortawesome/free-solid-svg-icons";
import BackgroundChanger from "./components/Hooks/UseRef/ChangeBG";



function App(){
  return (
    <>
    {/* <Nav/> */}
    {/* <Titles name="MacBook Air M1" price="$999"/>
    <Titles name="MacBook Air M2" price="$1199"/>
    <Titles name="MacBook Pro M2" price="$1299"/>    
    <Titles name="MacBook Pro M4" /> */}

    {/* <SimpleCRUD/> */}
    {/* <Clock/> */}
    <Button text="Button" variant="danger"/>
    <Button text="Delete" variant="primary" startIcon={<FontAwesomeIcon icon={faTrash} />} />
    <Button text="Play" variant="secondary" endIcon={<FontAwesomeIcon icon={faPlay}/>}/>
    <BackgroundChanger/>
    </>
    
  );
}
export default App;