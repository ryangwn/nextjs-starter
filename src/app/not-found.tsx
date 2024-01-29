import { WithLayout } from "@/components/layout/withLayout";
import type { GetStaticPropsContext } from "next";

const getData = async (context: GetStaticPropsContext) => {

  return {
  };
};

export const dynamic = "force-static";

const Page = () => {
  return <h1>Not Found</h1>
}

export default WithLayout({ getLayout: null, getData, Page });
