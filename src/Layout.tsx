import { Outlet } from 'react-router-dom'
import { Footer } from './components'

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
