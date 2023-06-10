import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import { NoteFound } from "./Pages/NoteFound";
function App() {
  return (
    <>
      <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NoteFound/>}/>
        </Routes>
  </>
  );
}


export default App;
