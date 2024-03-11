import { useState } from "react";
import NewWindow from 'react-new-window'

export default function CaltenPayment(props:  {
  totalAmount: number, 
  reference: () => Promise<number>, 
  concept: string,
  onClose: () => Promise<void>,
}) 
  {
  const [paymentUrl, setPaymentUrl] = useState('https://checkout.calten.com.mx/checkout');
  const [paying, setPaying] = useState(false);

  const handlePopUpClose = () => {
    console.log('cerrado');
    props.onClose();
  };

  const handleButtonClick = async () => {
    const baseUrl = "https://checkout.calten.com.mx/checkout";
    const totalAmount = props.totalAmount;
    const reference = await props.reference();
    console.log(reference)

    const queryParams = new URLSearchParams({
      reference: reference.toString(),
      concept: props.concept,
      amount: totalAmount.toString(),
      beneficiaryName: "AGIT SRL DE CV",
      beneficiaryBank: "40997",
      beneficiaryAccountType: "40",
      beneficiaryAccount: "997000000000144354",
      commerceCertification: "00000100000100015341",
      callback: "https://calten-raffle-back.vercel.app/api/putPaymentResult",
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
