import React from "react";
import Chip from '@mui/material/Chip';
import { useSelectedChips } from "../context/GlobalContext";

const allLabels = [
    "React", "HTML", "JavaScript", "CSS", "PHP", "NodeJs", "REST API", "Fast API", "Figma", "Cypress",
    "SQL", "Python", "Power BI", "R", "NLP",
    "Java", "C", "C++", "Ada",
    "Git", "Jira", "Docker", "Méthodologie SCRUM"
];

function FilterMenu({ onFilter }: { onFilter: (selected: string[]) => void }) {
    const { selectedChips, setSelectedChips } = useSelectedChips();

    const handleChipClick = (label: string) => {
        const updatedChips = selectedChips.includes(label)
            ? selectedChips.filter((chip) => chip !== label) // Supprime si déjà sélectionné
            : [...selectedChips, label]; // Ajoute si non sélectionné

        setSelectedChips(updatedChips); // Met à jour dans le contexte
        onFilter(updatedChips); // Informe le parent pour appliquer le filtre
    };

    return (
        <div style={{ margin: '20px 0' }}>
            <h2>Filtres</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {allLabels.map((label, index) => (
                    <Chip
                        key={index}
                        label={label}
                        onClick={() => handleChipClick(label)}
                        className={selectedChips.includes(label) ? "selected-chip" : ""}
                        style={{
                            backgroundColor: selectedChips.includes(label) ? "#1976d2" : "#e0e0e0",
                            color: selectedChips.includes(label) ? "white" : "black",
                            cursor: 'pointer'
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default FilterMenu;