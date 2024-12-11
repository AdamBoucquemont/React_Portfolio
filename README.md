# Portfolio de Développeur - Adam Boucquemont 🚀

## Qu'est-ce que c'est ?

Ce portfolio est ma vitrine personnelle en ligne, conçue pour présenter mes projets passés, mon parcours professionnel, mes compétences techniques et bien plus encore.

**Ce portfolio est basé sur un template open-source.** J'ai personnalisé ce template pour refléter mon profil et mes réalisations. L'original, créé par un contributeur open-source, est disponible gratuitement sans attribution obligatoire. Vous pouvez le retrouver ici : [Developer Portfolio Template](https://github.com/yujisatojr/react-portfolio-template)


## Installation rapide

Pour tester ou modifier ce portfolio, suivez les étapes ci-dessous :

1. Assurez-vous que [Node.js](https://nodejs.org/) est installé sur votre machine. Vérifiez votre installation en exécutant :

    ```bash
    node -v
    ```

2. Dans le répertoire du projet, installez les dépendances :

    ```bash
    npm install
    ```

3. Lancez le serveur de développement :

    ```bash
    npm start
    ```

4. Ouvrez [http://localhost:3000](http://localhost:3000) pour afficher l'application dans votre navigateur.

5. Personnalisez le template en naviguant vers le répertoire `/src/components`. Modifiez les textes, images et autres informations selon vos besoins.

La page se rechargera automatiquement si vous effectuez des modifications, et les erreurs de lint s'afficheront dans la console.

Si vous souhaitez créer des images de maquette pour les sections de projets, je recommande l'outil [Genmoo](https://gemoo.com/tools/browser-mockup-generator/) qui permet de générer des maquettes de navigateurs gratuitement.

## Déploiement

Vous pouvez choisir votre service préféré (par exemple, [Netlify](https://www.netlify.com/), [Render](https://render.com/), [Heroku](https://www.heroku.com/)) pour déployer ce portfolio. Une des solutions les plus simples est d'utiliser GitHub Pages. Suivez les instructions ci-dessous pour effectuer un déploiement en production.

1. **Créez un dépôt GitHub**

    Créez un nouveau dépôt sur GitHub pour votre application de portfolio.

2. **Configurez `package.json`**

    Modifiez les propriétés suivantes dans le fichier `package.json` :

    ```json
    {
        "homepage": "https://votreutilisateur.github.io/votre-repo",
        "scripts": {
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build",
            ...
        }
    }
    ```

    Remplacez `votreutilisateur` par votre nom d'utilisateur GitHub et `votre-repo` par le nom de votre dépôt GitHub.

3. **Déployez sur GitHub Pages**

    Exécutez la commande suivante pour déployer votre application :

    ```bash
    npm run deploy
    ```

4. **Accédez à votre application déployée**

    Une fois le déploiement réussi, vous pouvez accéder à votre application à l'adresse `https://votreutilisateur.github.io/votre-repo`.
