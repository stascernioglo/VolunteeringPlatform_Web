export interface Filter {
    path?: string | null;
    value?: string | null;
}

export enum FilterLogicalOperators {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}

export interface RequestFilters {
    logicalOperator?: FilterLogicalOperators;
    filters?: Array<Filter> | null;
}

export interface PagedRequest {
    pageIndex?: number;
    pageSize?: number;
    columnNameForSorting?: string | null;
    sortDirection?: string | null;
    requestFilters?: RequestFilters;
}

export interface PagedResult<T> {
    pageIndex: number;
    pageSize: number;
    total: number;
    items: T [];
}