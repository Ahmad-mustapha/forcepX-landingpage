import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Access from './pages/Access'
import Layout from './Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="access" element={<Access />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
