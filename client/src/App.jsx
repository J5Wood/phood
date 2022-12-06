import "./App.css";

function App() {
  async function fetchData() {
    const resp = await fetch("http://localhost:3001/restaurants");
    const data = await resp.json();

    console.log(data.data);
  }

  fetchData();

  return <div>Hello World</div>;
}

export default App;
