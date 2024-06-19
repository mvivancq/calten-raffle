import { useState } from "react";
import apiRaffle from "../api/raffleapi";
import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import CaltenLinks from "../components/CaltenLinks";
import caltenLogo from "../assets/images/logo/calten.png";

function RafflePage() {
  const [ticketCount, setTicketCount] = useState(1); // Default to 1 ticket
  const ticketPrice = 50; // Assuming the price is always $50 MXN

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        //.matches(/^\d{10}$/, 'El número de teléfono debe tener exactamente 10 dígitos')
        .required('El nombre es obligatorio'),
      email: Yup.string()
        //.matches(/^\d{10}$/, 'El número de teléfono debe tener exactamente 10 dígitos')
        .required('El email es obligatorio'),
      }),
    onSubmit: (values) => {
      console.log(values);
      handleButtonClick(values.name, values.email);
    },
  });

  const handleButtonClick = async (name: string, email: string) => {
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
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Participa en la rifa de Calten
        </Typography>
        <Typography variant="h5" style={{ letterSpacing: "1px" }}>
          Ayudanos a mejorar nuestra experiencia de pago
        </Typography>
        <div className="container">
          <img style={{ width: "80%" }} src={caltenLogo} alt="Logo" />
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
        </p>
        <form onSubmit={formik.handleSubmit} style={{ marginLeft: "10px", marginRight: "10px" }}>
        <TextField
          id="name"
          name="name"
          fullWidth
          margin="dense"
          label="Nombre"
          variant="outlined"
          type="name"
          sx={{ mt: 3 }}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)} // Add this line
          helperText={formik.touched.name && formik.errors.name} // Add this line
        />
        <TextField
          id="email"
          name="email"
          fullWidth
          margin="dense"
          label="Email"
          variant="outlined"
          type="email"
          sx={{ mb: 1}}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)} // Add this line
          helperText={formik.touched.email && formik.errors.email} // Add this line
        />
        <Button
          sx={{ mt: 3, mb: 3, textTransform: "none", fontSize: "18px" }}
          variant="contained"
          fullWidth
          type="submit"
          size="large"
        >
          Paga con Calten
        </Button>
        </form>
      <CaltenLinks />
      </div>
    </>
  );
}

export default RafflePage;