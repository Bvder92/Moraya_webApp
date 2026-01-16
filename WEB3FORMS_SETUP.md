# Configuration Web3Forms pour la réception des formulaires

Web3Forms est une solution **ultra-simple** et **gratuite** pour recevoir les soumissions de formulaire par email. Aucun compte n'est nécessaire !

## Configuration en 2 minutes

### 1. Obtenir votre clé d'accès

1. Allez sur [https://web3forms.com](https://web3forms.com)
2. Entrez votre email : **badragrad@gmail.com**
3. Cliquez sur "Get Access Key"
4. Copiez la clé d'accès générée (elle ressemble à : `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### 2. Configurer votre projet

1. Créez un fichier `.env` à la racine du projet
2. Ajoutez votre clé d'accès :

```env
VITE_WEB3FORMS_KEY=votre_clé_d_accès_ici
```

3. Redémarrez le serveur de développement (`npm run dev`)

## C'est tout ! 🎉

Dès que vous avez ajouté la clé, le formulaire enverra automatiquement les soumissions à **badragrad@gmail.com**.

## Avantages de Web3Forms

- ✅ **Gratuit** : 250 soumissions/mois
- ✅ **Aucun compte nécessaire** : juste une clé API
- ✅ **Configuration en 30 secondes**
- ✅ **Pas de backend requis**
- ✅ **Protection anti-spam intégrée**

## Test

Testez le formulaire sur votre site. Vous devriez recevoir un email à `badragrad@gmail.com` avec toutes les informations du formulaire.

## Notes

- Le plan gratuit permet 250 soumissions/mois
- Les emails sont envoyés directement à l'adresse que vous avez spécifiée lors de la génération de la clé
- La clé est publique (c'est normal, elle est liée à votre email)
