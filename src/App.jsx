
import './App.css'

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { BrowserRouter } from 'react-router-dom';
import Table from "./pages/Table"
function App() {
 
  return (
    <>
    <BrowserRouter>
    <div className="app-container">
       <Sidebar/>
        
    
    
        <div className="main-container">
      <Navbar/>
      
      <div className="page-container">
         <Table/>
      </div>

       
       
     </div>



     
    </div>
    

    
    </BrowserRouter>
   
    </>
  )
}

export default App
