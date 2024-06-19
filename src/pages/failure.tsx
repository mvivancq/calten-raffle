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
import ErrorIcon from '@mui/icons-material/Error';
import caltenLogo from "../assets/images/logo/calten.png";

function FailurePage() {

  return (
    <>
      <div className="landing-page">
        <br />
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Error
        </Typography>
        <Typography variant="h5" style={{ letterSpacing: "1px", width: "50%" }}>
          Tu pago no pudo ser procesado
        </Typography>
        <div className="container">
          <img style={{ width: "80%" }} src={caltenLogo} alt="Logo" />
        </div>
        <div className="container">
        <Typography variant="h5" style={{ letterSpacing: "1px" }}>
          Tu pago presentó un error al ser procesado, los errores mas comunes son:
          <List>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <ErrorIcon />
              </ListItemIcon>
              <ListItemText primary="Tu celular no esta registrado en CoDi" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <ErrorIcon />
              </ListItemIcon>
              <ListItemText primary="El mensaje de pago no fue aceptado" />
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

export default FailurePage;