import {maison,epicerie,amine,oeuf,huile,poivre,lait,fromage,bol,couteau,poele,nullePart} from './instances.js'

nullePart.personne.push(amine);
amine.lieu = nullePart
amine.seDeplacer (nullePart, maison)
amine.seDeplacer(maison, epicerie)

amine.prendrePanier(epicerie)

amine.acheter(epicerie)

amine.seDeplacer(epicerie, maison)

amine.vider()

console.log(bol)

amine.seDeplacer(maison,epicerie)
amine.remettrePanier(epicerie)

amine.seDeplacer(epicerie, maison)

amine.couper();

console.log(amine);

console.log(bol);

amine.melanger('omelette');

console.log(bol);

amine.viderBol();

console.log(bol);
console.log(poele);

poele.cuir();

console.log(poele.contenu[0]);

setTimeout(()=> {
    console.log(poele.contenu[0]);
}, 4000); 