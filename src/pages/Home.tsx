import { Suspense, lazy } from 'react'
import {
  Architecture,
  Earlyaccess,
  Problem,
  Secure,
  Solution,
  Tamper,
  Vision,
} from '../components/import'

const Hero = lazy(() => import('../components/Hero'))

const Home = () => {
  return (
    <div className="">
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <Earlyaccess />
      <Problem />
      <Tamper />
      <Solution />
      <Secure />
      <Vision />
      <Architecture />
    </div>
  )
}

export default Home
