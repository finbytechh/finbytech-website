import { useEffect } from 'react';

const BASE_URL = 'https://finbytech.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

function SEO({ title, description, canonical, ogType = 'website', schema }) {
  const fullTitle = title
    ? `${title} | FINBYTECHNOVATION IT SOLUTIONS`
    : 'FINBYTECHNOVATION IT SOLUTIONS - AI, Software, Web & Trading Technology';

  const metaDescription = description ||
    'FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED - Premier IT company specializing in AI Solutions, Software Development, Web & Mobile Apps, Digital Marketing, SEO, Cloud Services, and Algorithmic Trading Technology.';

  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    setMeta('description', metaDescription);
    setMeta('robots', 'index, follow');

    setMeta('og:type', ogType, 'property');
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', metaDescription, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:image', DEFAULT_IMAGE, 'property');
    setMeta('og:site_name', 'FINBYTECHNOVATION IT SOLUTIONS', 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', metaDescription);
    setMeta('twitter:image', DEFAULT_IMAGE);

    setLink('canonical', canonicalUrl);

    if (schema) {
      let el = document.getElementById('page-schema');
      if (!el) {
        el = document.createElement('script');
        el.id = 'page-schema';
        el.type = 'application/ld+json';
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(schema);
    }
  }, [fullTitle, metaDescription, canonicalUrl, ogType, schema]);

  return null;
}

export default SEO;
