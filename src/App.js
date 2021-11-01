import React from 'react'
import MOdal1 from './modal/Modal'
import Navbar from './pageheader/PageHeader';
import Footer from './footer/Footer';
import 'antd/dist/antd.css';
import Home from './Components/Home';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
