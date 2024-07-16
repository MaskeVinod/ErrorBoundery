import "./App.css";
import Sample from "./Components/Sample";
import Error from "./ErrorBooundery/Error";

function App() {
  return (
    <>
      <Error>
        <Sample message={1223} />
      </Error>
    </>
  );
}

export default App;
