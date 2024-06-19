import CaltenLinks from "../components/CaltenLinks";
import { 
  Button, 
  Typography, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText 
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function SuccessPage() {

  return (
    <>
      <div className="landing-page">
        <br />
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Listo
        </Typography>
        <Typography variant="h5" style={{ letterSpacing: "1px", width: "50%" }}>
         Gracias por tu participación
        </Typography>
        <div className="container">
          <img style={{ width: "80%" }} src='../public/calten.png' alt="Logo" />
        </div>
        <div className="container">
        <Typography variant="h5" style={{ letterSpacing: "1px" }}>
          Tu pago se procesó correctamente
          <List>
          <ListItem >
            <ListItemButton href='/'>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Ayudanos con la siguiente encuesta" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Siguenos en nuestas redes" />
            </ListItemButton>
          </ListItem>
          </List>
        </Typography>
        </div>
        <Button
          sx={{ mt: 6, mb: 6, textTransform: "none", fontSize: "18px" }}
          variant="contained"
          href='/'
          size="large"
        >
          Regresar al inicio
        </Button>
        <CaltenLinks />
      </div>
    </>
  );
}

export default SuccessPage;