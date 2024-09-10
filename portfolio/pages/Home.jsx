import React from "react";
import Header from "../components/Header.jsx";
import Intro from "../components/Intro.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Work from "../components/Work.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    return (
        <div>
            <Header />
            <section id="intro">
                <Intro />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="work">
                <Work />
            </section>
            <Footer />
        </div>
    );
}
