import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Participants = (props: { id?: number; title?: string; value?: string | number; }) => {

	return (
		<Box>
            <Link to={String(props.id)}>
                <p className='details-text-sm'><span className='bold'>{props.title}</span> {props.value}</p>
            </Link>
            
		</Box>
	)
}

export { Participants };