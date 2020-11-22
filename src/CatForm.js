import React, { useState } from "react";
import "./App.css";

function CatForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bread, setBread] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="What is your cat's name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="How old is your cat..."
        value={age}
        // to set our value when we type a value we use the following
        onChange={(e) => setAge(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="What is the cat's bread..."
        value={bread}
        onChange={(e) => setBread(e.target.value)}
      ></input>
      <input type="submit" placeholder="submit..."></input>
    </div>
  );
}

export default CatForm;
