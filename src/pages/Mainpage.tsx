import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


const Mainpage = () => {
	const navigate = useNavigate();

	const handleProjectClick = () => {
		navigate('projects');
	}

	const handleGoodDeedClick = () => {
		navigate('gooddeeds');
	}

	const handleOrganizerClick = () => {
		navigate('signup/organization');
	}

	const handleVolunteerClick = () => {
		navigate('signup/volunteer');
	}

	return (
		<Box  width='100%'>
			<div id="headerwrap">
				<div>
					<div className='main-text-block'>
						<h1 className='main-text'>VOLUNTEERING PLATFORM</h1>
					</div>
				</div>
			</div>

			<Box margin='auto' sx={{ display: 'flex', mt: 10, width: 1100, borderRadius: 5, backgroundColor: 'lightcoral' }}>
				
				<Box sx={{ mt: 1, ml: 13 }} />
					<h2 className='main-item-text'>Participate in projects</h2>
				<Box />

				<Box sx={{ ml: 15, mt: 4 }}>
					<Button sx={{ mt: 1, fontSize: 23}} onClick = { handleProjectClick } variant="contained" size="large">projects</Button>
				</Box>
			</Box>

			<Box margin='auto' sx={{ display: 'flex', mt: 10, width: 1100, borderRadius: 5, backgroundColor: 'seagreen' }}>
				
				<Box sx={{ mt: 1, ml: 25 }} />
					<h2 className='main-item-text'>Do good deeds</h2>
				<Box />

				<Box sx={{ ml: 25, mt: 4 }}>
					<Button sx={{ mt: 1, fontSize: 23}} onClick = { handleGoodDeedClick } variant="contained" size="large">good deeds</Button>
				</Box>
			</Box>

			<Box margin='auto' sx={{ display: 'flex', mt: 10, width: 1100, borderRadius: 5, backgroundColor: '#b853e0' }}>
				
				<Box sx={{ mt: 1, ml: 17 }} />
					<h2 className='main-item-text'>Become a volunteer</h2>
				<Box />

				<Box sx={{ ml: 17, mt: 4 }}>
					<Button sx={{ mt: 1, fontSize: 23}} onClick = { handleVolunteerClick } variant="contained" size="large">volunteers</Button>
				</Box>
			</Box>

			<Box margin='auto' sx={{ display: 'flex', mt: 10, width: 1100, borderRadius: 5, backgroundColor: 'BurlyWood' }}>
				
				<Box sx={{ mt: 1, ml: 17 }} />
					<h2 className='main-item-text'>Become an organizer</h2>
				<Box />

				<Box sx={{ ml: 12, mt: 4 }}>
					<Button sx={{ mt: 1, fontSize: 23}} onClick = { handleOrganizerClick } variant="contained" size="large">organizations</Button>
				</Box>
			</Box>

		</Box>
	)
}

export { Mainpage };
