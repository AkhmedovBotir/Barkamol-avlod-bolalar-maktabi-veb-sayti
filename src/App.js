import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Life from "./pages/Life"
import Press from "./pages/Press"
import Contact from "./pages/Contact"
import Maqsad from './components/AboutBody/maqsad'
import Tashkiliy from './components/AboutBody/tashkiliy'
import Hodimlar from './components/AboutBody/xodim/index'
import Bolimbosh from './components/AboutBody/xodim/bolimbosh'
import Togarak from './components/AboutBody/xodim/togarakrahbar'
import Sovrindor from './components/Life/haqida'
import Togaraklar from './components/Life/maqsad'
import Tuman from './components/Life/tashkiliy'
import TumanWeb from './components/Life/veb'
import NoPage from "./pages/NoPage"
import ScrollButton from './components/Scroll/btn';
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* uz root */}
          <Route path="/" index element={<Home />} />
          <Route path="/biz-haqimizda" element={<About />} />
          <Route path="/maqsad-va-vazifalar" element={<Maqsad />} />
          <Route path="/rahbariyat" element={<Hodimlar />} />
          <Route path="/bo'lim-boshliqlari" element={<Bolimbosh />} />
          <Route path="/to'garak-rahbarlari" element={<Togarak />} />
          <Route path="/tashkiliy-tuzilma" element={<Tashkiliy />} />
          <Route path="/iqtidorli-o'quvchilar" element={<Life />} />
          <Route path="/sovrindorlar" element={<Sovrindor />} />
          <Route path="/to'garaklar" element={<Togaraklar />} />
          <Route path="/tuman-babm" element={<Tuman />} />
          <Route path="/tuman-veb-saytlari" element={<TumanWeb />} />
          <Route path="/matbuot-hizmati" element={<Press />} />
          <Route path="/aloqa" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>
      <ScrollButton />
    </div>
  );
}

export default App;
