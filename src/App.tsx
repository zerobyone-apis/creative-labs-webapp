
import style from "./App.module.scss";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className={style.App}>
  <Navbar/>
  <Footer/>
    </div>
  );
}

export default App;
