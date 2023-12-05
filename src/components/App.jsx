import "../css/App.css";
import Header from './Header';
import Nav from './Nav';
import Cards from "./Cards"
import Upakovka from './Upakovka';
import Footer from "./Footer"
import Map from "./Map"
import Add from "./Add"
function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Map />
      <Upakovka/>
      <Add/>
      <Footer/>
    </div>
  );
}

export default App;
