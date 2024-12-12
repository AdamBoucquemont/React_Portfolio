import React, { useState } from "react";
import aubay_image from '../assets/images/Aubay.png';
import cilla_image from '../assets/images/CILLA.png'
import galactik_football_image from '../assets/images/Galactik Football.png';
import grytics_image from '../assets/images/Grytics.png';
import photimal_image from '../assets/images/Photimal.png'
import proxy_sante_image from '../assets/images/ProxySanté.png'
import warr_utt_image from '../assets/images/Warr\'UTT.png'
import no_image from '../assets/images/No_image_available.png'
import witch_hunt_image from '../assets/images/witch_hunt_carte.jpg'
import hopital_image from '../assets/images/simulation_hopital.png'
import mvc_image from '../assets/images/mvc.png'
import IndividualProject from "./IndividualProject";
import '../assets/styles/Project.scss';
import FilterMenu from "./FilterMenu";
import { useSelectedChips } from "../context/GlobalContext";

const allProjects = [
    {
        image: aubay_image,
        labels: ["Python", "React", "CSS", "Figma", "Fast API", "Git", "Jira", "Docker", "Méthodologie SCRUM", "NLP"],
        title: "Site internet C.E.A",
        resume: "Site internet servant d'interface un utilisateur et une Intelligence Artificielle pour la réalisation d'un état de l'art automatique.",
        contexte: "Cette application et cette Intelligence Artificielle ont étés développés lors de mon stage de fin d'étude à Aubay. Cette intelligence artificielle devait pouvoir réaliser des états de l'art de façon automatique.",
        etapes: ["Ce stage s'est déroulé en plusieures étapes. Tout d'abord, nous avions eu une étape d'état de l'art. Dans cette étape nous avons lu et lister tous les articles scientifiques qui nous ont semblés pertinents.",
            "Nous avons ensuite récupérés les meilleurs articles scientifiques pour tester les solutions apportés. Si cela nous convenait, nous les avons ensuite améliorer et adaptés à notre projet pour qu'ils soient le plus efficace possible. Nous avons également pu fusionner plusieurs méthodes pour réaliser le meilleur modèle possible.",
            "Ensuite, nous avons commencer à réaliser notre site. Il était important de savoir ce qu'il devait réaliser et comment il devait le faire. Nous avons donc dônc réalisé des wireframes et des maquettes avec Figma que nous avons fait le plus proche possible de ce que nous désirions réaliser.",
            "Après cela nous avons pu réellement développer l'application. Nous avons réalisé le côté frontend en React et le côté Backend en FastAPi, le tout relié à une base de donnée SQL. Afin de tout déployer facilement, nous avons également dockerisé notre application. Après cela, nous avns essayer d'avoir le maximum de retours possible pour avoir la meilleure application."
        ]
    },
    {
        image: cilla_image,
        labels: ["Figma"],
        title: "C.I.L.L.A",
        resume: "Ce court projet est une maquette d'une application permettant de réaliser des listes de courses.",
        contexte: "Ce projet a été réalisé en 2023 lors de la matière GE10 de ma formation à l'UTT. Il s'effectué par groupe de projet. Le but était de faire une maquette d'une application de liste de course en se démarquant des autres applications.",
        etapes: ["Pour commencer ce projet, nous devions réfléchir à la valeur ajouté de notre application et des fonctionnalités que cette dernière devait posséder. Ainsi nous avons lister plusieurs fonctionnalités comme le fait d'avoir des listes de courses partagés, d'avori des suggestions de recettes et de pouvoir directement ajouter les produits à la liste de course, de varier l'alimentation de base...",
            "Une fois toutes les fonctionnalités énumérés, nous avons fait la maquette la plus optimal possible en réalisant également les intéractions entre les différentes pages pour la rendre le plus efficiente possible."
        ]
    },
    {
        image: galactik_football_image,
        labels: ["HTML", "CSS", "Figma"],
        title: "Site Internet sur Galactik Football",
        url: "https://github.com/AdamBoucquemont/MM01---Site-Internet",
        resume: "Ce projet est un site internet en HTML et CSS sur le thème de Galactik Football.",
        contexte: "Ce projet a été réalisé en 2020 lors de la matière MM01. Il s'effectué par binome de projet. Je devais réaliser le site sur un thème souhaité par mon binome qui lui devait créer un site sur mon thème. Voici donc le site réalisé par moi sur son thème : Galactik Football.",
        etapes: ["Pour commencer, nous devions définir un thème et un cahier des charges. Cette étape permettait de définir toutes les informations importantes comme les pages souhaités, les couleurs voulus, les informations nécessaires, les effets désirés... C'est ce qui servait de fondation pour notre site.",
            "Ensuite, grâce au cahier des charges réalisé par notre binôme, nous devions réalisé le site demandé. Ce site possédait plusieures pages : la présentation de la série avec le générique, l'historique des saisons, la présentation des personnages importants, la présentation des fluides, une page de contacte, une page de quiz...",
            "Enfin, dans une ultime étape notre binome nous donnais son retour après lequel nous faisions les modifications nécessaires pour parfaire le site."
        ]
    },
    {
        image: grytics_image,
        labels: ["React", "CSS", "NodeJS", "Git", "Jira", "SQL", "Cypress"],
        title: "Grytics",
        resume: "Lors de cette mission, j'ai eu l'occasion d'occuper diverses missions sur une application React avec un backend en Node API et relié à des API.",
        contexte: "Toutes ces missions ont étés réalisé dans le cadre de mon premier stage de six mois à 1339 SAS - Grytics.",
        etapes: ["Dans une première phase de ce stage nous avons réalisés des tests automatiques d'un application react grâce à Cypress. Cypress nous permettait de simuler une utilisation humaine de l'application en faisant toutes les actions qu'un utilisateur pourrait faire et qui regardait si le bon résultat était affiché et si les bonnes données était chargées. Cela a permis de tester rapidement toute l'application à chaque fois qu'un changement était effectué dans le code source de l'application",
            "Lors d'une deuxième phase, j'ai eu l'opportunité de travailler directement sur l'application Grytics. En ajoutant des pages, la page d'erreur par exemple. Et en créant une API récupérant toutes les erreurs rencontrés et en créant un poste d'avertissement directement pour que le problème soit corrigé au plus vite."
        ]
    },
    {
        image: photimal_image,
        labels: ["Fimga", "React"],
        title: "Projet Photimal",
        resume: "Maquette d'une site web de photographie animalière. Cette maquette doit être modifié pour correspondre aux idées actuelles du projet et est projeté d'être transformé en réelle application web grâce à React.",
        contexte: "Cette maquête à été réalisé en 2022 lors de l'UE ISI02. C'est une maquette centré sur le côté persuasives et de gamification des applications. La maquette devait donc reprendre des codes de ces applications.",
        etapes: ["Pour ce projet, la première mission a été de lister tous les aspects persuasifs que je voulais intégrer à ma maquette. Cela comprenait par exemple une idée de collection qu'il fallait compléter, de scores, de notes des différentes photos, d'un systèmes de classement, d'une rareté des animaux...",
            "J'ai ensuite réalisé cette maquette entièrement naviguable avec Figma et je projette de réaliser une application web en React de ce projet."
        ]
    },
    {
        image: proxy_sante_image,
        labels: ["Fimga", "Jira"],
        title: "Proxy Santé",
        resume: "Maquette d'une application web permettant de mettre en relation des médecins avec des collectivités locales pour faire valoir des offres permettant de combler des déserts médicaux.",
        contexte: "Cette maquette a été réalisé par groupe projet de 5 lors de l'UE IF10 en 2023 grâce à Figma.",
        etapes: ["Pour réalise ce projet nous avons commencer par un travail de recherche en contactant des médecins, futurs médecins et collectivités locales ce qui était important pour eux, comment ils choisissent un poste ou comment ils mettent en avant le leur... Nous avons également regarder ce qui se faisait du côté des autres applications médicales...",
            "Une fois que nous avons fait tout cela, nous avons réalisé la maquette de cette application totalement fonctionnelle qui se voulait le plus intuitive possible. Cette maquette possède de nombreuses fonctionnalités comme le fait d'avoir une page pour chaque région pour mériter ses bienfaits. La possibilité de voir les postes les plus en crises, d'afficher clairement les avantages pour un poste, de trier par avantages, de contacter les médecins..."
        ]
    },
    {
        image: warr_utt_image,
        labels: ["Fimga"],
        title: "Warr'UTT",
        resume: "Cette maquette Figma permet de jouer au jeu Warr'UTT, jeu fictif de combat au tour par tour dans l'enceinte de l'UTT.",
        contexte: "Ce projet a été réalisé dans le cadre de l'UTT pour l'UE EG23 en 2022.",
        etapes: ["Ce projet a pour but de créer une interface permettant de joueur au jeu WAR’UTT. Ce jeu oppose deux joueurs symbolisant chacun une filière de l’UTT (ISI, RT, GM, GI, A2I, MTE et MM). Dans ce jeu, chacun des deux joueurs à 20 combattants ( 15 soldats qui sont les troupes de bases, 4 soldats d’élites qui sont des troupes un peu améliorées et le maître de guerre qui est la troupe la plus puissante du jeu). Chacune de ces troupes peut être amélioré grâce à 400 points distribuable par les deux joueurs. Ainsi la force, la dextérité, la constitution, l’initiative et la résistance peuvent être amélioré. Une fois les points distribués, il faut choisir 5 combattants réservistes. Ces combattants ne peuvent pas combattre directement et devrons attendre un peu avant de pouvoir accéder au champ de bataille. Il faut ensuite placer les 15 combattants restant dans les 5 zones de l’UTT dans lesquels il y aura des affrontements. Il y a donc la Hall sportive, le quartier administratif, le bureau des étudiants (BDE), la bibliothèque universitaire (BU) et la halle industrielle. Il faut au moins un combattant par zone.	Une fois que les deux joueurs ont placés tous leurs combattants, une mêlée générale se déclenche. Dans cette mêlée, les différents combattants peuvent attaquer ou se soigner. Une fois que tous les combattants d’une zone sont morts, une trêve est exigée. Pendant cette trêve, les deux joueurs peuvent ramener des soldats réservistes sur le combat ou alors ils peuvent déplacer les soldats d’une zone à l’autre. Une fois ces actions réalisées, une nouvelle mêlée éclate et ces actions se répètent en boucle. Le jeu s’arrête une fois qu’un joueur à contrôlé trois zones. ",
            "Le but de notre projet est donc de réaliser une interface facilement compréhensible afin que le jeu soit facile à prendre en main et amusant à jouer. Il faut donc donner un sens physique à toutes les actions qui peuvent être réaliser. "
        ]
    },
    {
        image: witch_hunt_image,
        labels: ["Java"],
        title: "Witch Hunt",
        url: 'https://github.com/AdamBoucquemont/WitchHunt',
        resume: "Ce projet est la version java du jeu de carte Witch Hunt, je de tour par tour se jouant entre 3 et 6 joueurs.",
        contexte: "Ce projet a été réalisé dans le cadre de l'UTT pour l'UE LO02 en 2021.",
        etapes: ["Ce jeu comporte  6 cartes identités (6 cartes ) et 12 cartes rumeurs. Le gagnant est le premier joueur à avoir 5 points. Ce projet a été réalisé en java orienté objet. La première étape du projet a donc été de construire chaque objet cela comprenait les différentes cartes mais aussi le joueur, la manche...",
            "Nous avons ensuite la classe la plus importante, la classe partie. En effet c'est dans cette classe qu'est présent la méthode main qui fait le déroulement de jeu. Dans cette classe nous avons développé toutes les intéractions entre les différentes classes. et c'est ce qui va permettre de vraiment construire le jeu, les différentes actions possibles...",
            " Ensuite, pour améliorer ce jeu, nous avons rajouté des ordinateurs qui pourrait jouer contre les utilisateurs. Ces ordinateurs peuvent avoir trois caractères : aggressif, défensif et aléatoire. Ainsi l'utilisateur pourra jouer seul ce qui rendra les parties plus dynamiques.",
            "Enfin, pour améliorer ce jeu, nous pourrions ajouter une interface graphique rendant le jeu plus vivant."
        ]
    },
    {
        image: hopital_image,
        labels: ["C"],
        title: "Simulation d'un Hôpital",
        url: 'https://github.com/AdamBoucquemont/ProjetFinal',
        resume: "Dans ce sujet le but est de simuler un service d’urgence pour voir à quelle heure passera chaque patient en fonction du nombre de patient étant à l’hôpital.",
        contexte: "Ce projet a été réalisé dans le cadre de l'UTT pour l'UE NF05 en 2020.",
        etapes: ["Ce projet permet de facilement suivre l'évolution d'un patient au sein d'un hôpital. Nous avons commencer par lire les données des utilisateurs contenus dans un fichier texte que nous avons placé dans un tableau.",
            "Après cela les différentes étapes du circuit ont étés simulés. Au fur et à mesure nous avions l'avancement de chaque personne dans l'hopital et el circuit qui a été pris."
        ]
    },
    {
        image: mvc_image,
        labels: ["PHP"],
        title: "Simulation d'un Hôpital",
        url: 'https://github.com/AdamBoucquemont/LO07---Projet-final',
        resume: "Ce projet est un site internet sur le modèle-vue-controller réalisé en PHP. Il simule la gestion de la pandémie e covid 19 en permettant de gérer els stocks de vaccin, les rendez vus, les centres...",
        contexte: "Ce projet a été réalisé dans le cadre de l'UTT pour l'UE LO07 en 2021.",
        etapes: ["Ce projet est un site web développé en PHP en suivant le modèle Modèle-Vue-Contrôleur (MVC). Il vise à simuler la gestion de la pandémie de COVID-19 en proposant une plateforme organisée et intuitive. Les utilisateurs peuvent gérer les stocks de vaccins, planifier les rendez-vous, et superviser les centres de vaccination. L’interface permet aux administrateurs de suivre l’évolution des stocks et des réservations en temps réel, tout en facilitant l'accès pour les citoyens."
        ]
    },
    {
        image: no_image,
        labels: ["Javascript", "Méthodologie SCRUM", "Git", "Jira"],
        title: "Gestion d'un emploi du temps",
        url: 'https://github.com/AdamBoucquemont/GL02---Projet-2',
        resume: "De projet parle de la gestion d'un emploi du temps en javascript. Dans ce projet, nous avons uniquement apporté des révisions et ajouter de nouvelles fonctionnalités plus ou moins complexes.",
        contexte: "La réalisation de ce projet s'est fait dans le cadre de l'UE GL02 de l'UTT pendant le semestre d'automne 2021.",
        etapes: ["Pour ce projet nous avons commencer par réaliser le cahier des charges de ce projet. 	Ce projet est lancé par l’université centrale de la république de Sealand et il doit permettre de simplifier l’utilisation des salles de classes ainsi que de d’aider l’organisation des étudiants et des professeurs. Pour ce faire, nous devons pouvoir intégrer un emploi du temps dans un format particulier (CRU) et traiter les informations reçues. L'emploi du temps sera composé de : un créneau, une salle, une capacité et un horaire. Ensuite, grâce à un utilitaire en invite de commande, nous devons pouvoir gérer toutes ces données, vérifier leurs pertinences (il ne doit pas y avoir de conflits et une salle ne peut être utilisé que par une personne à la fois) et accéder rapidement aux informations que l’on demande. Par exemple, on pourra demander si une salle est occupée, quand une salle sera libre, la capacité maximale d’une salle… Cela peut permettre de faciliter la vie des étudiants (ils peuvent savoir quelle salle est libre pour travailler…). Mais aussi aider la scolarité (aider à avoir des classes sans trop d’élèves ni pas assez). Cet utilitaire permettra également de générer un fichier iCalendar, pour les étudiants et les professeurs, avec tous les cours et TD auxquels ils participent pour le mettre directement dans leur logiciel d’agenda. Comme cela, tout le monde peut facilement suivre son programme.",
            "Une fois que l'autre équipe à développer l'paplication de gestion d'un emploi du temps, nous avons commencé par la tester pour voir si elle répondait à toute nos attentes et à toutes les spécifications que nous avions demandés. Ensuite, nous avons redévelopper les spécifications manquantes et apportés des améilorations à l'application. Par exemple, nous vons développé des méthodes pour voir qu'elles sont les salles qui sont sous chargé. Ou encore voir le temps qu'une salle est utilisé sur plusieurs jours."
        ]
    },
    {
        image: no_image,
        labels: ["Javascript", "Méthodologie SCRUM", "Git", "Jira"],
        title: "Gestion de questions pour un examen",
        url: 'https://github.com/AdamBoucquemont/LO07---Projet-final',
        resume: "Le but du projet est de pouvoir créer un questionnaire composé entre 15 et 20 questions à partir d'une banque de question donnée par le SYREM",
        contexte: "La réalisation de ce projet s'est fait dans le cadre de l'UE GL02 de l'UTT pendant le semestre d'automne 2021.",
        etapes: ["Ce projet fonctionne en paire avec le projet \"gestion d'un emploi du temps\". Le cahier des charges de ce projet à donc été réalisé par une autre équipe. Le cahier des charges coomprenait à la fois des exigences fonctionnelles et des exigences non fonctionnels.",
            "Une fois que nous avions reçus le cahier des charges, nous avons commencer à développer notre application. Notre applicaiton devait répondre à toutes les exigences fonctionnelles et non fonctionnelles imposées. Dans ce projet, nous avons commencé par réaliser un parser qui permettait de récupérer toutes les données et de récupérer les bons éléments. Ensuite, nous avons développé les différentes fonctions permettant de voir si le fichier était dans le bon format, de sélectionner une question et de l'ajotuer à l'examen, de simuler un examen, de comparer deux fichiers, voir le tupe de question d'un fichier... Une fois tout ceci réalisé, l'autre équipe a noté et améliorer cette application."
        ]
    },
];

function Project() {
    const { selectedChips } = useSelectedChips();
    const [filteredProjects, setFilteredProjects] = useState(allProjects);

    const handleFilter = (selected: string[]) => {
        if (selected.length === 0) {
            setFilteredProjects(allProjects);
        } else {
            setFilteredProjects(
                allProjects.filter((project) =>
                    project.labels.some((label) => selected.includes(label))
                )
            );
        }
    };

    return (
        <div className="projects-container" id="projects">
            <h1> Projets réalisés </h1>
            <FilterMenu onFilter={handleFilter} />

            {filteredProjects.length === 0 ? (
                <p className="number-visible-project" >Aucun projet ne correspond aux filtres sélectionnés. Veuillez chnger les filtres séléctionnés. </p>
            ) : (
                <>
                    <p className="number-visible-project"> {filteredProjects.length} projets sont visibles sur les {allProjects.length}. </p>
                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <IndividualProject
                                key={index}
                                image={project.image}
                                labels={project.labels}
                                title={project.title}
                                url={project.url}
                                resume={project.resume}
                                contexte={project.contexte}
                                etapes={project.etapes}
                            />
                        ))}
                    </div>
                </>
            )
            }
        </div >
    );
}

export default Project;