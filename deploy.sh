
#!/usr/bin/env bash

# Script de déploiement pour GitHub Pages

# Build du projet
npm run build

# Navigation vers le dossier de build
cd dist

# Initialisation d'un nouveau repo git dans le dossier dist
git init
git add -A
git commit -m 'deploy'

# Pousser vers la branche gh-pages
git push -f https://github.com/VOTRE-USERNAME/NOM-DE-VOTRE-REPO.git main:gh-pages

cd -
