import {Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navar from "./components/Navar";
import About from './pages/About'
import Contact from './pages/Contact'
import SearchApp from './components/SearchApp';
import Dropdown from "./components/Dropdown";
const App = () => {
  return (
    <>
     <Navar />
    
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/searchBar" element={<SearchApp/>} />
      <Route path="/dropdown" element={<Dropdown/>}/>
     </Routes>
    </>
  );
};

export default App;