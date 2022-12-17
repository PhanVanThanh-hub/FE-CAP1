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
  response: {
    data: { count: number; results: T[]; next: string; previous: string };
  };
}

export interface SuccessResponse {
  data: { message: string };
  status: number;
}

export interface ErrorResponse {
  response: { data: any; status: number };
}
