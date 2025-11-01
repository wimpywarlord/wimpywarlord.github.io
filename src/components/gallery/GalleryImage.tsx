"use client";

import Image, { ImageProps } from "next/image";
import { useRef } from "react";
import { useGallery } from "./GalleryViewer";

interface GalleryImageProps extends ImageProps {
  enableGallery?: boolean;
}

export const GalleryImage = ({ enableGallery = true, ...props }: GalleryImageProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { openGallery } = useGallery();

  const handleClick = () => {
    if (enableGallery && imageRef.current) {
      openGallery(
        imageRef.current,
        <Image
          {...props}
          className={`${props.className} cursor-default`}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />,
        typeof props.src === "string" ? props.src : undefined
      );
    }
  };

  return (
    <Image
      {...props}
      ref={imageRef}
      className={`${props.className} ${enableGallery ? "cursor-pointer" : ""}`}
      onClick={enableGallery ? handleClick : props.onClick}
    />
  );
};
