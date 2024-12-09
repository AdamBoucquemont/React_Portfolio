import React, { useState } from "react";
import aubay_image from '../assets/images/Aubay.png';
import galactik_football_image from '../assets/images/Galactik Football.png';
import grytics_image from '../assets/images/Grytics.png';
import IndividualProject from "./IndividualProject";
import '../assets/styles/Project.scss';
import FilterMenu from "./FilterMenu";
import { useSelectedChips } from "../context/GlobalContext";

const allProjects = [
    {
        image: aubay_image,
        labels: ["Python", "React", "CSS", "Figma", "Fast API", "Git", "Jira", "Docker", "Méthodologie SCRUM", "NLP"],
        title: "Site internet C.E.A",
        resume: "Site internet servant d'interface un utilisateur et une Intelligence Artificielle...",
        contexte: "Cette application et cette Intelligence Artificielle ont été développées lors de mon stage...",
        etapes: ["Étape 1 : État de l'art", "Étape 2 : Amélioration des solutions...", "Étape 3 : Conception avec Figma", "Étape 4 : Développement en React et FastAPI"]
    },
    {
        image: galactik_football_image,
        labels: ["HTML", "CSS", "Figma"],
        title: "Site Internet sur Galactik Football",
        resume: "Ce projet est un site internet en HTML et CSS sur le thème de Galactik Football.",
        contexte: "Ce projet a été réalisé en 2020 lors de la matière MM01...",
        etapes: ["Définir un cahier des charges", "Réalisation du site", "Feedback et modifications"]
    },
    {
        image: grytics_image,
        labels: ["React", "CSS", "NodeJS", "Git", "Jira", "SQL", "Cypress"],
        title: "Grytics",
        resume: "Lors de cette mission, j'ai eu l'occasion d'occuper diverses missions sur une application React...",
        contexte: "Toutes ces missions ont été réalisées dans le cadre de mon premier stage...",
        etapes: ["Tests automatiques avec Cypress", "Développement de nouvelles fonctionnalités"]
    },
];

