import axios from "axios";
import { PagedRequest, PagedResult } from "shared/models/pagedRequestModel";
import { MyParticipationDto } from "shared/models/projectModel";
import { VolunteerListDto } from "shared/models/volunteerModel";

const apiUrl = process.env.REACT_APP_API_URL || 'https://localhost:7091';

export async function getPagedVolunteers(pagedRequest: PagedRequest) {
    let response = await axios.post<PagedResult<VolunteerListDto>>(`${apiUrl}/api/volunteers/paginated-search`, pagedRequest );
    return response.data;
}

export async function participateInProject(projectId?: number) {
    let response = await axios.post(`${apiUrl}/api/volunteers/participateproj/${projectId}`, projectId );
    return response.data;
}

export async function getParticipants(id?: number) {
    let response = await axios.get(`${apiUrl}/api/projectvolunteers/${id}`);
    return response.data;
}

export async function getMyParticipations() {
    let response = await axios.get<MyParticipationDto[]>(`${apiUrl}/api/projectvolunteers/mine`);
    return response.data;
}

export async function cancelParticipation(id?: number) {
    let response = await axios.delete(`${apiUrl}/api/projectvolunteers/${id}`);
    return response.data;
}

