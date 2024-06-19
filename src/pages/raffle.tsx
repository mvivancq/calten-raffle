import { useState } from "react";
import apiRaffle from "../api/raffleapi";

function RafflePage() {
  const [ticketCount, setTicketCount] = useState(1); // Default to 1 ticket
  const ticketPrice = 50; // Assuming the price is always $50 MXN
  const [name, setName] = useState(''); // Default to 1 ticket
  const [email, setEmail] = useState(''); 

  
  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setName(e.currentTarget.value);
  };
  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setEmail(e.currentTarget.value);
  };

  const handleButtonClick = async () => {
    const formedData = {
      "name": name,
      "email": email,
      "numberOfTickets": ticketCount,
    }
    const resultDetails = await apiRaffle.requestPaymentReference(formedData);
    console.log(resultDetails)
    window.location.href = `https://calten-frontend.vercel.app/checkout/${resultDetails}`
  }

  const plural = ticketCount > 1
  return (
    <>
      <div className="landing-page">
        <h1>Participa en la rifa de Calten</h1>
        <h3 style={{ letterSpacing: "1px" }}>
          Ayudanos a mejorar nuestra experiencia de pago
        </h3>
        <br />
        <div className="container">
          <img style={{ width: "100%" }} src='../public/calten.png' alt="Logo" />
        </div>
        <p>
          Costo del boleto: <strong>${ticketPrice} MXN</strong> - Quiero comprar
          <select
            value={ticketCount}
            onChange={(e) => setTicketCount(Number(e.target.value))}
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            {[...Array(10).keys()].map((number) => (
              <option key={number} value={number + 1}>
                {number + 1}
              </option>
            ))}
          </select>
          boleto{plural ? 's' : ''}
          <br></br>
          <label style={{ width: "100%" }}>
            Nombre: <input name="myInput" style={{ width: "100%" }} onChange={handleNameChange}/>
          </label>
          <label style={{ width: "100%" }}>
            email: <input name="myInput" style={{ width: "100%" }} onChange={handleEmailChange}/>
          </label>
        </p>
      <button className="cool-button" onClick={handleButtonClick}>
            Paga con Calten
      </button>
      </div>
    </>
  );
}

export default RafflePage;