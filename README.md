# ORION_PHASE_1_FRONT
1
Angular : version 16.2.2

Node version 18.10.0

NPM 8.19.2

figma : https://www.figma.com/file/dyORu3IC2UCVOHyYuT4kL9/ASOR44?type=design&mode=design&t=UisBu7DMS5fgRlk1-1

[![Build and deploy Node.js app to Azure Web App - asor](https://github.com/asor44/ORION_PHASE_1_FRONT/actions/workflows/prod_asor.yml/badge.svg?branch=PROD)](https://github.com/asor44/ORION_PHASE_1_FRONT/actions/workflows/prod_asor.yml)


demarrer le service :
    - ng serve ou npm start

installation :
    - cd Orion_front
    - npm install

Benoit: 
    - tailwin pour finir le header
    - page inscription à finir pour le retour école
        - recherche adresse postale depuis une api afin de pre-remplire le formulaire d'inscription
        - preparer une doc pour elouan pour envoi de mail de confirmation
        - faire la doc utilisateur dans le wiki
        - faire la doc tech dans le wiki
    - page contacte à finir pour le 30 octobre
        - 

    - page actu a finir pour le 06 novembre
        - 

Elouan:
    - Faire un docker pour contenire l'app
        - conteneur 1 : bdd
        - conteneur 2 : media
        - conteneur 3 : angular / node / ...
        - conteneur 4 : page ?

    - faire une BDD temporaire afin d'avoir la page connexion operationel (token compris)

Melissa:
    - page partenairs à finir pour le retour école
        - des texte seront inseré face aux logo des partenaires afin de les remercier
        - les logo doivent renvoyer sur les sites internet des partenaires si ils existent

    - page porte drapeau a finir pour le 29 octobre
        - 

Erwan:
    - faire un docker temporaire pour contenir l'app en divisant les charges par plusieurs conteneurs
        - un conteneurs pour l'environnement de travail est a construire
    
    - modifier l'home page pour avoir la page connexion en premier
        - une fois connecter, re-direction vers la page ACC (voir avec Elouan pour creer les routes necessaires)

    - page grade a finir pour le retour école

    - toutes les autres pages
        - les creer en pages blanche avec juste le titre de la page afin de creer les routes et faire les liens entres les pages