function Project() {
    const { selectedChips } = useSelectedChips(); // Récupération des chips sélectionnés via le contexte
    const [filteredProjects, setFilteredProjects] = useState(allProjects);

    // Fonction de filtrage
    const handleFilter = (selected: string[]) => {
        if (selected.length === 0) {
            setFilteredProjects(allProjects); // Si aucun filtre, affiche tout
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
            <h1>Personal Projects</h1>
            <FilterMenu onFilter={handleFilter} />

            <div className="projects-grid">
                {filteredProjects.length === 0 ? (
                    <p>Aucun projet ne correspond aux filtres sélectionnés.</p>
                ) : (
                    filteredProjects.map((project, index) => (
                        <IndividualProject
                            key={index}
                            image={project.image}
                            labels={project.labels}
                            title={project.title}
                            resume={project.resume}
                            contexte={project.contexte}
                            etapes={project.etapes}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Project;



// import React from "react";
// import aubay_image from '../assets/images/Aubay.png'
// import cilla_image from '../assets/images/CILLA.png'
// import galactik_football_image from '../assets/images/Galactik Football.png'
// import grytics_image from '../assets/images/Grytics.png'
// import photimal_image from '../assets/images/Photimal.png'
// import proxy_sante_image from '../assets/images/ProxySanté.png'
// import warr_utt_image from '../assets/images/Warr\'UTT.png'
// import no_image from '../assets/images/No_image_available.png'
// import IndividualProject from "./IndividualProject";
// import '../assets/styles/Project.scss';
// import FilterMenu from "./FilterMenu";

// function Project() {
//     return (
//         <div className="projects-container" id="projects">
//             <h1>Personal Projects</h1>
//             <FilterMenu onFilter={handleFilter} />
//             <div className="projects-grid">
//                 <IndividualProject
//                     image={aubay_image}
//                     labels={["Python", "React", "CSS", "Figma", "Fast API", "Git", "Jira", "Docker", "Méthodologie SCRUM", "NLP"]}
//                     title="Site internet C.E.A"
//                     resume="Site internet servant d'interface un utilisateur et une Intelligence Artificielle pour la réalisation d'un état de l'art automatique."
//                     contexte="Cette application et cette Intelligence Artificielle ont étés développés lors de mon stage de fin d'étude à Aubay. Cette intelligence artificielle devait pouvoir réaliser des états de l'art de façon automatique. "
//                     etapes={["Ce stage s'est déroulé en plusieures étapes. Tout d'abord, nous avions eu une étape d'état de l'art. Dans cette étape nous avons lu et lister tous les articles scientifiques qui nous ont semblés pertinents.",
//                         "Nous avons ensuite récupérés les meilleurs articles scientifiques pour tester les solutions apportés. Si cela nous convenait, nous les avons ensuite améliorer et adaptés à notre projet pour qu'ils soient le plus efficace possible. Nous avons également pu fusionner plusieurs méthodes pour réaliser le meilleur modèle possible.",
//                         "Ensuite, nous avons commencer à réaliser notre site. Il était important de savoir ce qu'il devait réaliser et comment il devait le faire. Nous avons donc dônc réalisé des wireframes et des maquettes avec Figma que nous avons fait le plus proche possible de ce que nous désirions réaliser.",
//                         "Après cela nous avons pu réellement développer l'application. Nous avons réalisé le côté frontend en React et le côté Backend en FastAPi, le tout relié à une base de donnée SQL. Afin de tout déployer facilement, nous avons également dockerisé notre application. Après cela, nous avns essayer d'avoir le maximum de retours possible pour avoir la meilleure application."
//                     ]}
//                 />
//                 {/* <IndividualProject
//                     image={cilla_image}
//                     labels={["Figma"]}
//                     title="C.I.L.L.A"
//                     presentation="Description"
//                 /> */}
//                 <IndividualProject
//                     image={galactik_football_image}
//                     labels={["HTML", "CSS", "Figma"]}
//                     title="Site Internet sur Galactik Football"
//                     url="https://github.com/AdamBoucquemont/MM01---Site-Internet"
//                     resume="Ce projet est un site internet en HTML et CSS sur le thème de Galactik Football."
//                     contexte="Ce projet a été réalisé en 2020 lors de la matière MM01. Il s'effectué par binome de projet. Je devais réaliser le site sur un thème souhaité par mon binome qui lui devait créer un site sur mon thème. Voici donc le site réalisé par moi sur son thème : Galactik Football."
//                     etapes={["Pour commencer, nous devions définir un thème et un cahier des charges. Cette étape permettait de définir toutes les informations importantes comme les pages souhaités, les couleurs voulus, les informations nécessaires, les effets désirés... C'est ce qui servait de fondation pour notre site.",
//                         "Ensuite, grâce au cahier des charges réalisé par notre binôme, nous devions réalisé le site demandé. Ce site possédait plusieures pages : la présentation de la série avec le générique, l'historique des saisons, la présentation des personnages importants, la présentation des fluides, une page de contacte, une page de quiz...",
//                         "Enfin, dans une ultime étape notre binome nous donnais son retour après lequel nous faisions les modifications nécessaires pour parfaire le site."]}
//                 />
//                 <IndividualProject
//                     image={grytics_image}
//                     labels={["React", "CSS", "NodeJS", "Git", "Jira", "SQL", "Cypress"]}
//                     title="Grytics"
//                     resume="Lors de cette mission, j'ai eu l'occasion d'occuper diverses missions sur une application React avec un backend en Node API et relié à des API."
//                     contexte="Toutes ces missions ont étés réalisé dans le cadre de mon premier stage de six mois à 1339 SAS - Grytics."
//                     etapes={["Dans une première phase de ce stage nous avons réalisés des tests automatiques d'un application react grâce à Cypress. Cypress nous permettait de simuler une utilisation humaine de l'application en faisant toutes les actions qu'un utilisateur pourrait faire et qui regardait si le bon résultat était affiché et si les bonnes données était chargées. Cela a permis de tester rapidement toute l'application à chaque fois qu'un changement était effectué dans le code source de l'application",
//                         "Lors d'une deuxième phase, j'ai eu l'opportunité de travailler directement sur l'application Grytics. En ajoutant des pages, la page d'erreur par exemple. Et en créant une API récupérant toutes les erreurs rencontrés et en créant un poste d'avertissement directement pour que le problème soit corrigé au plus vite."
//                     ]}
//                 />
//                 {/*<IndividualProject
//                     image={photimal_image}
//                     labels={["Fimga", "React"]}
//                     title="Projet Photimal"
//                     presentation="Description"
//                 />
//                 <IndividualProject
//                     image={proxy_sante_image}
//                     labels={["Fimga", "Jira"]}
//                     title="Proxy Santé"
//                     presentation="Description"
//                 />
//                 <IndividualProject
//                     image={warr_utt_image}
//                     labels={["Fimga"]}
//                     title="Warr'UTT"
//                     presentation="Description"
//                 />
//                 <IndividualProject
//                     image={no_image}
//                     labels={["Java"]}
//                     title="Witch Hunt"
//                     presentation="Description"
//                 />
//                 <IndividualProject
//                     image={no_image}
//                     labels={["C"]}
//                     title="Simulation d'un Hôpital"
//                     presentation="Description"
//                 />
//                 <IndividualProject
//                     image={no_image}
//                     labels={["Javascript"]}
//                     title="Gestion d'un emploi du temps"
//                     presentation="Description"
//                 />
//                 <IndividualProject
//                     image={no_image}
//                     labels={["Javascript"]}
//                     title="Gestion de questions pour un examen"
//                     presentation="Description"
//                 /> */}
//             </div>
//         </div >
//     );
// }

// export default Project;