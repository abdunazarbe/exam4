
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header'
import Layout from './components/Layout/intro'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Flowers from './Pages/Flowers'
import Plants from './Pages/Plants'
import NoPage from './Pages/NoPage'
import Discount from './Pages/Discount/single'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flowers" element={<Flowers />} />
        <Route path="plants" element={<Plants />} />
        <Route path="flowers/:id" element={<Discount />} />
        
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App