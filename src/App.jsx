import "./App.css";
import Wrapper from "./components/layout/wrapper/wrapper";
import data from "mock/mock";

function App() {
  return (
    <>
      <Wrapper items={data} />
    </>
  );
}

export default App;
