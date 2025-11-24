const images = [
  "1-Dos droite.jpg",
  "2-Face gauche.jpg",
  "3-Dos gauche.jpg",
  "4-Face milieu.jpg",
  "5-Face droite.jpg",
  "6-Dos milieu V5.jpg"
];

let currentIndex = 0;
const flipper = document.getElementById('flipper');

// Fonction pour mettre à jour le contenu des images
function setImages() {
  // Met à jour les sources des images
  const imgElements = document.querySelectorAll('.flyer-img');
  imgElements[0].src = images[currentIndex];
  imgElements[1].src = images[(currentIndex + 1) % images.length];
}

// Fonction pour déplacer les images horizontalement
function slideTo(nextIndex) {
  // Appliquer la transition pour faire glisser
  flipper.style.transition = 'transform 0.8s ease-in-out';
  flipper.style.transform = `translateX(-${nextIndex * 100}%)`;

  // Mettre à jour l'index après l'animation
  currentIndex = nextIndex;
  setImages();
}

// Initialisation des images lors du chargement de la page
window.onload = () => {
  setImages();
};

// Clic sur le bouton "suivant"
document.getElementById('next').onclick = () => {
  const nextIndex = (currentIndex + 1) % images.length;
  slideTo(nextIndex);
};

// Clic sur le bouton "précédent"
document.getElementById('prev').onclick = () => {
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  slideTo(prevIndex);
};
