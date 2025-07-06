"use client";

import { useState } from "react";
import {
  School,
  Mic,
  Briefcase,
  Code,
  Star,
  Palette,
  ArrowRight,
  Layers,
  Users,
  Building,
} from "lucide-react";
import Image from "next/image";
import ReferenceModal, { type Reference } from "@/components/reference-modal";

const timelineEvents = [
  {
    icon: Users,
    date: "Expérience récente",
    title: "Expérience chez FeelingJack.eu, Édimbourg",
    description:
      "Conception et développement d'une application SaaS événementiel pour la gestion des bénévoles (Proof of Concept : Marathon du Lac d'Annecy). Mise en place d'une Clean Architecture avec optimisations API (+40% de vélocité), création de dashboards avec gestion des rôles utilisateurs et filtres géolocalisés. Stack : Next.js, Strapi V5, TypeScript, TailWind CSS, déployé sur Digital Ocean/AWS.",
    color: "text-indigo-400",
  },
  {
    icon: Building,
    date: "2022",
    title: "Développeur Drupal chez Smile, Lille",
    description:
      "Expérience en développement Drupal au sein de l'agence Smile.",
    color: "text-cyan-400",
  },
  {
    icon: Code,
    date: "Reconversion dès 2021",
    title:
      "Formation Développeur Web (Bac + 2, obtenu) + Formation CDA Java/SpringBoot/Maven, Amiens",
    description:
      "Acquisition de compétences en développement (Java, Spring, POO, Jira, Git) pour mieux comprendre les enjeux techniques et collaborer efficacement sur les projets professionnels (Saas, Applications).",
    color: "text-orange-400",
  },
  {
    icon: Briefcase,
    date: "2017 - 2021",
    title: "Ingénieur du Son Freelance, Amiens",
    description:
      "Lancement de mon activité indépendante, accompagnant artistes, entreprises et créateurs dans leurs projets audio. Complété par la formation 'Créer - reprendre une entreprise' (BGE, 2018, Certificat Obtenu).",
    bulletPoints: [
      "Répondre au besoin urgent du client",
      "Exigence élevée quant au rendu du travail",
      "Deadlines à respecter",
    ],
    color: "text-emerald-400",
  },
  {
    icon: Star,
    date: "Perfectionnement",
    title: "Formations au Studio C&P, Lille",
    description:
      "Spécialisation sur les techniques avancées de mixage et mastering avec des professionnels reconnus.",
    color: "text-yellow-400",
  },
  {
    icon: Mic,
    date: "2014 - 2017",
    title: "Expérience en Studio d'Enregistrement, St-Quentin",
    description:
      "Premières armes en environnement professionnel, gestion de sessions d'enregistrement et assistance au mixage + accueil client, encaissements, résolution de problèmes.",
    color: "text-purple-400",
  },
  {
    icon: School,
    date: "Expérience 2011 à 2013",
    title: "Technicien Audiovisuel, UPJV Amiens",
    description:
      "Prise de vues, montage vidéo, aide aux enseignants lors des cours ou d'évènements.",
    color: "text-blue-400",
  },
];

