import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-amber-500 rounded-xl p-4 ">Tailwind Test</h1>
      <Card aman = "danish" textme = "Hello"/>
      <Card aman= "Waxiran" />
      
    </>
  );
}

export default App;
