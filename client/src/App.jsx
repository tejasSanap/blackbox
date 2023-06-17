import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Auth from './screens/Auth';
import Home from './screens/Home';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth/>}/>
        <Route path = "/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
