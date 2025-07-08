import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Home() {
    return(
        <>
        <Header />
        <h1>Home</h1>
        <p>Subtitle</p>
        <Button buttonStyle="primary" arrow>Olá</Button>
        <Footer/>
        </>
    )
}
export default Home;