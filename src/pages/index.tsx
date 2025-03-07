import { Hero, About, Service, Technology, Contact, Client, Product, Solution, Team, Partnership } from '@/components/Chunks/Home'
import { Footer } from '@/components/Footer'
const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Partnership/>
      <Solution />
      <Product />
      <Technology />
      <Client />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default LandingPage
