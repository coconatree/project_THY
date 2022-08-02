
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
        <Box     sx={{
            width: "100%",
            height: 500,
            backgroundColor: 'primary.dark',

        }} justifyContent="center" > 
            <Box     sx={{
            width: "100%",
            height: 200, direction: 'column', 
            backgroundColor: '#C0C0C0',
             }} textAlign="right" display="inline-block" > 
                <Box     sx={{
                width: "40%",
                height: 200, direction: 'column', 
                backgroundColor: '#C022C0',
                marginRight:'10vh'
                }} textAlign="right" display="inline-block" > 
                
                    <Typography variant="h3"  color="#fdfdfd"  sx={{  display: 'flex', flexGrow: '3', flexDirection: 'width' ,marginTop: '5vh', marginRight:'3vh'}}>
                        Extend Your Journey with Turkish Airlines Trip Booster
                    </Typography> 
                
                </Box>   
            </Box>             
      

                     <Grid container justifyContent="flex-end">

<ReservationCodeField/>
</Grid>
                    
            </Box>
        </Box>  
     </ThemeProvider>
    )
}
