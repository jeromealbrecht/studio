"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { type Reference } from "@/components/reference-modal";
import Image from "next/image";
import { Youtube, ListFilter } from "lucide-react";

interface PortfolioCategory {
  categoryTitle: string;
  references: Reference[];
}

// Updated data structure with Spotify items
const portfolioData: PortfolioCategory[] = [
  {
    categoryTitle: "Production Musicale",
    references: [
      {
        id: "single-jejouzz",
        title: "Introstalgie",
        subtitle: "Jejouzz",
        videoUrl: "https://www.youtube.com/watch?v=NMZapj8n_YQ",
        description:
          "Enregistrement voix, arrangements, mixage et mastering analogique.",
        tags: ["Hiphop", "EP", "Mastering Analogique"],
      },
      // ... existing production musicale items ...
      // {
      //   id: "rock-band-album",
      //   title: "À l'échec et à la dame",
      //   subtitle: "Variété",
      //   videoUrl: "https://www.youtube.com/watch?v=exampleRock1",
      //   imgUrl: "/img/ale.png",
      //   description:
      //     "Production complète,arrangements, du tracking au mastering. Son moderne et percutant.",
      //   tags
      {
        id: "single-lasulie",
        title: "Fuis tes peurs",
        subtitle: "Lasulie",
        videoUrl: "https://www.youtube.com/watch?v=NnO2uLnCrDA",
        description: "Enregistrement voix, arrangements et mixage.",
        tags: ["Experimental", "EP", "Arrangement Vocal"],
      },
      {
        id: "single-nezo",
        title: "Dans la tess",
        subtitle: "Nezo",
        videoUrl: "https://www.youtube.com/watch?v=xsDzIN6UF2A",
        description: "Enregistrement voix, arrangements et mixage.",
        tags: ["Rap", "Single", "Arrangement Vocal"],
      },
      {
        id: "single-jejouzz",
        title: "Miki Type Beat",
        subtitle: "Jejouzz",
        videoUrl: "https://www.youtube.com/watch?v=sAbCMRbBUHE",
        description: "Enregistrement voix, arrangements et mixage.",
        tags: ["Hiphop", "Single", "Arrangement Vocal"],
      },
      {
        id: "single-elevation",
        title: "Swan",
        subtitle: "Élévation",
        videoUrl: "https://www.youtube.com/watch?v=U8RjYttb4aE",
        description: "Enregistrement voix, arrangements et mixage.",
        tags: ["Rap", "Single", "Arrangement Vocal"],
      },
      {
        id: "single-gerard-toucks",
        title: "Gérard Toucks",
        subtitle: "Accompagne-moi",
        videoUrl: "https://www.youtube.com/watch?v=5ozM5RTIX9s",
        description: "Enregistrement voix, arrangements et mixage.",
        tags: ["Guitare", "Chant", "Arrangement Vocal"],
      },
    ],
  },
  {
    categoryTitle: "Jeu Vidéo",
    references: [],
  },
  {
    categoryTitle: "Spotify", // New Spotify Category
    references: [
      {
        id: "spotify-album-1",
        title: "Rue Mazarine",
        subtitle: "Livia & Jejouzz",
        spotifyEmbedSrc:
          "https://open.spotify.com/embed/album/0lwIoQVULsw1wQhTaMJUw3?utm_source=generator",
        description: "Description de cet album disponible sur Spotify.",
        tags: ["Single", "Duo", "HipHop"],
      },
      {
        id: "spotify-track-1",
        title: "Bombe à retardement",
        subtitle: "Seyso",
        spotifyEmbedSrc:
          "https://open.spotify.com/embed/track/2j651CYD8UDn6Xivc3rkZd?utm_source=generator",
        description: "Description de ce morceau disponible sur Spotify.",
        tags: ["Single", "Rap"],
      },
      {
        id: "spotify-track-2",
        title: "Hiver",
        subtitle: "Élévation",
        spotifyEmbedSrc:
          "https://open.spotify.com/embed/track/3yA3egVjV7vKtjnjUBpOId?utm_source=generator",
        description: "Un autre excellent morceau à écouter sur Spotify.",
        tags: ["EP", "Rap"],
      },
    ],
  },
  {
    categoryTitle: "Doublage Cinéma & Voix Off",
    references: [
      // ... existing doublage items ...
      {
        id: "Verbaere-auto",
        title: "Groupe Verbaere Automobile",
        subtitle: "Voix Off",
        videoUrl: "https://www.youtube.com/watch?v=BIyRC0bHjHY",
        imgUrl: "https://img.youtube.com/vi/BIyRC0bHjHY/hqdefault.jpg",
        description: "mixage et intégration de la voix off.",
        tags: ["Corporate", "Mixage"],
      },
      {
        id: "court-metrage-dub",
        title: "Court Métrage 'Si'",
        subtitle: "Doublage & Mixage Audio",
        videoUrl: "https://www.youtube.com/watch?v=5pD9tEb4ufU",
        description:
          "enregistrement des voix et mixage audio complet pour ce court métrage.",
        tags: ["Doublage long-métrage", "Mixage"],
      },
    ],
  },
];