const notableAchievements: Reference[] = [
  {
    id: "amandine-voix-off",
    title: "Site Web pour Amandine Voix Off (2025)",
    subtitle: "Stack: Next.js, Vercel, Prisma",
    description:
      "Développement complet du site vitrine pour une artiste voix-off professionnelle, incluant une interface type CRM de gestion personnelle de ses vidéos, de ses audios, mise en place d'un calendrier cal.com, design moderne, un portfolio audio et un système de contact. Choix des vidéos avec la cliente + montage vidéo.",
    imageUrl: "/img/amandine-voix-off-v2.png",
    websiteUrl: "https://www.amandine-voix-off.com",
    tags: ["Next.js", "Vercel", "Prisma", "Web Design", "Neon"],
    icon: Palette,
    color: "text-rose-400",
  },
  {
    id: "feelingjack-activcreew",
    title: "Saas Evenementiel ActivCreew pour Feelingjack.eu",
    subtitle: "Client: Édimbourg | Équipe: 8 développeurs",
    description: `
<p>Je participe activement à la conception et au développement de cette application afin de simplifier la gestion des bénévoles sur l'évènement du Marathon du Lac d'Annecy qui nous sert de "Proof of Concept" pour cette application.</p>
<p class="mt-3"><strong>Architecture & Performance :</strong> Clean Architecture avec séparation claire des logiques métier, optimisation des requêtes API et gestion de la mise en cache (+40% de gain en vélocité).</p>
<p class="mt-3"><strong>Développement Frontend :</strong> Création des Dashboard avec fonctionnalités spécifiques aux rôles utilisateurs, implémentation des filtres de recherche géolocalisés et développement de l'interface de configuration pour les administrateurs.</p>
<p class="mt-3"><strong>Stack :</strong> Next.js, Strapi V5, TypeScript, TailWind CSS, ShadCN, TanStack, Radix UI, Digital Ocean, AWS, GitLab, Docker.</p>
`,
    imageUrl: "/img/activcreew-screenshot.png",
    websiteUrl: "https://activcreew.app/",
    tags: ["Next.js", "TypeScript", "Strapi", "Teamwork", "Clean Architecture"],
    icon: Users,
    color: "text-cyan-400",
  },
];

const VercelIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 inline-block mr-2"
  >
    <title>Vercel</title>
    <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
  </svg>
);

const NeonIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 inline-block mr-2"
  >
    <title>Neon</title>
    <path
      d="M12 24C5.373 24 0 18.627 0 12 0s12 5.373 12 12-5.373 12-12 12zm-3.37-10.822h6.74v-2.356h-6.74v2.356zm0 4.444h6.74v-2.356h-6.74v2.356z"
      fill="#00E599"
    />
  </svg>
);

const StrapiIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 inline-block mr-2"
  >
    <title>Strapi</title>
    <path
      d="M20.88 3.12a.8.8 0 00-.8-.8H3.92a.8.8 0 00-.8.8v16.96a.8.8 0 00.8.8h16.16a.8.8 0 00.8-.8V3.12zM9.28 18.4V5.6h1.6v12.8H9.28zm3.84-12.8v1.6h1.6V7.2h-1.6zm0 3.2v1.6h1.6V10.4h-1.6zm0 3.2v1.6h1.6v-1.6h-1.6zm0 3.2v1.6h1.6v-1.6h-1.6z"
      fill="#8c4bff"
    />
  </svg>
);

