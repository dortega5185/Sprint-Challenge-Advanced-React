import React from "react";
import useFetch from "./hooks/useFetch";
import DarkMode from "./components/DarkMode";
import "./App.css";
import SearchForm from "./components/SearchForm";

function App() {
  const res = useFetch("http://localhost:5000/api/players", {});
  if (!res.response) {
    return <div>Loading...</div>;
  }
  const array = res.response;

  return (
    <div>
      <h1>Women's World Cup</h1>
      <DarkMode />
      <SearchForm array={array} />
      {/* {array.map((res) => {
        return <Women info={res} key={res.id} />;
      })} */}
    </div>
  );
}

export default App;
