export interface ListResponse<T> {
  response: { data: { data: T[] } };
}

export interface ResponseApi<T> {
  data: T;
}

export interface ListResponseFilter<T> {
  data: { results: T[]; count?: number; order?: T[] };
}

export interface PaginationResponse<T> {
  response: { data: { count: number; results: T[] } };
}

export interface PostSuccessResponse {
  data: { message: string };
  status: number;
}

export interface PostErrorResponse {
  response: { data: any; status: number };
}
