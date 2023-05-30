import axios from "axios";
import { OrganizationListDto } from "shared/models/organizationModel";
import { PagedRequest, PagedResult } from "shared/models/pagedRequestModel";
import { MyProjectDto } from "shared/models/projectModel";

export async function getPagedOrganizations(pagedRequest: PagedRequest) {
    let response = await axios.post<PagedResult<OrganizationListDto>>("https://localhost:7091/api/organizations/paginated-search", pagedRequest );
    return response.data;
}

export async function getMyProjects() {
    let response = await axios.get<MyProjectDto[]>("https://localhost:7091/api/projects/mine");
    return response.data;
}

export async function removeParticipant(id?: number) {
    let response = await axios.delete(`https://localhost:7091/api/projectvolunteers/remove/${id}`);
    return response.data;
}

export async function confirmParticipation(id?: number) {
    let response = await axios.post(`https://localhost:7091/api/projectvolunteers/confirm/${id}`, id );
    return response.data;
}

export async function cancelConfirmation(id?: number) {
    let response = await axios.post(`https://localhost:7091/api/projectvolunteers/cancel/${id}`, id );
    return response.data;
}


