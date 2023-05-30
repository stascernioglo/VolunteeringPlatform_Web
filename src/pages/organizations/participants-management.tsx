import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VolunteerListDto } from 'shared/models/volunteerModel';
import { getParticipants } from 'shared/api/volunteer/volunteerService';
import { Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { cancelConfirmation, confirmParticipation, removeParticipant } from 'shared/api/organization/organizationService';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const ParticipantsManagement = () => {

    const projectId = Number(useParams().nid);

    const [participants, setParticipants] = useState<VolunteerListDto[]>([{}]);
    const [deleting, setDeleting] = useState(false);

    useEffect( () => {
        getParticipants(projectId).then((res) => setParticipants([...res]));
    },[deleting]);

    const handleDelete = (id?: number) => {
        removeParticipant(id);
        setTimeout(setDeleting, 100, !deleting);
	}

	const handleConfirm = (id?: number) => {
		confirmParticipation(id);
		setTimeout(setDeleting, 100, !deleting);
	}

	const handleCancelation = (id?: number) => {
		cancelConfirmation(id);
		setTimeout(setDeleting, 100, !deleting);
	}

	return (
<Box margin='auto'
			justifyContent='center'
			textAlign='center'
			width='750px' >
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
                            <TableCell sx={{ fontSize: 20 }} align="left">
							</TableCell>
                            <TableCell sx={{ fontSize: 20 }} align="left">
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
                                    <TableCell sx={{ fontSize: 25 }} align="center">
										{ (row.status) ? 
										<>
											<DoneOutlineIcon color="success" />
											<IconButton onClick={() => handleCancelation(row.id)} aria-label="delete" size="large" color="error">
                                            	Cancel
											</IconButton>
										</> :
										<IconButton onClick={() => handleConfirm(row.id)} aria-label="delete" size="large" color="success">
                                            Confirm
										</IconButton>
										}
									</TableCell>
                                    <TableCell sx={{ fontSize: 25 }} align="center">
										<IconButton onClick={() => handleDelete(row.id)} aria-label="delete" size="large" color="error">
											<DeleteIcon fontSize="inherit" />
										</IconButton>
									</TableCell>
								</TableRow>
							))
						}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}

export { ParticipantsManagement };