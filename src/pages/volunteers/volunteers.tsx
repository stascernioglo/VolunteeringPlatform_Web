import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PagedRequest, PagedResult } from 'shared/models/pagedRequestModel';
import { VolunteerListDto } from 'shared/models/volunteerModel';
import { getPagedVolunteers } from 'shared/api/volunteer/volunteerService';
import { Avatar } from '@mui/material';



const Volunteers = () => {

    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState<number>(0);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | undefined>('desc');
    const [columnForSorting, setColumnForSorting] = useState<string>('id');
    const [volunteers, setVolunteers] = useState<VolunteerListDto[]>([{}]);
    var pagedRequest: PagedRequest = {
        pageIndex: page,
        pageSize: pageSize,
        sortDirection: sortDirection,
        columnNameForSorting: columnForSorting
    };

    const handlePaginationResponse = useCallback((response: PagedResult<VolunteerListDto>) => {
        setVolunteers([...response.items]);
		setTotal(response.total);
    }, []);

	const setProperties = () => {
		pagedRequest.pageIndex = page;
        pagedRequest.pageSize = pageSize;
        pagedRequest.columnNameForSorting = columnForSorting;
        pagedRequest.sortDirection = sortDirection;
	}

    useEffect( () => {
        setProperties();
        getPagedVolunteers(pagedRequest).then(handlePaginationResponse);
    },[columnForSorting, page, pageSize, sortDirection])

	const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPageSize(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleChangeSort = (column: string) => {
		setColumnForSorting(column);
		const isAsc = columnForSorting === column && sortDirection === 'asc';
		setSortDirection(isAsc ? 'desc' : 'asc');
		setPage(0);
	}

	return (
		<Box margin='auto'
			justifyContent='center'
			textAlign='center'
			width='650px' >
			<h1 className='heads'>VOLUNTEERS</h1>
			<TableContainer component={Paper} sx={{ mt: 2 }}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">
								<TableSortLabel>
								</TableSortLabel>
							</TableCell>
							<TableCell sx={{ fontSize: 20 }} align="left">
								<TableSortLabel
									active={columnForSorting === 'fullName'}
									direction={sortDirection}
									onClick={() => handleChangeSort('fullName')}
								>
									Full Name
								</TableSortLabel>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							volunteers.map((row) => (
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
			<TablePagination
				onPageChange={handleChangePage}
				count={total}
				rowsPerPage={pageSize}
				page={page}
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				onRowsPerPageChange={handleChangeRowsPerPage}
				sx={{ fontSize: 15 }}
			/>
		</Box>
	)
}

export { Volunteers };