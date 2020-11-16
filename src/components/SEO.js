import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

export default function SEO({
  children,
  location,
  description,
  title,
  image,
  page,
}) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
          siteUrl
          image
        }
      }
    }
  `);

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <link rel="canonical" href={`https://www.nick-east.com/${pathname}`} />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:image" content={site.siteMetadata.image} />
      <meta
        property="og:url"
        content={`${site.siteMetadata.siteUrl}${pathname}`}
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={site.siteMetadata.description}
      />
      <meta name="twitter:image" content={site.siteMetadata.image} />
    </Helmet>
  );
}

// titleTemplate={`%s - ${site.siteMetadata.title}`}
