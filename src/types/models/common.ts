export interface ListResponse<T> {
  data: T[];
}

export interface ResponseApi<T> {
  data: T;
}

export interface ListResponseFilter<T> {
  data: { results?: T[]; count?: number; order?: T[] };
}

export interface PostSuccessResponse {
  data: { message: string };
  status: number;
}

export interface PostErrorResponse {
  response: { data: any; status: number };
}
