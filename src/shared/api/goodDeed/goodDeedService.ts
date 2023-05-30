import axios from "axios";
import { GoodDeedForCreateDto, GoodDeedListDto } from "shared/models/goodDeedModel";
import { PagedRequest, PagedResult } from "shared/models/pagedRequestModel";

export async function addGoodDeed(goodDeed: GoodDeedForCreateDto) {
    let response = await axios.post("https://localhost:7091/api/gooddeeds", goodDeed, { headers: {'Content-type': 'multipart/form-data'}} );
    return response.data;
} 

export async function getPagedGoodDeeds(pagedRequest: PagedRequest) {
    let response = await axios.post<PagedResult<GoodDeedListDto>>("https://localhost:7091/api/gooddeeds/paginated-search", pagedRequest );
    return response.data;
}