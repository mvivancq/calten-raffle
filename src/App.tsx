import { useState } from "react";
import "./App.css";

function App() {
  const [ticketCount, setTicketCount] = useState(1); // Default to 1 ticket
  const ticketPrice = 50; // Assuming the price is always $50 MXN

  const handleButtonClick = () => {
    const baseUrl = "https://checkout.calten.com.mx/checkout";
    const totalAmount = ticketPrice * ticketCount; // Calculate total amount based on the number of tickets

    const queryParams = new URLSearchParams({
      reference: "2",
      concept: encodeURIComponent("Compra boletos"),
      amount: totalAmount.toString(),
      beneficiaryName: encodeURIComponent("AGIT SRL DE CV"),
      beneficiaryBank: "40997",
      beneficiaryAccountType: "40",
      beneficiaryAccount: "997000000000144354",
      commerceCertification: "00000100000100015341",
    });

    const fullUrl = `${baseUrl}?${queryParams.toString()}`;
    console.log("Navigating to:", fullUrl);
    window.open(fullUrl, "_blank");
  };
  const plural = ticketCount > 1
  return (
    <>
      <div className="landing-page">
        <h1>Participa en la rifa de Calten</h1>
        <h3 style={{ letterSpacing: "1px" }}>
          Ayudanos a mejorar nuestra plataforma
        </h3>
        <br />
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
        <button className="cool-button" onClick={handleButtonClick}>
          Comprar Boleto{plural ? 's' : ''}
        </button>
      </div>
    </>
  );
}

export default App;
