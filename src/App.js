import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/mainly/Home";
import Details from "./components/mainly/Details";


;

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
