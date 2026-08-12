# Protégéo — Showcase

<p align="center">
  <img src="./src/assets/imgs/icon-logo-protegeo.png" alt="Logo Protégéo" width="180">
</p>

<p align="center">
  <strong>Maîtrisez le budget, facilitez la tutelle.</strong>
</p>

Protégéo est une application web conçue pour **faciliter l'organisation et le suivi des mesures de protection juridique des majeurs**.

Ce dépôt correspond à la **version publique front-end / Showcase** du projet Protégéo.

Il présente notamment l'interface publique, la conception UI/UX, l'architecture React et les composants développés pour le projet.

> **French project — README available in French only due to legal and contextual specificity.**

Protégéo s'inscrit dans un contexte juridique et administratif français lié notamment à la tutelle, la curatelle et à la gestion des majeurs protégés.
La documentation est donc principalement rédigée en français afin de conserver la terminologie métier appropriée.

---

## Objectif du projet

La gestion d'une mesure de protection peut nécessiter de centraliser de nombreuses informations administratives et financières.

Protégéo a été imaginé afin de proposer une interface :

* claire ;
* structurée ;
* rassurante ;
* accessible ;
* simple à utiliser au quotidien.

Le projet vise notamment à faciliter :

* la compréhension des mesures de protection ;
* l'accès aux ressources administratives utiles ;
* le suivi des personnes protégées ;
* l'organisation des informations importantes ;
* la préparation du budget prévisionnel ;
* le suivi des ressources et dépenses ;
* la préparation du compte de gestion annuel.

---

## Partie publique

La partie publique de Protégéo permet de consulter différentes ressources liées à la protection juridique des majeurs.

Elle comprend notamment :

* une page d'accueil ;
* une présentation des mesures de protection ;
* les aides et droits ;
* des modèles de documents ;
* les étapes à suivre après un jugement ;
* les contacts et sources officielles ;
* une présentation de Protégéo ;
* une FAQ ;
* un guide pédagogique sur le compte de gestion ;
* un formulaire de contact.

---

## Espace connecté

L'interface prévoit également un espace dédié au suivi des dossiers.

Les fonctionnalités développées ou prévues comprennent notamment :

* tableau de bord ;
* gestion des personnes protégées ;
* profil de la personne protégée ;
* jugement et mesure de protection ;
* famille et proches ;
* référents professionnels ;
* contacts utiles ;
* budget prévisionnel ;
* inventaire du patrimoine ;
* ressources et dépenses ;
* comptes bancaires ;
* compte de gestion annuel ;
* historique ;
* alertes et échéances.

---

## Stack technique

### Front-end

![React](https://img.shields.io/badge/React-61DAFB?logo=react\&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript\&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite\&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-663399?logo=css\&logoColor=white)

### Conception & outils

![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma\&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?logo=git\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github\&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?logo=visualstudiocode\&logoColor=white)

---

## Architecture du front-end

Le projet est organisé afin de favoriser la séparation des responsabilités, la réutilisation des composants et la maintenabilité du code.

```text
src/
├── assets/
│   └── imgs/
├── components/
├── data/
├── hooks/
├── pages/
├── routes/
├── services/
├── styles/
├── utils/
├── App.jsx
└── main.jsx
```

### Organisation

* `assets` : images, icônes et ressources visuelles ;
* `components` : composants React réutilisables ;
* `data` : données utilisées par l'interface ;
* `hooks` : hooks React personnalisés ;
* `pages` : pages de l'application ;
* `routes` : gestion du routing ;
* `services` : communication avec les services externes et l'API ;
* `styles` : fichiers CSS ;
* `utils` : fonctions utilitaires.

---

## Principes de développement

Une attention particulière est portée à :

* la factorisation des composants ;
* la séparation des responsabilités ;
* la réutilisabilité ;
* la lisibilité du code ;
* la cohérence entre les pages ;
* la maintenabilité ;
* l'évolution progressive de l'application.

---

## UI / UX

L'identité visuelle de Protégéo repose sur une interface volontairement sobre et rassurante.

### Palette principale

| Rôle       | Couleur      | Hex       |
| ---------- | ------------ | --------- |
| Primaire   | Bleu profond | `#003366` |
| Secondaire | Bleu clair   | `#0078A8` |
| Validation | Vert         | `#4CAF50` |
| Texte      | Gris foncé   | `#333333` |
| Fond       | Blanc        | `#FFFFFF` |
| Alerte     | Rouge        | `#D32F2F` |

La conception privilégie :

* des espaces aérés ;
* des parcours clairement identifiables ;
* une hiérarchie visuelle simple ;
* des composants cohérents ;
* une présentation progressive des informations.

Les maquettes et l'identité graphique ont été conçues avec **Figma**.

---

## Pourquoi un dépôt Showcase ?

Protégéo est un projet plus large comprenant également une application métier et une API.

Ce dépôt public est consacré principalement à la **présentation du front-end React**.

Il permet de présenter :

* l'interface publique ;
* les composants React ;
* la conception UI/UX ;
* l'organisation du projet ;
* la structure du code ;
* le responsive design ;
* l'évolution de l'interface.

Certaines parties du projet complet restent volontairement privées.

---

## Installation

### Prérequis

* Node.js
* npm
* Git

### Cloner le projet

```bash
git clone https://github.com/LorianaD/protegeo-showcase.git
cd protegeo-showcase
```

### Installer les dépendances

```bash
npm install
```

### Lancer le projet

```bash
npm run dev
```

### Générer le build de production

```bash
npm run build
```

---

## Variables d'environnement

Créer un fichier `.env` à partir du fichier `.env.example` lorsque cela est nécessaire.

```env
VITE_API_URL=
```

Les informations sensibles et les valeurs utilisées en production ne doivent pas être versionnées.

---

## Statut

🟡 **Projet en cours de développement**

L'interface évolue progressivement avec l'intégration des différentes pages et fonctionnalités du projet Protégéo.

---

## Avertissement

Protégéo est un **projet web indépendant**.

Il ne constitue ni un service public, ni un organisme administratif, ni un service juridique.

Les informations présentées ont une vocation informative et pédagogique.
Pour toute démarche officielle, l'utilisateur doit se référer aux organismes et sources institutionnelles compétentes.

---

## Autrice

**Loriana Diano**
Développeuse Web & Web Mobile

* Portfolio : [loriana.dianoholding.com](https://loriana.dianoholding.com)
* GitHub : [@LorianaD](https://github.com/LorianaD)
* LinkedIn : [Loriana Diano](https://www.linkedin.com/in/loriana-diano-33187ba8/)

---

© 2025–2026 Protégéo — Loriana Diano