import React from "react";
import ReactDom from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { SearchBar } from "./components/SearchBar";
function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: "",
      }}
    >
      <ChakraProvider>
        <SearchBar />
      </ChakraProvider>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
