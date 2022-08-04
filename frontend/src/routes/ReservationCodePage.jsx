
import '../static/style/reservationPage.css'
import {createTheme, Typography} from '@mui/material';
import ReservationCodeField from "../components/ReservationCodeField";
import { Box } from '@mui/material';
import { responsiveFontSizes,  ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { alpha } from "@mui/material/styles";
import TicketInfoTest from '../components/TicketInfoTest';
export default function ReservationCodePage() {

    

    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    return (
        <ThemeProvider theme={theme}>
            
 <Box mt={3} pt={5}  className = "reservationCodeBackground" > 

            <Grid container spacing={4} m="auto">
            <Grid item xs>
                
            </Grid>
            <Grid item xs={7}>
            <Typography variant="h3"  color="#fdfdfd"  sx={{  textShadow:"2px 2px 6px black", display: 'flex', flexGrow: '3', flexDirection: 'width' ,marginTop: '5vh', marginRight:'3vh'}}>
                        Extend Your Journey with Turkish Airlines Trip Booster
                    </Typography> 
                   
                
            </Grid>
            <Grid item xs>
                
            </Grid>
            </Grid>

            <Grid container spacing={0}>
            <Grid item xs={2.5}>
                
            </Grid>
            <Grid item xs={7} mt={5} p={4} spacing={2} justifyContent="center" alignItems="center" boxShadow="3" backgroundColor={alpha("#E5E4E2", 0.9)} borderRadius="6px" style={{textAlign: "center"}}>

            <ReservationCodeField/>
                
            </Grid>
            
            </Grid>
        </Box>  
     </ThemeProvider>
    )
}
