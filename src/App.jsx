import "./App.css";
import { CurrentLocation } from "./components/currentlocation.jsx";

function App() {
  // const[data,setData]=useState();

  // let key="1afee05f35f4bbefee24aa8566dc0af7";
  let key = "e3510aab21da294b3b3b246c2b488671";

  return <CurrentLocation k={key} />;
}
export default App;