const ALL_CATEGORIES_FILTER = "Afficher Tout";

const ReferenceModal = dynamic(() => import("@/components/reference-modal"), {
  loading: () => null,
  ssr: false,
});

export default function PortfolioPage() {
  const [selectedReference, setSelectedReference] = useState<Reference | null>(
    null
  );
  const [activeFilter, setActiveFilter] = useState<string>(
    ALL_CATEGORIES_FILTER
  );

  const openModal = (reference: Reference) => {
    // Only open modal if it's not a Spotify item (or if we decide to handle Spotify in modal later)
    if (!reference.spotifyEmbedSrc) {
      setSelectedReference(reference);
    }
  };

  const closeModal = () => {
    setSelectedReference(null);
  };

  const categoryFilters = useMemo(() => {
    const categories = portfolioData
      .filter((cat) => cat.references && cat.references.length > 0)
      .map((cat) => cat.categoryTitle);
    return [ALL_CATEGORIES_FILTER, ...new Set(categories)];
  }, []);

  const filteredPortfolioData = useMemo(() => {
    if (activeFilter === ALL_CATEGORIES_FILTER) {
      return portfolioData;
    }
    return portfolioData.filter(
      (category) => category.categoryTitle === activeFilter
    );
  }, [activeFilter]);

  return (
    <div className="bg-[#121212] min-h-screen text-white">
      <header className="text-center pt-16 pb-12 md:pt-24 md:pb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Notre <span className="text-[#d4af37]">Portfolio</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Découvrez quelques-uns des projets sur lesquels nous avons travaillé,
          classés par domaine d'expertise.
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12 flex flex-wrap justify-center gap-3">
        {categoryFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-150
              ${
                activeFilter === filter
                  ? "bg-[#d4af37] text-black border-[#d4af37]"
                  : "bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600"
              }`}
          >
            {filter === ALL_CATEGORIES_FILTER ? (
              <ListFilter className="inline-block w-4 h-4 mr-1 -mt-0.5" />
            ) : null}
            {filter}
          </button>
        ))}
      </div>

      <main className="px-4 sm:px-6 lg:px-8 pb-16 space-y-16">
        {filteredPortfolioData.length > 0 ? (
          filteredPortfolioData
            .filter(
              (category) =>
                category.references && category.references.length > 0
            )
            .map((category) => (
              <section key={category.categoryTitle}>
                <h2 className="text-3xl font-semibold text-white mb-8 border-b-2 border-[#d4af37] pb-2 inline-block">
                  {category.categoryTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.references.map((item) => (
                    <div
                      key={item.id}
                      className="bg-zinc-800 rounded-lg shadow-xl overflow-hidden group flex flex-col"
                      onClick={() => openModal(item)} // onClick behavior modified in openModal
                      onKeyDown={(e) => e.key === "Enter" && openModal(item)}
                      role={item.spotifyEmbedSrc ? "article" : "button"} // Change role if not interactive
                      tabIndex={item.spotifyEmbedSrc ? -1 : 0} // Not focusable if not opening modal
                    >
                      {item.spotifyEmbedSrc ? (
                        <div className="p-1">
                          {" "}
                          {/* Added padding around Spotify iframe */}
                          <iframe
                            className="spotify-embed"
                            style={{ borderRadius: "12px" }}
                            src={item.spotifyEmbedSrc}
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            title={`${item.title} Spotify Embed`}
                          ></iframe>
                        </div>
                      ) : (
                        <div className="relative aspect-video">
                          <Image
                            src={
                              item.imgUrl
                                ? item.imgUrl
                                : item.videoUrl &&
                                  item.videoUrl.includes("youtube.com/watch?v=")
                                ? `https://img.youtube.com/vi/${
                                    item.videoUrl.split("v=")[1].split("&")[0]
                                  }/hqdefault.jpg`
                                : `/placeholder.svg?width=600&height=338&query=${encodeURIComponent(
                                    item.title + " project thumbnail"
                                  )}`
                            }
                            alt={`${item.title} thumbnail`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                            <Youtube className="w-16 h-16 text-white/70 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                      )}
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-sm text-zinc-400 mb-2">
                            {item.subtitle}
                          </p>
                        )}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-auto pt-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-zinc-900 text-zinc-300 text-xs font-medium px-3 py-1 rounded-full border border-zinc-700 hover:border-zinc-600 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))
        ) : (
          <p className="text-center text-zinc-400 text-lg">
            Aucun projet trouvé pour cette catégorie.
          </p>
        )}
      </main>

      <ReferenceModal reference={selectedReference} onClose={closeModal} />
    </div>
  );
}
