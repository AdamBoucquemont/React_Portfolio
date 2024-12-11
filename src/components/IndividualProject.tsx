import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import DetailsProject from './DetailsProject';

type IndividualProjectProps = {
    image: string;
    labels: string[]
    title: string;
    url?: string;
    resume: string;
    contexte: string;
    etapes: string[];
    additional_picture?: string;
};

function IndividualProject({ image, labels, title, url, resume, contexte, etapes, additional_picture }: IndividualProjectProps) {
    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        setShowDetails(true);
    };

    const handleBackdropClick = () => {
        setShowDetails(false);
    };

    return (
        <div className={`project ${showDetails ? 'details-mode' : ''}`} onClick={handleClick}>
            {!showDetails ? (
                <div className="image-container">
                    <img src={image} className="zoom" alt="thumbnail" />
                    <h2>{title}</h2>
                    <p>{resume}</p>
                    <div className='labels-overlay'>
                        {labels.map((label, index) => (
                            <Chip key={index} className="chip" label={label} />
                        ))}
                    </div>
                </div>
            ) : (
                // {showDetails && (
                <>
                    <div className="backdrop" onClick={handleBackdropClick}></div>

                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <DetailsProject
                            image={image}
                            title={title}
                            url={url}
                            resume={resume}
                            contexte={contexte}
                            etapes={etapes}
                            additional_picture={additional_picture}
                            handleBackdropClick={handleBackdropClick}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default IndividualProject