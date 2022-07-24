import React from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "styles/GlobalStyles";

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      <div></div>
    </div>
  );
}

export default App;
