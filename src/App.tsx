import { useState } from "react";
import "./App.css";
import CaltenPayment from "./components/CaltenPayment";

function App() {
  const [ticketCount, setTicketCount] = useState(1); // Default to 1 ticket
  const ticketPrice = 50; // Assuming the price is always $50 MXN
  const [name, setName] = useState(''); // Default to 1 ticket
  const [email, setEmail] = useState(''); 
  const [reference, setReference] = useState(1);
  const [paid, setPaid] = useState(false); // Default to 1 ticket


  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setName(e.currentTarget.value);
  };
  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setEmail(e.currentTarget.value);
  };

  const getReferenceOnSubmit = async () => {
    const formedData = {
      "name": name,
      "email": email,
      "numberOfTickets": ticketCount
    }
    const backendHost = 'http://127.0.0.1:3001';
    const response = await fetch(`${backendHost}/api/postPaymentReference`, {
      method: "POST",
      headers: {
          //'Authorization': this.props.authHeader(), 
          'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(formedData),
    });
    const responsejson = await response.json();
    setReference(responsejson.reference);
    return responsejson.reference;
  }

  const getResultOnClose = async () => {
    const backendHost = 'http://127.0.0.1:3001';
    const response = await fetch(`${backendHost}/api/getPaymentResult?reference=${reference}`, {
      method: "get",
      headers: {
          //'Authorization': this.props.authHeader(), 
          'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const responsejson = await response.json();
    setPaid(responsejson.paid);
    console.log(responsejson.paid)
  }

  const getPayingUi = () => {
    if(paid){
      return(
        <h1>Gracias por tu pago</h1>
      )
    }
    else{
      return(
        <CaltenPayment 
          totalAmount={ticketCount*ticketPrice} 
          reference={getReferenceOnSubmit} 
          concept={'Compra de boletos de '+name+email}
          onClose={getResultOnClose} 
        />
      )
    }
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
          <br></br>
          <label style={{ width: "100%" }}>
            Nombre: <input name="myInput" style={{ width: "100%" }} onChange={handleNameChange}/>
          </label>
          <label style={{ width: "100%" }}>
            email: <input name="myInput" style={{ width: "100%" }} onChange={handleEmailChange}/>
          </label>
        </p>
       {getPayingUi()}
      </div>
    </>
  );
}

export default App;
