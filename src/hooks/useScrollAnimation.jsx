import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  // 1. Une référence (ref) pour cibler l'élément HTML à surveiller
  const elementRef = useRef(null);
  // 2. Un état (state) pour savoir si l'élément est visible ou non
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Configuration de l'observateur du navigateur
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si l'élément entre dans l'écran (au moins à 10%)
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Une fois visible, on peut arrêter de l'observer
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      {
        threshold: 0.1, // Déclenchement quand 10% de l'élément est visible
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Nettoyage de l'observateur si le composant est détruit
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  // Le hook renvoie la référence à attacher et le statut de visibilité
  return [elementRef, isVisible];
};