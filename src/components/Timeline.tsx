import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1> Parcours </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ingénieur IA (stage)</h3>
            <h4 className="vertical-timeline-element-subtitle">Aubay, Boulogne-Billancourt, France</h4>
            <p>
              Stage de Recherche et de développement dans l’IA afin de
              réaliser automatiquement des états de l’art grâce aux
              dernières techniques de l’IA (génération de résumés et topic
              modeling). Création d’une application web en React et FastAPI
              pour interagir facilement avec notre modèle.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">Semestre d'étude à l'étranger</h3>
            <h4 className="vertical-timeline-element-subtitle">Riga Technical University, Riga, Lettonie</h4>
            <p>
              Semestre d'informatique en anglais.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assistant ingénieur (Stage)</h3>
            <h4 className="vertical-timeline-element-subtitle">1339 SAS - Grytics, Troyes, France</h4>
            <p>
              Développement web en React (Frontend) et Node.js (Backend)
              et réalisation de tests automatiques en JavaScript grâce à
              Cypress.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">Diplôme d'ingénieur</h3>
            <h4 className="vertical-timeline-element-subtitle">Université de Technologie de Troyes (UTT), Troyes, France</h4>
            <p>
              Diplôme d'ingénieur en Informatique et Systèmes d'Information (ISI) spécialisé en Valorisation des Connaissances (VDC)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">Baccalauréat Scientifique</h3>
            <h4 className="vertical-timeline-element-subtitle">Lycée Camille Claudel, Troyes, France</h4>
            <p>
              Baccalauréat Scientifique mention bien
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;