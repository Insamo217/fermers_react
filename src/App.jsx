import "./App.css";
import Wrapper from "./components/layout/wrapper/wrapper";
import data from "mock/mock";
import GlobalStyles from "./global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper items={data} />
    </>
  );
}

export default App;
