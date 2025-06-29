import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Cpu, Gamepad2, Code2 } from "lucide-react";

export default function SoundDesignJeuxVideoPage() {
  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <header className="py-16 md:py-24 text-center bg-zinc-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Sound Design & Audio{" "}
            <span className="text-[#d4af37]">pour Jeux Vidéo</span>
          </h1>
          <p className="text-zinc-300 mt-6 text-lg md:text-xl max-w-2xl mx-auto">
            Création d'univers sonores immersifs et interactifs qui donnent vie
            à vos jeux. De la conception à l'intégration, une expertise complète
            au service de votre vision.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-6 flex items-center">
              <Cpu className="w-8 h-8 mr-3 text-[#d4af37]" />
              Environnement de Travail Optimisé
            </h2>
            <p className="text-zinc-300 mb-4 leading-relaxed">
              Pour garantir une performance et une flexibilité maximales, je
              travaille sur un environnement{" "}
              <strong className="text-white">
                Shadow PC haute performance
              </strong>
              . Cela me permet d'utiliser les logiciels les plus gourmands et de
              m'adapter rapidement à vos pipelines de production.
            </p>
            <p className="text-zinc-300 mb-4 leading-relaxed">
              L'intégration avec <strong className="text-white">Unity</strong>{" "}
              est native, avec le moteur et les outils audio essentiels déjà
              configurés et prêts à l'emploi.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 shrink-0" />
                <span className="text-zinc-300">
                  Shadow PC pour puissance et accès distant.
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 shrink-0" />
                <span className="text-zinc-300">
                  Unity pré-installé et maîtrisé.
                </span>
              </div>
            </div>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg shadow-xl aspect-video flex items-center justify-center">
            {/* Placeholder for Screenshot */}
            <Image
              src="/img/unity.webp"
              alt="Espace de travail Unity pour l'audio de jeu"
              width={600}
              height={338}
              className="rounded-md object-cover"
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-white mb-6 flex items-center">
            <Gamepad2 className="w-8 h-8 mr-3 text-[#d4af37]" />
            Adaptabilité & Intégration Moteur
          </h2>
          <p className="text-zinc-300 mb-4 leading-relaxed">
            Au-delà d'Unity, je possède une grande capacité d'adaptation aux
            principaux moteurs de jeu et middlewares audio du marché. Que votre
            projet soit sur{" "}
            <strong className="text-white">Unreal Engine</strong>, ou que vous
            utilisiez <strong className="text-white">Wwise</strong> ou{" "}
            <strong className="text-white">FMOD</strong>, je peux m'intégrer
            efficacement à vos outils.
          </p>
          <ul className="space-y-3 text-zinc-300 list-inside">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 shrink-0" />
              <span>Familiarité avec Unreal Engine et ses outils audio.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 shrink-0" />
              <span>
                Expérience avec les middlewares audio Wwise et FMOD pour une
                gestion audio avancée.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 shrink-0" />
              <span>
                Approche collaborative pour une intégration fluide dans votre
                workflow.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-white mb-6 flex items-center">
            <Code2 className="w-8 h-8 mr-3 text-[#d4af37]" />
            Une Touche de Programmation
          </h2>
          <p className="text-zinc-300 mb-4 leading-relaxed">
            Mon expérience en{" "}
            <strong className="text-white">
              programmation (C#, JavaScript, Java, scripting)
            </strong>{" "}
            et mes bases en{" "}
            <strong className="text-white">React et React Native</strong> sont
            des atouts majeurs. Ils me permettent de comprendre les aspects
            techniques de l'intégration audio, de prototyper des systèmes
            sonores interactifs et de communiquer plus efficacement avec les
            équipes de développement.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Cela se traduit par une meilleure anticipation des besoins, une
            résolution de problèmes plus rapide et une capacité à pousser la
            créativité sonore grâce à une compréhension des possibilités
            techniques.
          </p>
        </section>

        <section className="text-center pt-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Prêt à donner une dimension sonore unique à votre jeu ?
          </h2>
          <Link
            href="/tarifs#contact" // Assuming you have a contact section on your tarifs page or a dedicated contact page
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#d4af37] hover:bg-yellow-500 transition-colors"
          >
            Discutons de votre projet <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </section>
      </main>

      <footer className="text-center py-12 text-zinc-500 text-sm border-t border-zinc-800">
        Studio Couleur de Son - Expertise en Audio pour Jeux Vidéo
      </footer>
    </div>
  );
}
