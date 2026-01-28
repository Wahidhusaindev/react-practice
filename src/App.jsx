import {Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navar from "./components/Navar";
import About from './pages/About'
import Contact from './pages/Contact'
import SearchApp from './components/SearchApp';
const App = () => {
  return (
    <>
     <Navar />
    
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/searchBar" element={<SearchApp/>} />
     </Routes>
    </>
  );
};

export default App;