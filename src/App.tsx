import React from "react";
import Input_g from "./app/Input";
import Output from "./app/Output";

function App() {
  return (
    <div className="flex flex-col center items-center gap-2 h-screen">
      <Input_g />
      <Output/>
    </div>
  );
}

export default App;
