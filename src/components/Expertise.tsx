import React, { useState } from "react";
import { useSelectedChips } from "../context/GlobalContext";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "HTML",
    "JavaScript",
    "CSS",
    "PHP",
    "NodeJs",
    "REST API",
    "Fast API",
    "Figma",
    "Cypress",
];

const labelsSecond = [
    "SQL",
    "Python",
    "Power BI",
    "R",
    "NLP",
];

const labelsThird = [
    "Java",
    "C",
    "C++",
    "Ada",
];

const labelsFourth = [
    "Git",
    "Jira",
    "Docker",
    "Méthodologie SCRUM",
];

function Expertise() {
    const { selectedChips, setSelectedChips } = useSelectedChips();

    const handleChipClick = (label: string) => {
        setSelectedChips((prevSelected) =>
            prevSelected.includes(label)
                ? prevSelected.filter((chip) => chip !== label)
                : [...prevSelected, label]
        );
    };

    const renderChips = (labels: string[]) =>
        labels.map((label, index) => (
            <Chip
                key={index}
                className={`chip ${selectedChips.includes(label) ? "selected" : ""}`}
                label={label}
                onClick={() => handleChipClick(label)}
            />
        ));

    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1> Compétences </h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full Stack Web Development</h3>
                        <p>Expertise dans le développement d’applications web modernes, de la conception UI/UX à l’implémentation frontend et backend.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {renderChips(labelsFirst)}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3>Data & IA</h3>
                        <p>Compétences en gestion, analyse et visualisation des données, avec une spécialisation en intelligence artificielle et traitement du langage.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {renderChips(labelsSecond)}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faJava} size="3x" />
                        <h3>Autres langages de programmation</h3>
                        <p>Expérience dans divers langages adaptés aux besoins spécifiques, des systèmes embarqués aux applications robustes.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {renderChips(labelsThird)}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>Gestion de projet</h3>
                        <p>Maîtrise des outils et méthodes agiles pour organiser, collaborer et déployer efficacement des projets.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {renderChips(labelsFourth)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;