import { Box, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function RegistrationType() {
  const navigate = useNavigate();
  
  const handleSimpleReg = () => {
    navigate('simple');
  }

  const handleVolunteerReg = () => {
    navigate('volunteer');
  }

  const handleOrganizationReg = () => {
    navigate('organization');
  }

  return (
          <Box sx={{ display: 'flex', ml: 15, mt: 15}}>
            <Box justifyContent="center" sx={{ display: 'box' }}>
                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src="https://msdocsstoragefunc.blob.core.windows.net/assets/simple.png"
                />
                <Button sx={{ mt: 3, ml: 3}} onClick = {handleSimpleReg} variant="contained">Simple Registration</Button>
            </Box>
            <Box sx={{ display: 'box' }}>
                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src="https://msdocsstoragefunc.blob.core.windows.net/assets/volunteer.png"
                />
                <Button sx={{ mt: 3, ml: 1}} onClick = {handleVolunteerReg} variant="contained">Volunteer Registration</Button>
            </Box>
            <Box sx={{ display: 'box' }}>
                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src="https://msdocsstoragefunc.blob.core.windows.net/assets/organization.png"
                />
                <Button sx={{ mt: 3}} onClick = {handleOrganizationReg} variant="contained">Organization Registration</Button>
            </Box>
      </Box>
  );
}