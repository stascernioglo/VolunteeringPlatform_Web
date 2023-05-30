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
import { PagedRequest, PagedResult } from 'shared/models/pagedRequestModel';
import { GoodDeedListDto } from 'shared/models/goodDeedModel';
import { getPagedGoodDeeds } from 'shared/api/goodDeed/goodDeedService';

const GoodDeeds = () => {

    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState<number>(0);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | undefined>('desc');
    const [columnForSorting, setColumnForSorting] = useState<string>('id');
    const [gooddeeds, setGoodDeeds] = useState<GoodDeedListDto[]>([{}]);
    var pagedRequest: PagedRequest = {
        pageIndex: page,
        pageSize: pageSize,
        sortDirection: sortDirection,
        columnNameForSorting: columnForSorting
    };

    const handlePaginationResponse = useCallback((response: PagedResult<GoodDeedListDto>) => {
        setGoodDeeds([...response.items]);
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
        getPagedGoodDeeds(pagedRequest).then(handlePaginationResponse);
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
			width='1000px' >
			<h1 className='heads'>GOOD DEEDS</h1>
			<TableContainer component={Paper} sx={{ mt: 2 }}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">
								<TableSortLabel>
								</TableSortLabel>
							</TableCell>
							<TableCell sx={{ fontSize: 20 }} align="center">
								<TableSortLabel
									active={columnForSorting === 'name'}
									direction={sortDirection}
									onClick={() => handleChangeSort('name')}
								>
									Name
								</TableSortLabel>
							</TableCell>
							<TableCell sx={{ fontSize: 20 }} align="center">
								<TableSortLabel
									active={columnForSorting === 'category'}
									direction={sortDirection}
									onClick={() => handleChangeSort('category')}
								>
									Category
								</TableSortLabel>
							</TableCell >
							<TableCell sx={{ fontSize: 20 }} align="center">
								<TableSortLabel
									active={columnForSorting === 'organization'}
									direction={sortDirection}
									onClick={() => handleChangeSort('locality')}
								>
									Locality
								</TableSortLabel>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							gooddeeds.map((row) => (
								<TableRow
									key={row.id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="center">
										<Box
												component="img"
												sx={{
													height: 267,
													width: 400,
													maxHeight: { xs: 267, md: 167 },
													maxWidth: { xs: 400, md: 250 },
													borderRadius: 3,
													}}
												alt="Project image"
												src={row.imageUrl}
										/>
									</TableCell>
									<TableCell sx={{ fontSize: 25 }} align="center">{row.name}</TableCell>
									<TableCell sx={{ fontSize: 25 }} align="center">{row.category}</TableCell>
									<TableCell sx={{ fontSize: 25 }} align="center">{row.locality}</TableCell>
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

export { GoodDeeds };