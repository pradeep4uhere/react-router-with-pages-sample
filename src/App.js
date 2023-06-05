import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Aboutus from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import Home from "./Home";
import { Setting } from "./Pages/Setting";
import { Profile } from "./Pages/Profile";
import { Blog } from "./Pages/Blog";
import { ChangePassword } from "./Pages/ChangePassword";
import { Pages } from "./Pages/Pages";
import { NoteFound } from "./Pages/NoteFound";
function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <div className="col-12 text-center">
        <main style={{marginTop: "58px"}}>
        <div className="container pt-4">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="aboutus" element={<Aboutus/>} />
            <Route path="contactus" element={<Contact/>} />
            <Route path="setting" element={<Setting/>} />
            <Route path="Profile" element={<Profile/>} />
            <Route path="blog" element={<Blog/>} />
            <Route path="changepassword" element={<ChangePassword/>} />
            <Route path="pages" element={<Pages/>} />
            <Route path="*" element={<NoteFound/>}/>
        </Routes>
        </div>
        </main>
        </div>
   </div>
  );
}


export default App;
