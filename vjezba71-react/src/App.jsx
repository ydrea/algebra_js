import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const App = () => {
  const initalState = { user: "", email: "", pass: "" };
  const [formValues, setFormValues] = useState(initalState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(validate(formValues)).length === 0) {
      emailjs
        .sendForm("service_ryc3x6k", "template_4aedxey", form.current, {
          publicKey: "WEmu56w5cCsRuO63q",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            handleFormReset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const handleFormReset = () => {
    setFormErrors({});
    setFormValues(initalState);
    setIsSubmit(false);
  };

  const validate = (v) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!v.user) {
      errors.user = "Korisničko ime nije ispravno upisano";
    }
    if (!v.email) {
      errors.email = "E-mail polje ne može ostati prazno";
    } else if (!regex.test(v.email)) {
      errors.email = "Niste unijeli ispravnu e-mail adresu";
    }
    if (!v.pass) {
      errors.pass = "Ovo polje ne može ostati prazno";
    } else if (v.pass.length < 6) {
      errors.pass = "Lozinka mora imati više od 6 znakova";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <p className="title">Uspjeh</p>
      ) : (
        <p className="title">Ispunite formu</p>
      )}
      <form onSubmit={handleSubmit} ref={form}>
        <h1>Login forma</h1>
        <hr />
        <div className="form">
          <label>User Name</label>
          <input
            type="text"
            name="user"
            placeholder="Username"
            value={formValues.user}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.user}</p>
        <div className="form">
          <label>E-mail</label>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div className="form">
          <label>Password</label>
          <input
            type="password"
            name="pass"
            placeholder="Password"
            value={formValues.pass}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.pass}</p>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default App;
