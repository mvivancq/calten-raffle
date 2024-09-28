import CaltenLinks from "../components/CaltenLinks";
import { 
  Button, 
  Typography, 
  List, 
  ListItem, 
  Link, 
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
  const date = '15 de Octubre';
  const time = '7 pm (Hora CDMX)';

  return (
    <>
      <div className="landing-page">
        <div className="container">
          <img style={{ width: "60%", margin: '0px' }} src={caltenLogo} alt="Logo" />
        </div>
        <br/>
        <div className="container" >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
            Gracias por tu participación {name}
          </Typography>
          <Typography variant="h5" style={{ letterSpacing: "1px" }}>
            Información importante acerca de la Rifa
            <List>
              <ListItem >
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Premio: Apple Airpods" />
              </ListItem>
              <ListItem >
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary={`Fecha de sorteo: ${date}`} />
              </ListItem>
              <ListItem >
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary={`Hora del sorteo: ${time}`} />
              </ListItem>
              <ListItem >
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary={
                  <>
                    Medio: Live desde nuestro Instagram {} 
                    <Link href="https://www.instagram.com/calten.mx" target="_blank" rel="noopener">
                     @calten.mx
                    </Link>
                  </>
                } />
              </ListItem>
              <ListItem >
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary={`Recibiras un correo de confirmacion a ${email}`} />
              </ListItem>
            </List>
          </Typography>
        </div>
        <div className="container">
          <Button
            sx={{ mt: 4, textTransform: "none", fontSize: "18px", width:'100%' }}
            variant="contained"
            href='https://forms.gle/iU8bqKBETd5rtr2FA'
            size="large"
          >
            Ayúdanos a mejorar con esta breve encuesta
          </Button>
          <Button
            sx={{ mt: 4, mb: 4, textTransform: "none", fontSize: "18px", width:'100%' }}
            variant="outlined"
            href='/'
            size="large"
          >
            Regresar al inicio
          </Button>
        </div>
        <CaltenLinks />
      </div>
    </>
  );
}

export default SuccessPage;