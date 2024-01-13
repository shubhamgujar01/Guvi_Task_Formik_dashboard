import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from './components/Books';
import Authors from './components/Authors';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
            <Route path='/author' element={<Authors />} />
           </Routes>
       
      </BrowserRouter>

    </>
  );
}

export default App;
