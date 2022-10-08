import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters/Characters";
import Character from "./components/Character/Character";
import Home from "./components/Home/Home"
import Episodes from "./components/Episodes/Episodes";
import Episode from "./components/Episode/Episode";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/characters" element={<Characters/>}></Route>
          <Route path="/character/:id" element={<Character/>}></Route>
          <Route path="/music"></Route>
          <Route path="/episodes" element={<Episodes/>}></Route>
          <Route path="/episode/:id" element={<Episode/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
