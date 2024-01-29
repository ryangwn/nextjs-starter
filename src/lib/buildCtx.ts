import type { Params, SearchParams } from "@/types/server";
import type { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export function buildCtx(
  headers: ReadonlyHeaders,
  cookies: ReadonlyRequestCookies,
  searchParams: SearchParams,
  params: Params
) {
  return {
    headers,
    cookies,
    searchParams,
    params
  }
}
