import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
//   const { site } = useStaticQuery(
//  );
  return site.siteMetadata;
};
