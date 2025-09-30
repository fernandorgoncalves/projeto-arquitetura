import "./ContactForm.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

function ContactForm() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmitLoading, setFormSubmitLoading ] = useState(false)
  const [formSubmitted, setformSubmitted] = useState({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      setFormSubmitLoading(true)
      try{
        const response = await fetch('https://api.web3forms.com/submit',{
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...formData, access_key: "d3dc1147-e00e-4d8c-9f1e-74299924304f"})
        })
        if(response.ok){
          setformSubmitted(true)
        }else{
          alert('Erro ao enviar!')
        }
      }catch(e){
        alert('Erro: ',e)
      }finally{
        setFormSubmitLoading(false)
      }
    }
  };

  useEffect(() => {
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const isValid =
      formData.name.trim() &&
      formData.email.trim() &&
      isValidEmail(formData.email) &&
      formData.message.trim();

    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-form d-flex fd-collumn al-center">
      <h2>We love meeting new people and helping them.</h2>
      <form onSubmit={handleSubmit}>
        <div className="d-flex form-group">
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            placeholder="Name *"
            onChange={handleChange}
          />
          <input
            type="email"
            className="form-input"
            name="email"
            id="email"
            placeholder="Email *"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex form-group">
          <textarea
            className="form-input"
            name="message"
            id="message"
            placeholder="Mensagem *"
            rows="4"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="al-center d-flex jc-end form-group">
          <div>
            
            <Button
              type="submit"
              buttonStyle="secondary"
              disabled={!isFormValid || formSubmitLoading}
            >
              Enviar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
