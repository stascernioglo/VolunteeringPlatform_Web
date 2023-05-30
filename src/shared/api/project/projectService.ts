import axios from "axios";
import { PagedRequest, PagedResult } from "shared/models/pagedRequestModel";
import { ProjectForCreateDto, ProjectListDto, ProjectResult } from "shared/models/projectModel";

const apiUrl = process.env.REACT_APP_API_URL || 'https://localhost:7091';

export async function addProject(project: ProjectForCreateDto) {
    let response = await axios.post(`${apiUrl}/api/projects`, project, { headers: {'Content-type': 'multipart/form-data'}} );
    return response.data;
}

export async function getPagedProjects(pagedRequest: PagedRequest) {
    let response = await axios.post<PagedResult<ProjectListDto>>(`${apiUrl}/api/projects/paginated-search`, pagedRequest );
    return response.data;
}

export async function getProject(id: number) {
    let response = await axios.get<ProjectResult>(`${apiUrl}/api/projects/${id}`);
    return response.data;
}

export async function deleteProject(id?: number) {
    let response = await axios.delete(`${apiUrl}/api/projects/${id}`);
    return response.data;
}
