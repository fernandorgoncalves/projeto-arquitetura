import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useContext } from "react";
//CONTEXT
import { AppContext } from "../context/AppContext";


function Contact() {
  const appContext = useContext(AppContext);
    return(
        <>        
      <Header />
      <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.svg" />
      <div className="container">
        <ContactForm />
      </div>
      <Footer />

        </>
    )
}
export default Contact;