"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  poster?: string;
}

export function VideoPlayer({ videoUrl, title, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Video started playing successfully
              setIsPlaying(true);
            })
            .catch(err => {
              // Handle error
              console.error("Video playback error:", err);
              setError("Failed to play video. The video might be unavailable or the link may have expired.");
              setIsPlaying(false);
            });
        }
      }
    }
  };

  // Clean up error state if videoUrl changes
  useEffect(() => {
    setError(null);
  }, [videoUrl]);

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {error ? (
        <div className="w-full aspect-video bg-muted flex items-center justify-center flex-col p-4 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-muted-foreground mb-3">
            <path d="m10.6 13.4-2.8-2.8"></path>
            <path d="m13.4 10.6-2.8 2.8"></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <p className="text-muted-foreground">{error}</p>
          <p className="text-sm text-muted-foreground mt-2">
            Note: S3 presigned URLs expire after a short time. You may need a fresh link.
          </p>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            src={videoUrl}
            poster={poster}
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            onError={() => setError("Failed to load the video. The URL may have expired.")}
          >
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Button 
                onClick={togglePlay} 
                variant="outline" 
                size="icon" 
                className="h-16 w-16 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span className="sr-only">Play {title}</span>
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
} 