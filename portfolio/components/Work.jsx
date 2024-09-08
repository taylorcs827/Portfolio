import React from 'react';
import { projects } from '../js/Data.js';

export default function Work() {
    return (
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
                {Object.values(projects).map((project, index) => (
                    <a key={index} href={`portfolio-item.html?id=${index + 1}`} className="portfolio__item">
                        <img src={project.img} alt={project.title} className="portfolio__img" />
                    </a>
                ))}
            </div>
        </section>
    );
}
