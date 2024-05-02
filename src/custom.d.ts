declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const content: React.FunctionComponent<SVGProps<SVGSVGElement>>;
  export default content;
}
