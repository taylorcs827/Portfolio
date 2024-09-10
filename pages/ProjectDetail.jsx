import React from 'react';
import { useParams } from 'react-router-dom'; // Get the project id from the URL
import { projects } from '../src/js/data.js'; // Import the projects data

export default function ProjectDetail() {
    const { id } = useParams(); // Extract the id from the URL
    const project = projects[id]; // Get the project data by id

    if (!project) {
        return <p>Project not found</p>; // Handle invalid project id
    }

    return (
        <div className="project-detail">
            <section className="intro" id="project-detail">
                <h1 className="section__title section__title--intro">
                    {project.title} <strong>{project.subtitle}</strong>
                </h1>
                <img src={project.imgDetails} alt={project.title} className="intro__img" />
                <p className="section__subtitle section__subtitle--intro">{project.descriptionIntro}</p>
            </section>
            <p className="section__details">{project.descriptionDetails}</p>
        </div>
    );
}
