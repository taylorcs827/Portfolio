import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { projects } from '../src/js/data.js'; // Assuming your project data is here

export default function Work() {
    return (
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
                {Object.keys(projects).map((id) => (
                    <Link key={id} to={`/work/${id}`} className="portfolio__item">
                        <img src={projects[id].img} alt={projects[id].title} className="portfolio__img" />
                    </Link>
                ))}
            </div>
        </section>
    );
}
