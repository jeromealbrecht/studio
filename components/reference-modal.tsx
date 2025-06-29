"use client";
// Ensure the Reference interface is updated here or imported from a shared types file

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X, Facebook, Twitter, Globe, ExternalLink } from "lucide-react";
import Image from "next/image";

export interface Reference {
  id: string;
  title: string;
  subtitle?: string;
  videoUrl?: string;
  imgUrl?: string;
  spotifyEmbedSrc?: string;
  description: string;
  tags?: string[];
  awards?: { iconUrl: string; text: string }[];
  socialLinks?: {
    platform: "facebook" | "twitter" | "website" | "reddit";
    url: string;
  }[];
  websiteUrl?: string;
  purchaseLinks?: { platform: "steam" | "ps4" | "xbox"; url: string }[];
}

const SteamIcon = () => <span className="font-bold">STEAM</span>;
const PS4Icon = () => <span className="font-bold">PS4</span>;
const XboxIcon = () => <span className="font-bold">XBOX</span>;

interface ReferenceModalProps {
  reference: Reference | null;
  onClose: () => void;
}

export default function ReferenceModal({
  reference,
  onClose,
}: ReferenceModalProps) {
  if (!reference || reference.spotifyEmbedSrc) return null; // Don't open modal for Spotify items for now

  let embedUrl = "";
  if (reference.videoUrl) {
    if (reference.videoUrl.includes("youtube.com/watch?v=")) {
      const videoId = reference.videoUrl.split("watch?v=")[1].split("&")[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (reference.videoUrl.includes("youtu.be/")) {
      const videoId = reference.videoUrl.split("youtu.be/")[1].split("?")[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
  }

  const socialIconMap = {
    facebook: <Facebook className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    website: <Globe className="w-5 h-5" />,
    reddit: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.8198 2.00098C13.1098 2.00098 13.3698 2.16098 13.4898 2.41098L16.1098 7.68098H22.1298C22.6798 7.68098 23.1298 8.13098 23.1298 8.68098C23.1298 8.94098 23.0198 9.18098 22.8398 9.36098L18.5098 12.501L20.1298 17.981C20.2398 18.311 20.0898 18.671 19.7598 18.781C19.6098 18.831 19.4498 18.851 19.2998 18.851C19.0498 18.851 18.8098 18.751 18.6298 18.571L14.0098 14.981L9.3898 18.571C9.2098 18.751 8.9698 18.851 8.7198 18.851C8.5698 18.851 8.4098 18.831 8.2598 18.781C7.9298 18.671 7.7798 18.311 7.8898 17.981L9.5098 12.501L5.1798 9.36098C4.9998 9.18098 4.8898 8.94098 4.8898 8.68098C4.8898 8.13098 5.3398 7.68098 5.8898 7.68098H11.9098L14.5298 2.41098C14.6498 2.16098 14.9098 2.00098 15.1998 2.00098H12.8198Z" />
      </svg>
    ),
  };

  const platformIconMap = {
    steam: <SteamIcon />,
    ps4: <PS4Icon />,
    xbox: <XboxIcon />,
  };

  return (
    <Dialog
      open={!!reference && !reference.spotifyEmbedSrc}
      onOpenChange={(isOpen) => !isOpen && onClose()}
    >
      <DialogContent className="bg-zinc-900 border-zinc-700 text-white max-w-4xl p-0 overflow-hidden">
        <div className="flex flex-col max-h-[90vh] overflow-y-auto md:flex-row md:max-h-none md:overflow-y-visible">
          {embedUrl && (
            <div className="w-full md:w-3/5 bg-black flex-shrink-0">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={embedUrl}
                  title={reference.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          <div
            className={`w-full ${
              embedUrl ? "md:w-2/5" : "md:w-full"
            } p-6 flex flex-col md:overflow-y-auto md:max-h-[calc(100vh-theme(space.16))]`}
          >
            <DialogHeader className="mb-4 text-left">
              <DialogTitle className="text-xl md:text-2xl font-bold text-white">
                {reference.title}
              </DialogTitle>
              {reference.subtitle && (
                <DialogDescription className="text-zinc-400 text-base md:text-lg">
                  {reference.subtitle}
                </DialogDescription>
              )}
            </DialogHeader>

            {reference.tags && reference.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {reference.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-zinc-800 text-zinc-300 text-xs font-medium px-3 py-1 rounded-full border border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
              {reference.description}
            </p>

            {reference.awards && reference.awards.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs uppercase font-semibold text-zinc-500 mb-2">
                  Awards
                </h4>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {reference.awards.map((award, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <img
                        src={
                          award.iconUrl ||
                          "/placeholder.svg?width=40&height=60&query=award+laurel"
                        }
                        alt={award.text}
                        className="h-10 md:h-12 w-auto mb-1"
                      />
                      <span className="text-xs text-zinc-400">
                        {award.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <hr className="border-zinc-700 my-4" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3 sm:gap-0">
              {reference.socialLinks && reference.socialLinks.length > 0 && (
                <div className="flex space-x-3">
                  {reference.socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-[#d4af37] transition-colors"
                      aria-label={`Visit ${reference.title} on ${link.platform}`}
                    >
                      {socialIconMap[link.platform] || (
                        <ExternalLink className="w-5 h-5" />
                      )}
                    </a>
                  ))}
                </div>
              )}
              {reference.websiteUrl && (
                <a
                  href={reference.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-[#d4af37] transition-colors flex items-center"
                >
                  www.{new URL(reference.websiteUrl).hostname}{" "}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              )}
            </div>

            {reference.purchaseLinks && reference.purchaseLinks.length > 0 && (
              <>
                <hr className="border-zinc-700 my-4" />
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zinc-300 mb-3">
                    BUY IT HERE:
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    {reference.purchaseLinks.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-200 hover:text-[#d4af37] transition-colors flex items-center space-x-2"
                        aria-label={`Buy ${reference.title} on ${link.platform}`}
                      >
                        {platformIconMap[link.platform]}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
