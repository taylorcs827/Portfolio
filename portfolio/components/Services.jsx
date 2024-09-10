import React from 'react';

export default function Services() {
    return (
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Frontend</h3>
                    <p>Specialized in building dynamic, responsive interfaces with HTML, CSS, and JavaScript. Proficient in React, ensuring smooth user interactions and visually appealing designs. Focused on delivering user-centered experiences with modern UI/UX practices.</p>
                </div>
                
                <div className="service">
                    <h3>Backend</h3>
                    <p>Proficient in developing robust server-side applications with Node.js and Express. Experienced in creating RESTful APIs to handle complex business logic and data processing. Focused on building scalable, secure, and maintainable backend systems.</p>
                </div> 
                
                <div className="service">
                    <h3>Database</h3>
                    <p>Experienced in designing, optimizing, and managing relational and NoSQL databases. Skilled in SQL and MongoDB for efficient data storage and retrieval. Committed to maintaining data integrity, security, and performance.</p>
                </div>
            </div>
            
            <a href="#work" className="btn">My Work</a>
        </section>
    )
}