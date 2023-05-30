
import Box from '@mui/material/Box';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectResult } from 'shared/models/projectModel';
import { getProject } from 'shared/api/project/projectService';
import { MainInfo } from 'widgets/details/mainInfo';
import { Details } from 'widgets/details/details';
import { AuthContext } from 'app/App';
import { Button } from '@mui/material';
import { participateInProject } from 'shared/api/volunteer/volunteerService';
import { Description } from 'widgets/details/description';
import { Participants } from 'widgets/details/participants';

const ProjectPage = () => {

    const [project, setProject] = useState<ProjectResult>({});
    const [participation, setParticipation] = useState(false);
    const projectId = Number(useParams().id);
    const { role } = useContext(AuthContext);

    useEffect( () => {
        getProject(projectId).then((res) => setProject(res));
    },[participation])

    const handleParticipation = async () => {
        await participateInProject(project.project?.id);
        setParticipation(!participation);
    }

	return (
		<Box margin='auto'
			justifyContent='center'
			width='800px' 
            sx={{ mt:5 }} >
            
			<MainInfo name={project.project?.name} category={project.project?.category} organization={project.project?.organization} 
            organizationId={project.project?.organizationId} imageUrl={project.project?.imageUrl} />
            
            { (project.project?.description) ? <Description value={project.project?.description} /> : <></> }
            { (project.project?.locality) ? <Details title="Locality:" value={project.project?.locality} /> : <></> }
            { (project.project?.address) ? <Details title="Address:" value={project.project?.address} /> : <></> }
            { (project.project?.date) ? <Details title="Date:" value={new Date(project.project?.date).toLocaleDateString() } /> : <></> }
            { (project.project?.requiredNumberOfVolunteers) ? <Details title="Required number of volunteers:" value={project.project?.requiredNumberOfVolunteers} /> : <></> }
            { (project.project?.numberOfParticipatingVolunteers !== 0) ? <Participants id = {project.project?.id} title="Already participating volunteers:" value={project.project?.numberOfParticipatingVolunteers} /> : <></> }
            { (role === 'volunteer') ? <Button disabled={project.participation} sx={{ mt: 1, ml: 2, fontSize: 18}} onClick = {handleParticipation} variant="contained">Participate</Button> : <></>}
		</Box>
	)
}

export { ProjectPage };