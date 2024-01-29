import type { ReactNode } from "react";
import type { SSRConfig } from "next-i18next";

export type PageWrapperProps = Readonly<{
  getLayout: ((page: React.ReactElement) => ReactNode) | null;
  children: React.ReactNode;
  nonce: string | undefined;
  i18n?: SSRConfig;
}>;
function PageWrapper(props: PageWrapperProps) {
  
  // On client side don't let nonce creep into DOM
  // It also avoids hydration warning that says that Client has the nonce value but server has "" because browser removes nonce attributes before DOM is built
  // See https://github.com/kentcdodds/nonce-hydration-issues
  // Set "" only if server had it set otherwise keep it undefined because server has to match with client to avoid hydration error
  const nonce = typeof window !== "undefined" ? (props.nonce ? "" : undefined) : props.nonce;
  const providerProps: PageWrapperProps = {
    ...props,
    nonce,
  };

  const getLayout: (page: React.ReactElement) => ReactNode = props.getLayout ?? ((page) => page);

  return <>
    {getLayout(<>{props.children}</>)}
  </>
}
export default PageWrapper;
