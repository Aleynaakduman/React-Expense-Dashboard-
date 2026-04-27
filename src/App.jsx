
import './App.css'
// import Container from '@mui/material/Container';
// import Table from "./pages/Table"
// import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { BrowserRouter } from 'react-router-dom';
function App() {
 
  return (
    <>
    <BrowserRouter>
     <Sidebar/>
    </BrowserRouter>
   
    </>
  )
}

export default App
