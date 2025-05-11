/**
 * Environment configuration for the application
 * Used for SEO and other environment-specific settings
 */

interface EnvironmentConfig {
  baseUrl: string;
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultOgImage: string;
  twitterHandle: string;
}

// Default development configuration
const devConfig: EnvironmentConfig = {
  baseUrl: "http://localhost:8080",
  siteName: "Kinda Medical Trading Company",
  defaultTitle:
    "Kinda Medical Trading Company | Leading Healthcare Investment in Yemen",
  defaultDescription:
    "Kinda Medical Trading Company - Leading healthcare investment company in Yemen, providing hospital management, medical equipment supply, and healthcare infrastructure development.",
  defaultOgImage: "https://lovable.dev/opengraph-image-p98pqg.png",
  twitterHandle: "@kindamedical",
};

// Production configuration
const prodConfig: EnvironmentConfig = {
  baseUrl: "https://kindamedical.com",
  siteName: "Kinda Medical Trading Company",
  defaultTitle:
    "Kinda Medical Trading Company | Leading Healthcare Investment in Yemen",
  defaultDescription:
    "Kinda Medical Trading Company - Leading healthcare investment company in Yemen, providing hospital management, medical equipment supply, and healthcare infrastructure development.",
  defaultOgImage: "https://kindamedical.com/og-image.png",
  twitterHandle: "@kindamedical",
};

// Get the current environment
const isDevelopment =
  import.meta.env.DEV || import.meta.env.MODE === "development";

// Export the appropriate configuration
const environmentConfig: EnvironmentConfig = isDevelopment
  ? devConfig
  : prodConfig;

export default environmentConfig;