export default function QuiSuisJePage() {
  const [selectedReference, setSelectedReference] = useState<Reference | null>(
    null
  );

  const openModal = (reference: Reference) => {
    setSelectedReference(reference);
  };

  const closeModal = () => {
    setSelectedReference(null);
  };

  const webProjects = notableAchievements.filter(
    (p) => p.id === "amandine-voix-off" || p.id === "feelingjack-activcreew"
  );

  return (
    <>
      <div className="bg-[#121212] text-white min-h-screen">
        <header className="py-16 md:py-24 text-center bg-zinc-900/30">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Jérôme Albrecht
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Mon <span className="text-[#d4af37]">Parcours dans la Tech</span>
            </h1>
            <p className="text-zinc-300 mt-6 text-lg md:text-xl max-w-3xl mx-auto">
              De la passion pour la musique à l'expertise technique. Un
              cheminement dédié à la création d'expériences sonores uniques,
              enrichi par une double compétence en audio et en développement.
            </p>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Timeline Section */}
          <div className="relative border-l-2 border-zinc-700 ml-6 max-w-3xl mx-auto">
            {timelineEvents.map((event, index) => (
              <div key={index} className="mb-12 pl-12 relative">
                <div
                  className={`absolute -left-6 top-1 bg-zinc-800 p-2.5 rounded-full border-2 border-zinc-700 ${event.color}`}
                >
                  <event.icon className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-zinc-400 mb-1">
                  {event.date}
                </p>
                <h2 className="text-xl font-bold text-white mb-2">
                  {event.title}
                </h2>
                <p className="text-zinc-300 leading-relaxed">
                  {event.description}
                </p>
                {event.bulletPoints && (
                  <ul className="mt-4 space-y-2 text-zinc-300">
                    {event.bulletPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center">
                        <span className="text-[#d4af37] mr-2">•</span>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="mt-20 pt-16 border-t border-zinc-800">
            <h2 className="text-3xl font-bold text-center mb-12">
              Quelques{" "}
              <span className="text-[#d4af37]">Réalisations Notables</span>
            </h2>
            <div className="space-y-16">
              {webProjects.map((achievement) => (
                <div key={achievement.id}>
                  <div className="bg-zinc-800/30 p-6 md:p-8 rounded-2xl">
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 items-start">
                      <div>
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`p-3 rounded-full bg-zinc-900 ${achievement.color}`}
                          >
                            {achievement.icon && (
                              <achievement.icon className="w-6 h-6" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-xl">
                              {achievement.title}
                            </h3>
                            <p className="text-zinc-400 text-sm">
                              {achievement.subtitle}
                            </p>
                          </div>
                        </div>
                        <div
                          className="text-zinc-300 text-sm mb-6 space-y-4"
                          dangerouslySetInnerHTML={{
                            __html: achievement.description,
                          }}
                        />
                      </div>
                      <div>
                        <div className="bg-zinc-900/70 p-4 rounded-lg border border-zinc-700 text-sm">
                          <p className="text-zinc-400 mb-3 font-mono text-xs">
                            CONTEXTE & STACK
                          </p>
                          {achievement.id === "amandine-voix-off" ? (
                            <ul className="space-y-2 text-zinc-300">
                              <li className="flex items-center">
                                <Mic
                                  size={16}
                                  className="inline-block mr-2 text-rose-400"
                                />
                                <span>Media Voix Off</span>
                              </li>
                              <li className="flex items-center">
                                <Layers
                                  size={16}
                                  className="inline-block mr-2 text-sky-400"
                                />
                                <span>Stack TS - Next JS - Prisma</span>
                              </li>
                              <li className="flex items-center">
                                <NeonIcon />
                                <span>Base de données Neon.tech</span>
                              </li>
                              <li className="flex items-center">
                                <VercelIcon />
                                <span>Déploiement Vercel</span>
                              </li>
                            </ul>
                          ) : (
                            <ul className="space-y-2 text-zinc-300">
                              <li className="flex items-center">
                                <Layers
                                  size={16}
                                  className="inline-block mr-2 text-cyan-400"
                                />
                                <span>Stack: Next.js + TypeScript</span>
                              </li>
                              <li className="flex items-center">
                                <StrapiIcon />
                                <span>CMS Headless: Strapi</span>
                              </li>
                              <li className="flex items-center">
                                <Users
                                  size={16}
                                  className="inline-block mr-2 text-zinc-400"
                                />
                                <span>Équipe de 8 développeurs</span>
                              </li>
                            </ul>
                          )}
                        </div>
                        {achievement.id === "amandine-voix-off" ? (
                          <span className="inline-flex items-center mt-6 text-sm font-semibold text-[#d4af37]">
                            Développement en cours
                          </span>
                        ) : (
                          <a
                            href={achievement.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-6 text-sm font-semibold text-[#d4af37] hover:text-yellow-400"
                          >
                            Visiter le site{" "}
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 rounded-lg overflow-hidden shadow-2xl border-2 border-zinc-800">
                    <Image
                      src={achievement.imageUrl || ""}
                      alt={`Screenshot of ${achievement.title}`}
                      width={1200}
                      height={675}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Recommendations Section */}
          <div className="mt-20 pt-16 border-t border-zinc-800">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-[#d4af37]">Recommandations</span> Clients
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-zinc-800/30 p-6 md:p-8 rounded-2xl border border-zinc-700">
                <Image
                  src="/img/recos.png"
                  alt="Recommandations LinkedIn de clients satisfaits"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-zinc-400 text-sm mt-4 text-center">
                  Témoignages de clients sur LinkedIn - Projets de développement
                  web et refonte de sites
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <ReferenceModal reference={selectedReference} onClose={closeModal} />
    </>
  );
}
