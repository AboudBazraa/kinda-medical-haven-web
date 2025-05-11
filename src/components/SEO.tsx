import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import environmentConfig from "@/lib/environmentConfig";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  language?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = environmentConfig.defaultTitle,
  description = environmentConfig.defaultDescription,
  canonical,
  ogType = "website",
  ogImage = environmentConfig.defaultOgImage,
  keywords = "healthcare, Yemen, hospital management, medical equipment, healthcare investment",
  language = "en",
}) => {
  const location = useLocation();
  const canonicalUrl =
    canonical || `${environmentConfig.baseUrl}${location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical Tag */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={environmentConfig.siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={environmentConfig.twitterHandle} />
    </Helmet>
  );
};

export default SEO;
