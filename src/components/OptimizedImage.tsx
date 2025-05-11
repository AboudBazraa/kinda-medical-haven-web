import React, { useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: "lazy" | "eager";
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  loading = "lazy",
  objectFit = "cover",
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isExternal = src.startsWith("http");

  // For better error handling
  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setImageError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
          aria-hidden="true"
        />
      )}

      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={`${
          !isLoaded ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        style={{ objectFit }}
        decoding="async"
        fetchPriority={loading === "eager" ? "high" : "auto"}
        onError={handleError}
        onLoad={handleLoad}
      />

      {imageError && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 border border-gray-300"
          style={{ width, height }}
          aria-label={`Image ${alt} failed to load`}
        >
          Image not available
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
