import { InternalAxiosRequestConfig } from "axios";
import { atom } from "jotai";

export const requestHeadersState = atom<InternalAxiosRequestConfig | null>(
  null
);

export const responseConfigsAndHeadersState = atom<any[]>([]);
export const responseBodyState = atom<any[]>([]);
