# Tp à trou Galactika 



## Installation du projet 
```
git clone || npx create-react-app galactikaTp (copy/paste)
npm i
yarn add react-spring
npm install three 
npm install --save three-orbitcontrols-ts
npm install @react-spring/parallax
npm install bootstrap
```
## Missions 

Vous devez reproduire le site hebergé ici : http://mitnoos.com/galactika ! Le but n'est pas de le reproduire à l'identique mais de ne pas perdre de contenu. Le contenu peu etre detaillé comme suit : 

## Règles et résultat 

Vous avez 55min pour essayé de réaliser le plus possible de ce projet. 
Le projet est réalisé en binome nous conseillons de se repartir certaines missions. 

## Interface et spring 

Reproduire une page contenant 3 layers de parallax dont un sticky header (Dans App.js) 
https://react-spring.io/components/parallax

Reproduire les animations du layer 1 (le titre) (dans layer1.js et layer1.css) pas besoin d’etre à l’identique il faut juste 3 elements avec des animations différentes et un rendu sympa 
https://react-spring.io/common/props

Reproduire les animations du layer 2 (les regles)  (dans layer2.js et layer2.css)
A nouveau la reproduction à l’identique n’est pas attendue 

## 3D layer 

Afficher une sphere :
https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry

Verifier que vous pouvez changer sa couleur en passant votre souris par dessus (raycaster dans la main boucle + changeColor ) 

Définir la fonction de création d’une sphere  (createSphere)

Afficher un soleil et une sphère (createSun & createSphere )

Faire se deplacer une sphère selon x,y en direction du soleil   (moveToCenter) 

Faire générer cette sphère depuis le bord d’un cercle d’un rayon définis (GenerateAroundCircle)

Gerer une collision (Boucle main & intersect() )

Faire se générer et deplacer les sphères selon x,y,z (moveToCenter2 & GenerateAroundSphere) 

Augmente le level si deux sphères de mêmes couleur (sameColor , levelUpdate )

Augmenter la difficulté si 10 level sont passés et l’utiliser comme variable d’un nombre de boule à générer  (levelupdate & generateFromDiff ) 

Rajouter 3 vie et la possibilité de fin de partie (restart main boucle ) 

Rajouter la possiblité de mettre en pause et de redémarrer 

## Composant react parent/enfant 

Dans les deux cas il s’agit de faire passer au composant une props depuis layerthree.js 

Hud : contient deux balises txt une pour la vie et une pour le score

Message : s’affiche si il y a pause ou restart et contient une seul balise txt