import React from 'react';
import { Helmet } from 'react-helmet';

const SITE_URL = 'https://www.highdaguestposts.com';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'HighDaGuestPosts',
      url: SITE_URL,
      description: 'Premium guest posting and blogger outreach service providing manually vetted, relevant editorial placements for SEO-driven link building.',
      email: 'info@highdaguestpost.com',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'HighDaGuestPosts',
      description: 'Guest posting, blogger outreach and link insertion services with manually researched, relevant publisher placements.',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

const SiteSchema = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Helmet>
);

export default SiteSchema;
