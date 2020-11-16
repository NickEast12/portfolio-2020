import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
          siteUrl
        }
      }
    }
  `);
  console.log(site.siteUrl);
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={site.siteUrl} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

// titleTemplate={`%s - ${site.siteMetadata.title}`}
