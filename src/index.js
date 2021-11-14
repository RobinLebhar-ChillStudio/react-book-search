
import ReactDom from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Index } from "./pages/Index"
import { BookDetail } from "./pages/BookDetail"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
ReactDom.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="book/:bookId" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>


  </ChakraProvider>
  , document.getElementById("root"));
