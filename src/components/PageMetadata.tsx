import { useEffect } from 'react';

interface PageMetadataProps {
  title: string;
  description: string;
  path: string;
}

const SITE_URL = 'https://francoaguirre.vercel.app';

function PageMetadata({
  title,
  description,
  path,
}: PageMetadataProps) {
  useEffect(() => {
    const descriptionMeta =
      document.querySelector<HTMLMetaElement>(
        'meta[name="description"]',
      );

    const openGraphTitle =
      document.querySelector<HTMLMetaElement>(
        'meta[property="og:title"]',
      );

    const openGraphDescription =
      document.querySelector<HTMLMetaElement>(
        'meta[property="og:description"]',
      );

    const openGraphUrl =
      document.querySelector<HTMLMetaElement>(
        'meta[property="og:url"]',
      );

    const twitterTitle =
      document.querySelector<HTMLMetaElement>(
        'meta[name="twitter:title"]',
      );

    const twitterDescription =
      document.querySelector<HTMLMetaElement>(
        'meta[name="twitter:description"]',
      );

    const canonical =
      document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]',
      );

    const previousTitle = document.title;
    const previousDescription = descriptionMeta?.content;
    const previousCanonical = canonical?.href;

    const pageUrl = `${SITE_URL}${path}`;

    document.title = title;

    descriptionMeta?.setAttribute('content', description);
    openGraphTitle?.setAttribute('content', title);
    openGraphDescription?.setAttribute('content', description);
    openGraphUrl?.setAttribute('content', pageUrl);
    twitterTitle?.setAttribute('content', title);
    twitterDescription?.setAttribute('content', description);
    canonical?.setAttribute('href', pageUrl);

    return () => {
      document.title = previousTitle;

      if (previousDescription) {
        descriptionMeta?.setAttribute(
          'content',
          previousDescription,
        );
      }

      if (previousCanonical) {
        canonical?.setAttribute('href', previousCanonical);
      }
    };
  }, [title, description, path]);

  return null;
}

export default PageMetadata;