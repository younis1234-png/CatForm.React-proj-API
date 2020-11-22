// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import CatForm from "./CatForm";

function App() {
  const [catFacts, setCatFacts] = useState([]);
  // Generate numbers fro 0 to mz-1
  function getRandomUntil(mx) {
    return Math.floor(Math.random() * mx);
  }

  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts").then((results) =>
      results.json().then((facts) => setCatFacts(facts.all))
    );
    // .all is the filde that get return from our api\
    return () => {
      console.log("componenent will unamount");
    };
  }, []);

  return (
    <div className="App">
      {catFacts.length > 0 ? (
        <h1>{catFacts[getRandomUntil(50)].text}</h1>
      ) : (
        <h1>No facts available</h1>
      )}
      <CatForm />
    </div>
  );
}

export default App;
