import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import Home from "./pages/Home"
import About from "./pages/About"
import AddNewProduct from "./pages/AddNewProduct"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Faq from './pages/Faq'


function App() {
 

  return (
    <>

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/elan' element={<AddNewProduct/>}></Route>
        <Route path='/haqqimizda' element={<About/>} ></Route>
        <Route path='/faq' element={<Faq/>}></Route>
      </Routes>


      <Footer/>      
    </BrowserRouter>



    </>
  )
}

export default App
