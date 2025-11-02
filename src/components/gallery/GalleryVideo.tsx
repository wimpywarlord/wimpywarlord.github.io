"use client";

import { useRef, VideoHTMLAttributes, useState, useEffect, ReactElement } from "react";
import { useGallery } from "./GalleryViewer";

interface GalleryVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  enableGallery?: boolean;
  children: React.ReactNode;
}

export const GalleryVideo = ({ enableGallery = true, children, ...props }: GalleryVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { openGallery } = useGallery();
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract video source from children on mount
  useEffect(() => {
    const extractSrc = () => {
      const childArray = Array.isArray(children) ? children : [children];
      const sourceChild = childArray.find(
        (child: unknown) => (child as ReactElement)?.type === "source"
      ) as ReactElement<{ src: string }>;

      if (sourceChild?.props?.src) {
        setVideoSrc(sourceChild.props.src);
      }
    };

    extractSrc();
  }, [children]);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !videoSrc) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            // Load video when it enters viewport
            const sourceElement = videoElement.querySelector("source");
            if (sourceElement && videoSrc) {
              sourceElement.src = videoSrc;
              videoElement.load();
              setIsLoaded(true);
            }
          }
        });
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0.01,
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, [isLoaded, videoSrc]);

  const handleClick = () => {
    if (enableGallery && videoRef.current) {
      // Pause the thumbnail video
      videoRef.current.pause();

      openGallery(
        videoRef.current,
        <video
          ref={(el) => {
            if (el) {
              el.volume = 0.8; // Set volume to 80%
            }
          }}
          className={`${props.className} cursor-default`}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          controls
          autoPlay
          loop
        >
          {children}
        </video>,
        videoSrc
      );
    }
  };

  return (
    <div className="relative">
      {/* Loading placeholder */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-muted/50 animate-pulse rounded-lg flex items-center justify-center"
          style={{ aspectRatio: "16/9" }}
        >
          <div className="text-muted-foreground text-sm">Loading...</div>
        </div>
      )}

      <video
        {...props}
        ref={videoRef}
        className={`${props.className} ${enableGallery ? "cursor-pointer" : ""} ${!isLoaded ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onClick={enableGallery ? handleClick : props.onClick}
        autoPlay={isLoaded}
        loop
        muted
        playsInline
      >
        {/* Render source without src initially - will be set by Intersection Observer */}
        <source type="video/mp4" />
      </video>
    </div>
  );
};
