# Parc informatique

Application Vue.js 3 de gestion d'un parc d'ordinateurs. Elle fonctionne entièrement côté navigateur, sans serveur ni base de données externe.

## Installation

```sh
npm install
```

## Développement

```sh
npm run dev
```

Puis ouvrir l'URL indiquée par Vite (généralement `http://localhost:5173`).

## Vérification et production

```sh
npm run build
npm run preview
```

## Fonctionnalités

- Liste des ordinateurs sous forme de cartes avec photo et caractéristiques.
- Ajout et modification via un formulaire commun.
- Validation du modèle et du processeur, et contrôle des valeurs positives pour la mémoire et le disque.
- Suppression avec confirmation.
- Recherche par modèle ou processeur.
- Tri par capacité mémoire et compteur d'ordinateurs.
- Sauvegarde et restauration automatique avec `localStorage`.

## Organisation

- `src/components/OrdinateurCard.vue` : carte réutilisable et événements d'action.
- `src/views/ListeOrdinateurs.vue` : liste, recherche, tri et suppression.
- `src/views/EditOrdinateur.vue` : formulaire d'ajout et de modification.
- `src/router/index.ts` : routes de l'application.
- `public/images/` : photos locales des ordinateurs.
