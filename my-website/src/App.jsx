import React from "react";
import Main from "./components/Main/Main";
import Aurora from "./components/Aurora/Aurora";

const App = () => {
  return (
    <div>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <Main />
    </div>
  );
};

export default App;
