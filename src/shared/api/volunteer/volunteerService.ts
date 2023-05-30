import axios from "axios";
import { PagedRequest, PagedResult } from "shared/models/pagedRequestModel";
import { MyParticipationDto } from "shared/models/projectModel";
import { VolunteerListDto } from "shared/models/volunteerModel";

export async function getPagedVolunteers(pagedRequest: PagedRequest) {
    let response = await axios.post<PagedResult<VolunteerListDto>>("https://localhost:7091/api/volunteers/paginated-search", pagedRequest );
    return response.data;
}

export async function participateInProject(projectId?: number) {
    let response = await axios.post(`https://localhost:7091/api/volunteers/participateproj/${projectId}`, projectId );
    return response.data;
}

export async function getParticipants(id?: number) {
    let response = await axios.get(`https://localhost:7091/api/projectvolunteers/${id}`);
    return response.data;
}

export async function getMyParticipations() {
    let response = await axios.get<MyParticipationDto[]>("https://localhost:7091/api/projectvolunteers/mine");
    return response.data;
}

export async function cancelParticipation(id?: number) {
    let response = await axios.delete(`https://localhost:7091/api/projectvolunteers/${id}`);
    return response.data;
}

