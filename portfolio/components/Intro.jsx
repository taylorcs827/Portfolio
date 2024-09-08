import React from "react";

export default function Intro() {
    return (
        <section class="intro" id="home">
            <h1 class="section__title section__title--intro">
                Hi, I am <strong>Chris Taylor</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">front-end dev</p>
            <img src="img/profile.jpg" alt="a picture of Chris Taylor smiling" class="intro__img" />
        </section>
    )
}