import Hero from './Sections/Hero';
import PopularProducts from './Sections/PopularProducts';
import SuperQuality from './Sections/SuperQuality';
import Services from './Sections/Services';
import SpecialOffers from './Sections/SpecialOffers';
import CustomerReviews from './Sections/CustomerReviews';
import Subscribe from './Sections/Subscribe';
import Nav from './Components/Nav';
import Footer from './Components/Footer'

function App() {

  return (
    <main>
      <Nav/>
      <Hero/>
      <PopularProducts/>
      <SuperQuality/>
      <Services/>
      <SpecialOffers/>
      <CustomerReviews/>
      <Subscribe/>
      <Footer/>
    </main>
  )
}

export default App
