
import '../static/style/reservationPage.css'
import {createTheme, Typography} from '@mui/material';
import ReservationCodeField from "../components/ReservationCodeField";
import { Box } from '@mui/material';
import { responsiveFontSizes,  ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

export default function ReservationCodePage() {

    

    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    return (
        <ThemeProvider theme={theme}>
            
 <Box className = "reservationCodeBackground" > 
        
            
            <Grid container spacing={3}>
            <Grid item xs>
                
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h3"  color="#fdfdfd"  sx={{  textShadow:"2px 2px 6px black", display: 'flex', flexGrow: '3', flexDirection: 'width' ,marginTop: '5vh', marginRight:'3vh'}}>
                        Extend Your Journey with Turkish Airlines Trip Booster
                    </Typography> 
                
            </Grid>
            <Grid item xs>
                
            </Grid>
            </Grid>

            <Grid container spacing={0}>
            <Grid item xs={3}>
                
            </Grid>
            <Grid item xs={9}>
            <ReservationCodeField/>
                
            </Grid>
            <Grid item xs={3}>
                
            </Grid>
            </Grid>
       
           
        </Box>  
     </ThemeProvider>
    )
}
