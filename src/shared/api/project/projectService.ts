import axios from "axios";
import { PagedRequest, PagedResult } from "shared/models/pagedRequestModel";
import { ProjectForCreateDto, ProjectListDto, ProjectResult } from "shared/models/projectModel";

export async function addProject(project: ProjectForCreateDto) {
    let response = await axios.post("https://localhost:7091/api/projects", project, { headers: {'Content-type': 'multipart/form-data'}} );
    return response.data;
}

export async function getPagedProjects(pagedRequest: PagedRequest) {
    let response = await axios.post<PagedResult<ProjectListDto>>("https://localhost:7091/api/projects/paginated-search", pagedRequest );
    return response.data;
}

export async function getProject(id: number) {
    let response = await axios.get<ProjectResult>(`https://localhost:7091/api/projects/${id}`);
    return response.data;
}

export async function deleteProject(id?: number) {
    let response = await axios.delete(`https://localhost:7091/api/projects/${id}`);
    return response.data;
}
