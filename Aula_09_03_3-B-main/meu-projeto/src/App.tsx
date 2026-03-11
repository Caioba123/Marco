  // src/App.jsx
  import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
  import Home from './components/Home'
  import Cursos from './components/Cursos'
  import Contato from '../src/components/Contato'

  
  export default function App() {
    return (
      <BrowserRouter>
       <nav className="cont">
         <Link to="/">Home</Link>  <Link to="/cursos">Cursos</Link>  <Link to="/contato">Contato</Link>
       </nav>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Cursos" element={<Cursos />} />
         <Route path="/contato" element={<Contato />} />
       </Routes>
     </BrowserRouter>
   );
 }
