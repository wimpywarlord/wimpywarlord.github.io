"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { X, Download } from "lucide-react";

interface GalleryContextType {
  openGallery: (element: HTMLElement, content: ReactNode, downloadUrl?: string) => void;
  closeGallery: () => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within GalleryProvider");
  }
  return context;
};

interface GalleryProviderProps {
  children: ReactNode;
}

export const GalleryProvider = ({ children }: GalleryProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);
  const [originRect, setOriginRect] = useState<DOMRect | null>(null);
  const [transform, setTransform] = useState("");
  const [mounted, setMounted] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openGallery = useCallback((element: HTMLElement, content: ReactNode, downloadUrl?: string) => {
    const rect = element.getBoundingClientRect();
    setOriginRect(rect);
    setContent(content);
    setDownloadUrl(downloadUrl);
    setIsOpen(true);

    // Calculate initial transform (element's current position)
    const initialTransform = `translate(${rect.left}px, ${rect.top}px) scale(1)`;
    setTransform(initialTransform);

    // After a brief delay, calculate and apply the expanded transform
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const margin = 0.95;
        const scaleX = (window.innerWidth * margin) / rect.width;
        const scaleY = (window.innerHeight * margin) / rect.height;

        // Choose the minimum scale so it doesn't exceed viewport boundaries
        const scale = Math.min(scaleX, scaleY);

        // Calculate the scaled dimensions
        const scaledWidth = rect.width * scale;
        const scaledHeight = rect.height * scale;

        // Calculate position to center the scaled element in viewport
        const centerX = (window.innerWidth - scaledWidth) / 2;
        const centerY = (window.innerHeight - scaledHeight) / 2;

        setTransform(
          `translate(${centerX}px, ${centerY}px) scale(${scale})`
        );
      });
    });
  }, []);

  const closeGallery = useCallback(() => {
    if (originRect) {
      // Animate back to original position
      const resetTransform = `translate(${originRect.left}px, ${originRect.top}px) scale(1)`;
      setTransform(resetTransform);

      // Wait for animation to complete before unmounting
      setTimeout(() => {
        setIsOpen(false);
        setContent(null);
        setOriginRect(null);
        setTransform("");
        setDownloadUrl(undefined);
      }, 400); // Match animation duration
    } else {
      setIsOpen(false);
      setContent(null);
      setOriginRect(null);
      setTransform("");
      setDownloadUrl(undefined);
    }
  }, [originRect]);

  const handleDownload = useCallback(() => {
    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = downloadUrl.split("/").pop() || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [downloadUrl]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeGallery();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeGallery]);

  return (
    <GalleryContext.Provider value={{ openGallery, closeGallery }}>
      {children}
      {mounted && isOpen && createPortal(
        <div
          className="fixed inset-0 z-50 bg-black/90 cursor-pointer"
          onClick={closeGallery}
          style={{
            opacity: transform.includes("scale(1)") && !transform.includes("translate(0px, 0px)") ? 0 : 1,
            transition: "opacity 400ms cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          {/* Toolbar */}
          <div className="fixed top-4 right-4 z-[60] flex items-center gap-2">
            {downloadUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload();
                }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                aria-label="Download"
              >
                <Download className="w-5 h-5 text-white" />
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeGallery();
              }}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div
            className="absolute top-0 left-0 origin-top-left cursor-auto"
            style={{
              transform,
              transition: "transform 400ms cubic-bezier(0.76, 0, 0.24, 1)",
              width: originRect?.width || 0,
              height: originRect?.height || 0,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {content}
          </div>
        </div>,
        document.body
      )}
    </GalleryContext.Provider>
  );
};
