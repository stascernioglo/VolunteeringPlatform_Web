import Box from '@mui/material/Box';

const Description = (props: { value?: string; }) => {

	return (
		<Box>
            <p className='details-text-sm bold'>Description:</p>
            <p className='project-page-text'>{props.value}</p>
		</Box>
	)
}

export { Description };