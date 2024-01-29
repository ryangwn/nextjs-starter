import { buildCtx } from "@/lib/buildCtx";
import { GetServerSidePropsContext, LayoutProps, PageProps } from "@/types/server";
import { cookies, headers } from "next/headers";
import PageWrapper from "./PageWrapper";

type WithLayoutParams<T extends Record<string, any>> = {
  getLayout: ((page: React.ReactElement) => React.ReactNode) | null;
  Page?: (props: T) => React.ReactElement | null;
  getData?: (arg: GetServerSidePropsContext) => Promise<T | undefined>;
};

export function WithLayout<T extends Record<string, any>>({
  getLayout,
  getData,
  Page,
}: WithLayoutParams<T>) {
  return async <P extends "P" | "L">(p: P extends "P" ? PageProps : LayoutProps) => {
    const h = headers();
    let props = {} as T;

    if ("searchParams" in p && getData) {
      props = (await getData(buildCtx(h, cookies(), p.params, p.searchParams))) ?? ({} as T);
    }

    const children = "children" in p ? p.children : null;

    return (
      <PageWrapper
        getLayout={getLayout}
        nonce=""
        {...props}
      >
        {Page ? <Page {...props} /> : children}
      </PageWrapper>
    )
  }
}
