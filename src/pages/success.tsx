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
import caltenLogo from "../assets/images/logo/calten.png";
import { useSearchParams } from "react-router-dom";

function SuccessPage() {
  const [queryParams] = useSearchParams();
  const name = queryParams.get('name');
  const email = queryParams.get('email') || 'tu correo';

  return (
    <>
      <div className="landing-page">
        <br />
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Pago aceptado
        </Typography>
        <Typography variant="h5" style={{ letterSpacing: "1px", width: "50%" }}>
          Gracias por tu participación {name}
        </Typography>
        <div className="container">
          <img style={{ width: "80%" }} src={caltenLogo} alt="Logo" />
        </div>
        <div className="container">
        <Typography variant="h5" style={{ letterSpacing: "1px" }}>
          Pronto recibiras un correo de confirmación a {email}
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