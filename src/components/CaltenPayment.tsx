import { useState } from "react";
import NewWindow from 'react-new-window'

export default function CaltenPayment(props:  {totalAmount: number}) {
  const [paymentUrl, setPaymentUrl] = useState('https://checkout.calten.com.mx/checkout');
  const [paying, setPaying] = useState(false);

  const handlePopUpClose = () => {
    console.log('cerrado');
    setPaying(false);
  };

  const handleButtonClick = () => {
    const baseUrl = "https://checkout.calten.com.mx/checkout";
    const totalAmount = props.totalAmount;

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
    setPaymentUrl(fullUrl);
    setPaying(true);
  };
  return (
    <>
      <button className="cool-button" onClick={handleButtonClick}>
            Paga con Calten
      </button>
      {paying && <NewWindow url={paymentUrl} onUnload={handlePopUpClose}/>}
    </>
  )
}
