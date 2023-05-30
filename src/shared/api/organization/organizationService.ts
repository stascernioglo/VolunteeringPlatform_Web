import axios from "axios";
import { OrganizationListDto } from "shared/models/organizationModel";
import { PagedRequest, PagedResult } from "shared/models/pagedRequestModel";
import { MyProjectDto } from "shared/models/projectModel";

const apiUrl = process.env.REACT_APP_API_URL || 'https://localhost:7091';

export async function getPagedOrganizations(pagedRequest: PagedRequest) {
    let response = await axios.post<PagedResult<OrganizationListDto>>(`${apiUrl}/api/organizations/paginated-search`, pagedRequest );
    return response.data;
}

export async function getMyProjects() {
    let response = await axios.get<MyProjectDto[]>(`${apiUrl}/api/projects/mine`);
    return response.data;
}

export async function removeParticipant(id?: number) {
    let response = await axios.delete(`${apiUrl}/api/projectvolunteers/remove/${id}`);
    return response.data;
}

export async function confirmParticipation(id?: number) {
    let response = await axios.post(`${apiUrl}/api/projectvolunteers/confirm/${id}`, id );
    return response.data;
}

export async function cancelConfirmation(id?: number) {
    let response = await axios.post(`${apiUrl}/api/projectvolunteers/cancel/${id}`, id );
    return response.data;
}


