import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LanguageIcon from '@mui/icons-material/Language';
import { Stack } from "@mui/material";


function CaltenLinks() {

  return (
    <>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <a href={'https://calten-mx-sitio-webflow.webflow.io/'} target="_blank">
                <LanguageIcon color="secondary" fontSize="large"/>
            </a>
            <a href={'https://www.facebook.com/calten.mx'} target="_blank">
                <FacebookIcon color="secondary" fontSize="large"/>
            </a>
            <a href={'https://www.linkedin.com/company/calten/'} target="_blank">
                <LinkedInIcon color="secondary" fontSize="large"/>
            </a>
            <a href={'https://www.youtube.com/@caltenmx'} target="_blank">
                <YouTubeIcon color="secondary" fontSize="large"/>
            </a>
            <a href={'mailto:caltenmx@gmail.com'} target="_blank">
                <EmailIcon color="secondary" fontSize="large"/>
            </a>
            <a href={'https://wa.me/+525579762454'} target="_blank">
                <WhatsAppIcon color="secondary" fontSize="large"/>
            </a>
        </Stack>
    </>
  );
}

export default CaltenLinks;