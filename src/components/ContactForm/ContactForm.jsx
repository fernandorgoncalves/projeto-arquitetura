import "./ContactForm.css";
import Button from "../Button/Button";

function ContactForm() {
  return (
    <div className="contact-form d-flex fd-collumn al-center">
      <h2>We love meeting new people and helping them.</h2>
      <form>
        <div className="d-flex form-group">
          <input 
          type="text"
          className="form-input"
          name="name"
          id="name"
          placeholder="Name *"
          />
          <input 
          type="email"
          className="form-input"
          name="email"
          id="email"
          placeholder="Email *"
          />

        </div>
        <div className="d-flex form-group">
          <textarea 
          className="form-input"
          name="message" 
          id="message"
          placeholder="Mensagem *"
          rows="4"
          ></textarea>
        </div>
        <div className="al-center d-flex jc-end form-group">
          <div>
            <Button type="submit" buttonStyle="secondary" >
              Enviar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
