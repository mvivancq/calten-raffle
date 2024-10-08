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
  const time = '7:00 PM (Hora CDMX)';

  return (
    <>
      <div className="landing-page">
        {/* Logo Container */}
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
            Gracias por tu participación {name}
          </Typography>
          <Typography variant="body1" style={{ letterSpacing: "1px", marginBottom: '6px' }}>
            Información importante sobre el sorteo:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Premio: Apple AirPods" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary={`Fecha de sorteo: ${date}`} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary={`Hora del sorteo: ${time}`} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary={
                <>
                  Anuncio del ganador: Instagram Live en {} 
                  <Link href="https://www.instagram.com/calten.mx" target="_blank" rel="noopener">
                    @calten.mx
                  </Link>
                </>
              } />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary={`Recibirás un correo de confirmación a ${email}`} />
            </ListItem>
          </List>
        </div>

        {/* Buttons Container */}
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px'}}>
          <Button
            sx={{ textTransform: "none", fontSize: "16px", width: '100%', padding: '12px',  paddingLeft: '50px', paddingRight: '50px'  }}
            variant="contained"
            href='https://forms.gle/iU8bqKBETd5rtr2FA'
            size="large"
          >
            Contesta la encuesta
          </Button>
          <Button
            sx={{ textTransform: "none", fontSize: "16px", width: '100%', padding: '12px' }}
            variant="outlined"
            href='/'
            size="large"
          >
            Regresa al inicio
          </Button>
        </div>
<br></br>
        <CaltenLinks />
      </div>
    </>
  );
}

export default SuccessPage;
