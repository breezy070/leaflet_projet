# leaflet_projet

Ce qui manque à faire:
    - En ce moment les markers sont écrits en dur en format JSON, il manque le faire avec une BDD
    - Le tri, je voulais commencer par le tri des "favoris" mais je n'ai pas réussi à le finir. Il manque aussi le tri par prix.
    - Le mode admin pour rajouter des markers
    - des modals pour chaque "offre", un sort de "more information" sur chaque offre quand on clique dessus


En ce moment, ma webapp arrive à trier la liste d'offres en se basant sur les offres qui sont visibles sur la carte. Elle se mets à jours à chaque fois qu'on glisse/zoom la carte. J'ai ajouté des "coeurs" pour les favoris, l'idée etait que l'on puisse "toggle" le favoris en cliquant sur le coeur. J'avais réussir à le faire toggle, mais cette nouvelle valeur ne changait pas la vrai valeur en "backend", si on faisait un refresh, on perdait les favoris, donc j'ai laissé tombé cette fonction.
