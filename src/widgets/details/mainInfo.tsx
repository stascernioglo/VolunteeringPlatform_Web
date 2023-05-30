import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const MainInfo = (props: { imageUrl?: string; name?: string; category?: string; organization?: string; organizationId?: number}) => {

	return (
		<Box margin='auto'
            sx={{ display: 'flex', ml: 5}}>
            <Box
                component="img"
                sx={{
                    mt: 2,
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 400, md: 267 },
                    maxWidth: { xs: 600, md: 400 },
                    borderRadius: 5,
                    }}
                alt="Project image"
                src={props.imageUrl}
            />

            <Box sx={{ ml: 5 }}>
                <Box>
                    <h1 className='names'>{props.name}</h1>
                </Box>
                <Box sx={{ mt: 7 }}>
                    <p className='details-text'><span className='bold'>Category:</span> {props.category}</p>
                    <Link to="/">
                        <p className='details-text'><span className='bold'>Organizer:</span> {props.organization}</p>
                    </Link>
                </Box>
            </Box>
		</Box>
	)
}

export { MainInfo };