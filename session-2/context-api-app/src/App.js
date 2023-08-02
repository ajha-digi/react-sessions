import { useContext } from "react";
import First from "./components/First"
import Third from "./components/Third";
import {CounterContext} from "./context/CounterContext"

function App() {
const {count} = useContext(CounterContext);
  return (
    <div className="App">
      App ={count}
      <First/>
      <Third/>
    </div>
  );
}

export default App;
