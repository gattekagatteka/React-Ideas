import "./App.css";
import { Welcome } from "./layout/Welcome";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Api } from "./components/Api";
import { Clicker } from "./components/Clicker";
import { Timer } from "./components/Timer";
import { Form } from "./components/Form";
import { Ending } from "./layout/Ending";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Clicker />
      <Timer />
      <Api />
      <Form />
      <Ending />
      <Footer />
    </div>
  );
}

export default App;
