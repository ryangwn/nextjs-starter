import type { GetStaticProps, GetStaticPropsContext } from "next";
import { notFound, redirect } from "next/navigation";

export function withAppDirSsg<T extends Record<string, any>>(
  getStaticProps: GetStaticProps<T>
) {
  return async (context: GetStaticPropsContext) => {
    const ssgResponse = await getStaticProps(context);

    if ("redirect" in ssgResponse) {
      redirect(ssgResponse.redirect.destination);
    }

    if ("notFound" in ssgResponse) {
      notFound();
    }

    const props = await Promise.resolve(ssgResponse.props);

    return {
      ...ssgResponse.props,
    };
  };
}

