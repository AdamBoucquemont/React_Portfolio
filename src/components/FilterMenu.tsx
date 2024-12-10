import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useSelectedChips } from "../context/GlobalContext";
import '../assets/styles/FilterMenu.scss';

const allLabels = [
    "React", "HTML", "JavaScript", "CSS", "PHP", "NodeJs", "REST API", "Fast API", "Figma", "Cypress",
    "SQL", "Python", "Power BI", "R", "NLP",
    "Java", "C", "C++", "Ada",
    "Git", "Jira", "Docker", "Méthodologie SCRUM"
];

function FilterMenu({ onFilter }: { onFilter: (selected: string[]) => void }) {
    const { selectedChips, setSelectedChips } = useSelectedChips();
    const [open, setOpen] = useState(false);

    const handleToggle = (label: string) => {
        const updatedChips = selectedChips.includes(label)
            ? selectedChips.filter((chip) => chip !== label)
            : [...selectedChips, label];

        setSelectedChips(updatedChips);
        onFilter(updatedChips);
    };

    const handleReset = () => {
        setSelectedChips([]);
        onFilter([]);
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="filter-container">
            <Button
                variant="outlined"
                startIcon={<FilterAltIcon />}
                onClick={handleOpen}
            >
                Filtres
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                PaperProps={{
                    style: {
                        backgroundColor: "#12171D",
                        color: "white",
                        borderRadius: "8px",
                    },
                }}
            >
                <DialogTitle>Filtres</DialogTitle>
                <DialogContent>
                    <FormControl component="fieldset" className="filter-checkbox-group">
                        <FormGroup>
                            {allLabels.map((label, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox
                                            checked={selectedChips.includes(label)}
                                            onChange={() => handleToggle(label)}
                                            color="default" // Checkbox en blanc pour s'adapter au fond rouge
                                        />
                                    }
                                    label={label}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions className="filter-dialog-actions">
                    <Button onClick={handleReset} variant="outlined" className="reset-button">
                        Réinitialiser
                    </Button>
                    <Button onClick={handleClose} color="inherit">
                        Fermer
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FilterMenu;