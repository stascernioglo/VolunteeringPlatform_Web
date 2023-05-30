import axios from "axios";
import { GoodDeedForCreateDto, GoodDeedListDto } from "shared/models/goodDeedModel";
import { PagedRequest, PagedResult } from "shared/models/pagedRequestModel";

const apiUrl = process.env.REACT_APP_API_URL || 'https://localhost:7091';

export async function addGoodDeed(goodDeed: GoodDeedForCreateDto) {
    let response = await axios.post(`${apiUrl}/api/gooddeeds`, goodDeed, { headers: {'Content-type': 'multipart/form-data'}} );
    return response.data;
} 

export async function getPagedGoodDeeds(pagedRequest: PagedRequest) {
    let response = await axios.post<PagedResult<GoodDeedListDto>>(`${apiUrl}/api/gooddeeds/paginated-search`, pagedRequest );
    return response.data;
}