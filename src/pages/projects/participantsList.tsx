import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VolunteerListDto } from 'shared/models/volunteerModel';
import { getParticipants } from 'shared/api/volunteer/volunteerService';
import { Avatar } from '@mui/material';

const ParticipantsList = () => {

    const projectId = Number(useParams().nid);

    const [participants, setParticipants] = useState<VolunteerListDto[]>([{}]);

    const handleResponse = useCallback((response: VolunteerListDto[]) => {
        setParticipants([...response]);
    }, []);

    useEffect( () => {
        getParticipants(projectId).then(handleResponse);
    },[]);

	return (
<Box margin='auto'
			justifyContent='center'
			textAlign='center'
			width='650px' >
			<h1 className='heads'>PARTICIPANTS</h1>
			<TableContainer component={Paper} sx={{ mt: 2 }}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">
							</TableCell>
							<TableCell sx={{ fontSize: 20 }} align="left">
									Full Name
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							participants.map((row) => (
								<TableRow
									key={row.id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="right">
                                    <Avatar
                                            alt="Volunteer's avatar"
                                            src={row.imageUrl}
                                            sx={{ width: 150, height: 150, ml: 7 }}
                                            />
									</TableCell>
									<TableCell sx={{ fontSize: 25 }} align="left">{row.fullName}</TableCell>
								</TableRow>
							))
						}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}

export { ParticipantsList };