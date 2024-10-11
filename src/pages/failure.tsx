import CaltenLinks from "../components/CaltenLinks";
import { 
  Button, 
  Typography, 
  List, 
  ListItem, 
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
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            style={{ 
              width: "80%", 
              maxWidth: '250px', 
              margin: '0px', 
              transition: 'width 0.3s ease-in-out' 
            }} 
            src={caltenLogo} 
            alt="Logo" 
          />
        </div>
        <br/>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Tu pago no pudo ser procesado
        </Typography>
        <br/>
        <div className="container">
        <Typography variant="body1" style={{ letterSpacing: "1px" }}>
          Tu pago presentó un error al ser procesado, los errores mas comunes son:
          <List>
          <ListItem >
              <ListItemIcon>
                <ErrorIcon />
              </ListItemIcon>
              <ListItemText primary="Tu celular no esta registrado en CoDi" />
          </ListItem>
          <ListItem >
              <ListItemIcon>
                <ErrorIcon />
              </ListItemIcon>
              <ListItemText primary="El mensaje de pago no fue aceptado" />
          </ListItem>
          </List>
        </Typography>
        </div>
        <Button
          sx={{ mt: 2, mb: 6, textTransform: "none", fontSize: "18px" }}
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