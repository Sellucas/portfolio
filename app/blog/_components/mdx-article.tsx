import Image from "next/image";
import * as runtime from "react/jsx-runtime";

import { Callout } from "@/app/blog/_components/callout";
import { MdxArticleProps } from "@/types";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
};

export const MdxArticle = ({ code }: MdxArticleProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
