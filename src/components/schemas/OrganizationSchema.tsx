import React from "react";
import { Helmet } from "react-helmet-async";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: {
    street?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };
}

const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  name = "Kinda Medical Trading Company",
  url = "https://kindamedical.com",
  logo = "https://kindamedical.com/logo.png",
  description = "Leading healthcare investment company in Yemen, providing hospital management, medical equipment supply, and healthcare infrastructure development.",
  telephone = "+967 123 456 789",
  email = "info@kindamedical.com",
  address = {
    street: "Seiyun",
    city: "Hadramout",
    region: "Hadramout",
    postalCode: "",
    country: "Yemen",
  },
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name,
    url,
    logo,
    description,
    email,
    telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    sameAs: [
      "https://www.facebook.com/kindamedical",
      "https://www.twitter.com/kindamedical",
      "https://www.linkedin.com/company/kindamedical",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default OrganizationSchema;
