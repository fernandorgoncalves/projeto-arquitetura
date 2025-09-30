import "./ContactForm.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { useContext } from "react";
//CONTEXT
import { AppContext } from "../../context/AppContext";


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

    const appContext = useContext(AppContext);

  return (
    <div className="contact-form d-flex fd-collumn al-center">
      <h2>{appContext.languages[appContext.language].contact.title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="d-flex form-group">
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            placeholder={appContext.languages[appContext.language].contact.pl1}
            onChange={handleChange}
          />
          <input
            type="email"
            className="form-input"
            name="email"
            id="email"
            placeholder={appContext.languages[appContext.language].contact.pl2}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex form-group">
          <textarea
            className="form-input"
            name="message"
            id="message"
            placeholder={appContext.languages[appContext.language].contact.pl3}
            rows="4"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="al-center d-flex jc-end form-group">
          <div>
            {formSubmitted && <p className="text-primary">{appContext.languages[appContext.language].contact.sucessMsg}</p>}
            <Button
              type="submit"
              buttonStyle="secondary"
              disabled={!isFormValid || formSubmitLoading}
            >
              {appContext.languages[appContext.language].general.send}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
