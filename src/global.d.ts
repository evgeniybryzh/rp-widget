declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// src/declarations.d.ts
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
