import Box from '@mui/material/Box';

const Details = (props: { title?: string; value?: string | number; }) => {

	return (
		<Box>
            <p className='details-text-sm'><span className='bold'>{props.title}</span> {props.value}</p>
		</Box>
	)
}

export { Details };