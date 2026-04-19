import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar   from './components/Navbar'
import Footer   from './components/Footer'
import Home         from './pages/Home'
import About        from './pages/About'
import Rooms        from './pages/Rooms'
import Dining       from './pages/Dining'
import Food         from './pages/Food'
import Gallery      from './pages/Gallery'
import Contact      from './pages/Contact'
import Tariff       from './pages/Tariff'
import DayAtFarmPage from './pages/DayAtFarmPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/about"         element={<About />} />
        <Route path="/rooms"         element={<Rooms />} />
        <Route path="/dining"        element={<Dining />} />
        <Route path="/food"          element={<Food />} />
        <Route path="/gallery"       element={<Gallery />} />
        <Route path="/contact"       element={<Contact />} />
        <Route path="/tariff"        element={<Tariff />} />
        <Route path="/day-at-byool-farm" element={<DayAtFarmPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
