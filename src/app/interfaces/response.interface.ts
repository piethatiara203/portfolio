export interface ResponseBase<T> {
  message: string;
  data: T;
}