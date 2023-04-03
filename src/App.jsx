import { About } from './routes/About'
import { Home } from './routes/Home'
// import Login from './common/Login'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Pricing } from './routes/Pricing'
import { Contact } from './routes/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Pricing" element={<Pricing />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
