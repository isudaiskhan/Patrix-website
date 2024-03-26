import Companies from "./Companies/Companies";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import Form from "./Form/Form";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Portfolio from "./Portfolio/Portfolio";
import Servicess from "./Servicess/Servicess";
import Testimonials from "./Testimonials/Testimonials";

function App() {
  return (
   <>

     <Navbar />
     <Hero />
     <Companies />
     <Servicess />
     <Testimonials />
     <Faq />
     <Portfolio />
     <Form />
     <Footer />
    
   </>
  );
}

export default App;
