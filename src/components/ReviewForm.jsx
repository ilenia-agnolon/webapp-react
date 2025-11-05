// import axios
import axios from "axios";

// import state react
import { useState } from "react";

//componente ReviewForm
const ReviewForm = ({ idProp, reloadReviews }) => {
  // imposto valore iniziale dell'oggetto dei campi form
  const initialValues = {
    name: "",
    text: "",
    vote: "",
  };

  //imposto stato del componente
  const [formData, setFormData] = useState(initialValues);

  //funzione di gestione valori dei campi
  const setFieldValue = (event) => {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //creo la url corretta dell'endpoint richiesta
  const apiUrl = `http://localhost:3000/api/movies/${idProp}/reviews`;

  // funzione invio dati
  const handleSubmit = (event) => {
    // preveniamo invio form
    event.preventDefault();

    const payload = {
      ...formData,
      vote: parseInt(formData.vote, 10),
    };
    // chiamata per store review
    axios
      .post(apiUrl, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        // imposto il form a valori iniziali
        setFormData(initialValues);
        // richiamo la funzione di chiamata sul componente padre
        reloadReviews?.();
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="new-review-container">
      <h5>Add your review</h5>
      <form onSubmit={handleSubmit}>
        {/* Nome autore */}
        <div className="form-section">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Il tuo nome"
            value={formData.name}
            onChange={setFieldValue}
            required
          />
        </div>

        {/* Testo recensione */}
        <div className="form-section">
          <label htmlFor="text">Review</label>
          <textarea
            id="text"
            name="text"
            placeholder="Write your review…"
            value={formData.text}
            onChange={setFieldValue}
            required
          />
        </div>

        {/* Voto */}
        <div className="form-section">
          <label htmlFor="vote">Vote (1–5)</label>
          <input
            id="vote"
            name="vote"
            type="number"
            min="1"
            max="5"
            step="1"
            placeholder="5"
            value={formData.vote}
            onChange={setFieldValue}
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ReviewForm;
