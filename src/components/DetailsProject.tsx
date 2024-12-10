import React from "react"

type IndividualProjectProps = {
    image: string;
    title: string;
    url?: string;
    resume: string;
    contexte: string;
    etapes: string[];
    additional_picture?: string;
    handleBackdropClick: (event?: React.MouseEvent) => void;
};

function DetailsProject({ image, title, url, resume, contexte, etapes, additional_picture, handleBackdropClick }: IndividualProjectProps) {
    return (
        <div className="details-container">
            <button className="close-button" onClick={handleBackdropClick}>
                &times;
            </button>
            <h2>{title}</h2>
            <div className="center-part">
                <img src={image} alt="thumbnail" className="details-image" />
                {url ?
                    <p> Vous pouvez retrouver le code de ce projet <a href={url} target="_blank" rel="noreferrer">ici</a>. </p>
                    :
                    <p> Impossible d'accéder à ce projet</p>
                }
            </div>
            <h3> Résumé </h3>
            <p> {resume} </p>
            <h3> Contexte </h3>
            <p>{contexte}</p>
            <h3> Etapes de réalisations </h3>
            <p>Pour réaliser ce projet, plusieurs étapes ont été nécessaires :</p>
            {etapes.map((etape, index) => (
                <div key={index}>
                    <h3>Étape {index + 1}</h3>
                    <p>{etape}</p>
                </div>
            ))}

        </div>
    )
}

export default DetailsProject