import { useState } from "react";
import "./App.css";
import CaltenPayment from "./components/CaltenPayment";

function App() {
  const [ticketCount, setTicketCount] = useState(1); // Default to 1 ticket
  const ticketPrice = 50; // Assuming the price is always $50 MXN

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
          Costo del boleto: <strong>$50 MXN</strong> - Quiero comprar
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
        </p>
        <CaltenPayment totalAmount={ticketCount*ticketPrice}/>
      </div>
    </>
  );
}

export default App;
