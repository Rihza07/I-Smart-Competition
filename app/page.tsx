import Header from './components/Header'
import Hero from './components/Hero'
import Guest from './components/Guest'
import Footer from './components/Footer'
import Guidebook from './components/Guidebook'
import Competition from './components/Competition'
import Timeline from './components/Timeline'
import Quest from './components/Quest'


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Guest/>
      <Guidebook/>
      <Competition/>
      <Timeline/>
      <Quest/>
      <Footer />
    </>
  )
}
