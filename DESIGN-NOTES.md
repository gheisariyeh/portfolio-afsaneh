# Portfolio — version bleue finale

Cette version applique la direction visuelle retenue : bleu profond / cobalt / bleu clair, cartes arrondies, ombres légères et mise en page éditoriale.

## Principales évolutions

- Navbar flottante et responsive.
- Hero entièrement retravaillé avec architecture backend plus claire.
- Palette bleue homogène via variables CSS globales.
- Section À propos sous forme de carte éditoriale avec monogramme temporaire AG.
- Projets en trois cartes visuelles avec liens GitHub directs.
- Compétences avec panneau bleu foncé sticky sur desktop et grille de cartes.
- Parcours professionnel modernisé.
- Formation présentée en timeline horizontale sur desktop.
- CTA final compact en dégradé bleu.
- Responsive mobile/tablette conservé.

## Photo

La zone visuelle de la section À propos utilise actuellement un monogramme AG volontairement neutre. Elle pourra être remplacée par une vraie photo plus tard sans changer le reste de la mise en page.

## Vérification

Les fichiers TypeScript et templates Angular ont été validés avec `ngc --noEmit`.
Le build CLI complet n'a pas pu être exécuté dans l'environnement de préparation car Node.js y est en version 22.16.0, alors qu'Angular CLI 22.1.5 exige au minimum Node 22.22.3 (ou une version 24 compatible).
