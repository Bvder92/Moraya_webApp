# Conciergerie de Luxe Airbnb - Maroc

Landing page moderne et premium pour une conciergerie de luxe Airbnb au Maroc, avec un design inspiré de Marrakech.

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🎨 Design

- **Palette de couleurs** : Terracotta, ocre, sable, vert zellige, bleu Majorelle, touches dorées
- **Typography** : Georgia pour les titres, système de polices pour le texte
- **Animations** : Fade-in et slide-up au scroll
- **Responsive** : Design adaptatif pour mobile, tablette et desktop

## 📁 Structure

```
├── assets/
│   ├── images/
│   └── videos/
├── src/
│   ├── components/
│   │   ├── HeroVideo.jsx
│   │   ├── Section.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── PropertyTypeCard.jsx
│   │   ├── CTAForm.jsx
│   │   ├── Footer.jsx
│   │   └── Stats.jsx
│   ├── pages/
│   │   └── LandingPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
└── package.json
```

## ✨ Fonctionnalités

- Hero section avec vidéo en fond (autoplay, muted, loop)
- Section statistiques avec animations
- Types de propriétés (Appartements, Riads, Villas)
- Services détaillés en grille
- Sections images + texte alternées
- Formulaire de contact CTA
- Footer minimaliste

## 🛠️ Technologies

- React 18
- Vite
- Tailwind CSS
- CSS animations (pas de dépendances lourdes)

## 📝 Notes

Les assets (images et vidéos) sont déjà inclus dans le projet. Les imports dans `LandingPage.jsx` utilisent les chemins relatifs vers ces fichiers.
