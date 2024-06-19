import FacebookIcon from '@mui/icons-material/Facebook';

function SuccessPage() {

  return (
    <>
      <div className="landing-page">
        <br />
        <div className="container">
          <img style={{ width: "80%" }} src='../public/calten.png' alt="Logo" />
        </div>
        <h1>Gracias por tu paticipación!!!</h1>
        <h3 style={{ letterSpacing: "1px" }}>
          En seguida recibiras un email con la confirmación de tus boletos
        </h3>
        <a href='/'>
          <button style={{ margin: "30px" }} className="cool-button">
            Regresar al inicio
          </button>
        </a>
        <div>
          <FacebookIcon color="secondary" fontSize="large"/>
        </div>
      </div>
    </>
  );
}

export default SuccessPage;