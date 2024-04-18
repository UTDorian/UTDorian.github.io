let largeurEcran = window.innerWidth;
let larg = largeurEcran / 2 - 200
document.documentElement.style.setProperty('--largeur-ecran', `${largeurEcran}px`);
document.documentElement.style.setProperty('--largeur', `${larg}px`);