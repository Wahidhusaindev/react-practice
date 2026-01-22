import {Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navar from "./components/Navar";
const App = () => {
  return (
    <>
     <Navar />
     <Routes>
      <Route path="/" element={<Home/>} />
     </Routes>
    </>
  );
};

export default App;