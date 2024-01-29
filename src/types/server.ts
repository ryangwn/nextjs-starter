import type { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers"
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export type Params = {
  [param: string]: string | string[] | undefined;
};

export type SearchParams = {
  [param: string]: string | string[] | undefined;
};

export type GetServerSidePropsContext = {
  headers: ReadonlyHeaders;
  cookies: ReadonlyRequestCookies;
  searchParams: SearchParams;
  params: Params;
}

export type PageProps = {
  params: Params;
  searchParams: SearchParams;
};

export type LayoutProps = { params: Params; children: React.ReactElement };
