import { About } from './routes/About'
import { Home } from './routes/Home'
// import Login from './common/Login'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Pricing } from './routes/Pricing'
import { Contact } from './routes/Contact'
import Login from './common/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Pricing" element={<Pricing />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Auth" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
