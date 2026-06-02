import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Access from './pages/Access'
import Layout from './Layout'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="access" element={<Access />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
