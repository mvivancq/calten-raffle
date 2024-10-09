import { useState } from "react";
import apiRaffle from "../api/raffleapi";
import { Button, TextField, Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText  } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import CaltenLinks from "../components/CaltenLinks";
import caltenLogo from "../assets/images/logo/calten.png";
import codiLogo from "../assets/images/logo/codi.png";
import { useSearchParams } from "react-router-dom";
import { MoonLoader } from "react-spinners"; 
import toast from "react-hot-toast";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


function RafflePage() {
  const [queryParams] = useSearchParams();
  const tickets = Number(queryParams.get('tickets')) || 1;
  const [payementEnabled, setPaymentEnabled] = useState(true);
  const [ticketCount, setTicketCount] = useState(tickets); // Default to 1 ticket
  const ticketPrice = 50; // Assuming the price is always $50 MXN
  const name = queryParams.get('name');
  const email = queryParams.get('email');
  const error = queryParams.get('error');
  const message = 'Ayúdanos a mejorar nuestra experiencia de pago';
  const displayMessage = error || message;
  const date = '15 de Octubre';
  const time = '7:00 PM (CDMX)';

  const formik = useFormik({
    initialValues: {
      name: name || "",
      email: email || "",
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
    setPaymentEnabled(false);
    try{
      const resultDetails = await apiRaffle.requestPaymentReference(formedData);
      setPaymentEnabled(true);
      window.location.href = `${import.meta.env.VITE_CALTEN_UI}/${resultDetails}`
    }catch {
      setPaymentEnabled(true);
      toast.error('ERROR: Ocurrió un error al generar el cobro, vuelve a intentarlo');
    }
  }

  const plural = ticketCount > 1
  return (
    <>
      <div className="landing-page">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            style={{ 
              width: "85%", 
              maxWidth: '250px', 
              margin: '0px', 
              transition: 'width 0.3s ease-in-out' 
            }} 
            src={caltenLogo} 
            alt="Logo" 
          />
        </div>

        <div className="container" style={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Participa en la rifa de Calten
          </Typography>
          <Typography 
            variant="body1" 
            style={{ 
              letterSpacing: "1px", 
              whiteSpace: 'nowrap', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              fontSize: 'clamp(14px, 2vw, 16px)' 
            }}
          >
            {displayMessage}
          </Typography>

                
        </div>

        <div className="list-container">
        <List >
            <ListItem>
              <ListItemIcon style={{ minWidth: 30}}>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary="Premio: Apple AirPods"  />
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ minWidth: 30}}>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary={`Sorteo: ${date} - ${time}`} />
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ minWidth: 30}}>
                <ArrowCircleRightIcon />
              </ListItemIcon>
              <ListItemText primary={`Costo del boleto: ${ticketPrice} MXN`} />
            </ListItem>
          </List>
          </div>
        <p>
        <Typography variant="h5" style={{ letterSpacing: "1px"}}>
        <strong>Quiero comprar<select
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
          boleto{plural ? 's' : ''} </strong> 
          <br></br>
          </Typography>
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
          sx={{ 
            mt: 3, 
            mb: 3, 
            textTransform: "none", 
            fontSize: "18px", 
            fontWeight: "bold"
          }}
          variant="contained"
          fullWidth
          type="submit"
          size="large"
          disabled={!payementEnabled}
          endIcon={
            <>
              <img 
                src={codiLogo}
                alt="CoDi Logo" 
                style={{ width: '32px', height: '32px' }}
              />
              <MoonLoader color="#5F5F5F" size={14} loading={!payementEnabled} speedMultiplier={0.65}/>
            </>
          }
        >
          Paga con
        </Button>
                </form>
      <CaltenLinks />

      
      </div>
    </>
  );
}

export default RafflePage;